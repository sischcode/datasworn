import {
	Hint,
	Kind,
	TAnySchema,
	TArray,
	TBoolean,
	TInteger,
	TLiteral,
	TNull,
	TNumber,
	TObject,
	TOptional,
	TRecord,
	TRef,
	TSchema,
	TString,
	TThis,
	Type,
	TypeGuard
} from '@sinclair/typebox'
import * as JTD from 'jtd'

import JtdType, { Metadata } from './typedef.js'

import { JTDSchemaType, SomeJTDSchemaType } from 'ajv/dist/core.js'
import {
	cloneDeep,
	isInteger,
	isNumber,
	isString,
	isUndefined,
	mapValues,
	merge,
	omit,
	omitBy,
	pick,
	pickBy,
	isEqual,
	set,
	isNull
} from 'lodash-es'
import * as Generic from '../../schema/Generic.js'
import * as Utils from '../../schema/Utils.js'
import { TRoot } from '../../schema/root/SchemaRoot.js'
import Log from '../utils/Log.js'
import { Discriminator, JsonTypeDef, Members } from '../../schema/Symbols.js'
import * as Assets from '../../schema/Assets.js'
import { defsKey, rootSchemaName } from '../const.js'

/** Extract metadata from a JSON schema for use in a JTD schema's `metadata` property */
export function extractMetadata<T extends TAnySchema>(jsonSchema: T) {
	const metadataKeys = [
		// general
		'description',
		'examples',
		// string
		'pattern',
		'format',
		// numeric
		'exclusiveMaximum',
		'exclusiveMinimum',
		'maximum',
		'minimum',
		'multipleOf',
		// array
		'uniqueItems',
		'minItems',
		'maxItems'
	]

	let metadata = pick(cloneDeep(jsonSchema), ...metadataKeys) as Metadata

	if (jsonSchema[JsonTypeDef]?.metadata)
		metadata = merge(metadata, omit(jsonSchema[JsonTypeDef].metadata))

	// @ts-ignore
	if (jsonSchema[Utils.EnumDescription]) {
		// console.log(jsonSchema)
		// @ts-ignore
		metadata.enumDescription = jsonSchema[Utils.EnumDescription]
		// @ts-ignore
		metadata.description = jsonSchema[Utils.Description]
	}

	if (Object.keys(metadata)?.length === 0) return undefined

	return metadata
}

export function setIdRef<T extends { id: string }, R extends string>(
	schema: JTDSchemaType<T>,
	ref: R
) {
	type NewRef = { [P in R]: string }
	type RefRecord = typeof schema extends JTDSchemaType<T, infer U>
		? U & NewRef
		: NewRef
	return set(schema, 'properties.id.ref', ref) as unknown as JTDSchemaType<
		T & { id: R },
		RefRecord
	>
}

export function toJtdEnum<
	U extends string[] | number[],
	T extends Utils.TUnionEnum<U>
>(schema: T) {
	if (schema.enum.every(isString)) return JtdType.Enum(schema.enum)
	if (schema.enum.every(isInteger)) return JtdType.Uint8()

	throw new Error(`Unable to infer schema for enum: ${JSON.stringify(schema)}`)
}

/** Identifiers of all JTD schemas that are referenced */
export const refTracker = new Set<string>()

export function toJtdRef(schema: TRef | TThis) {
	const ref = schema.$ref.replace(`#/${defsKey}/`, '')

	refTracker.add(ref)

	return { ref } as unknown as TSchema
}

/** Transforms a Typebox array schema into JTD elements */
export function toJtdElements<U extends TSchema, T extends TArray<U>>(
	schema: T
) {
	const items = schema.items as TSchema
	return JtdType.Array(toJtdForm(items))
}

/** Transform a Typebox object schema into JTD properties */
export function toJtdProperties<T extends TObject>(schema: T) {
	const fields = omitBy(
		mapValues(schema.properties, (subschema) => {
			if (Utils.TNullable(subschema))
				return JtdType.Nullable(toJtdForm(subschema.anyOf[0] as any))

			const base = toJtdForm(subschema as any)

			if (TypeGuard.TOptional(subschema)) return Type.Optional(base)

			return base
		}),
		isUndefined
	)

	const result = JtdType.Struct(fields)

	return result
}

/** Transform a Typebox record schema into JTD values */
export function toJtdValues<T extends TRecord<TString, U>, U extends TSchema>(
	schema: T
) {
	const [propertyPattern, value] = Object.entries(schema.patternProperties)[0]
	const unwrap = toJtdForm(value as unknown as TConvertible)

	if (!unwrap)
		throw new Error(
			`Couldn't unwrap Record value schema: ${JSON.stringify(schema)}`
		)

	return JtdType.Record(unwrap, { propertyPattern })

	// FIXME: This is probably only safe for Dictionary-style patternProperties
}

export function toJtdSingleEnum(schema: TLiteral<string>) {
	if (typeof schema.const === 'number')
		throw new Error(`Got a number literal from ${schema.$id}`)

	return JtdType.Enum([schema.const])
}

export function toJtdDiscriminator(
	schema: Utils.TDiscriminatedUnion<TObject[], string>
) {
	const discriminator = schema[Discriminator]

	const mapping = Object.fromEntries(
		schema[Members].map((subschema) => [
			subschema.properties[discriminator].const,
			{
				...omit(toJtdProperties(subschema), `properties.${discriminator}`),
				metadata: extractMetadata(subschema)
			}
		])
	)

	// console.log(discriminator, mapping)
	return JtdType.Union(mapping, discriminator)
}

type TConvertible =
	| TLiteral<string>
	| TString
	| TBoolean
	| TInteger
	| TObject
	| TNumber
	| Utils.TUnionEnum

function toJtdForm(
	schema: TConvertible | Utils.TNullable<TConvertible> | TOptional<TConvertible>
): JTD.Schema
function toJtdForm(schema: TNull): null
function toJtdForm(schema: TSchema): JTD.Schema | null {
	// console.log(schema)

	let result: TSchema | undefined = undefined

	switch (true) {
		case schema[JsonTypeDef]?.skip:
			return null
		case schema[JsonTypeDef]?.schema != null ||
			isEqual(schema[JsonTypeDef]?.schema, {}):
			// @ts-expect-error
			return merge(cloneDeep(schema[JsonTypeDef].schema), {
				metadata: extractMetadata(schema)
			})
		case TypeGuard.TAny(schema):
			result = JtdType.Any()
			break
		case TypeGuard.TNull(schema):
			return null
		case TypeGuard.TLiteralString(schema):
			result = toJtdSingleEnum(schema as TLiteral<string>)
			break
		case TypeGuard.TString(schema):
			result = JtdType.String()
			break
		case TypeGuard.TLiteralBoolean(schema):
		case TypeGuard.TBoolean(schema):
			result = JtdType.Boolean()
			break
		case TypeGuard.TLiteralNumber(schema):
		case TypeGuard.TInteger(schema):
			result = JtdType.Int16()
			break
		case TypeGuard.TNumber(schema):
			Log.warn(
				'Received a number schema. Consider making it an integer instead.',
				schema
			)
			result = JtdType.Float32()
			break
		case TypeGuard.TThis(schema):
		case TypeGuard.TRef(schema):
			result = toJtdRef(schema as TThis | TRef)
			break
		case TypeGuard.TRecord(schema):
			// case schema[Generic.DictionaryBrand] === 'Dictionary':
			result = toJtdValues(schema as TRecord)
			break
		case TypeGuard.TArray(schema):
			result = toJtdElements(schema as TArray)
			break
		case TypeGuard.TObject(schema):
		case schema[Kind] === 'Object':
			result = toJtdProperties(schema as TObject)
			break
		case Utils.TDiscriminatedUnion(schema):
			result = toJtdDiscriminator(schema as Utils.TDiscriminatedUnion)
			break
		case TypeGuard.TUnion(schema) && schema[Hint] === 'Enum':
			result = JtdType.Enum(schema.anyOf.map((item: TLiteral) => item.const))
			result.metadata = {
				enumDescription: Object.fromEntries(
					schema.anyOf.map((item: TLiteral) => [item.const, item.description])
				)
			}
			break
		case Utils.TUnionEnum(schema):
			result = toJtdEnum(schema as any)
			break
	}

	if (result == null) {
		// console.log(schema)
		throw new Error(
			`no transform available for typebox schema kind ${schema[Kind]}`
		)
	}

	result = merge(result, { metadata: extractMetadata(schema) })

	// if (result[Kind] === 'TypeDef:Enum' && !result.metadata?.typescriptType) {
	// 	result.metadata ||= {}
	// 	result.metadata.typescriptType = result.enum
	// 		.map((item: string | number) => (isInteger(item) ? item : `'${item}'`))
	// 		.join(' | ')
	// }

	return result as any
}

export function toJtdRoot<T extends TRoot>(schemaRoot: T) {
	const defs = {} as Record<string, JTD.Schema | undefined>

	for (const k in schemaRoot[defsKey]) {
		if (k === rootSchemaName) continue
		try {
			defs[k] = toJtdForm(schemaRoot[defsKey][k])
		} catch (err) {
			Log.error(`Couldn't convert ${schemaRoot[defsKey][k].$id}`, err)
		}
	}
	// HACK: not sure why this is getting omitted, there's a few places it could happen and i havent tracked it down yet

	// defs.SelectEnhancementFieldChoice = toJtdForm(
	// 	omit(Assets.SelectEnhancementFieldChoice, JsonTypeDef)
	// )

	const base = toJtdForm(schemaRoot[defsKey][rootSchemaName])

	if (isUndefined(base))
		throw new Error(
			`Unable to infer JSON Typedef form for root schema "${rootSchemaName}".`
		)

	return {
		...base,
		definitions: omitBy(defs, (v, k) => {
			if (isNull(v)) {
				Log.info(`Skipping "${k}"`)
				return true
			}
			if (!refTracker.has(k)) {
				Log.info(`Orphaned definition "${k}" -- skipping`)
				return true
			}

			return false
		})
	}
}

export { toJtdForm }
