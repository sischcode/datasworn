import {
	type SchemaOptions,
	type TSchema,
	Kind,
	Static,
	Type,
	TObject,
	TupleToIntersect,
	UnionToTuple
} from '@sinclair/typebox'
import { TypeSystem } from '@sinclair/typebox/system'
import { JsonPrimitive, ValueOf, type JsonValue, Simplify } from 'type-fest'
import { isJsonValue } from './isJsonValue.js'
import { map } from 'lodash-es'
import { Entries, MapEntries } from 'type-fest/source/entries.js'

TypeSystem.Type('JsonEnum', JsonEnumCheck)

export function JsonEnumCheck(schema: TJsonEnum, value: unknown) {
	return schema.enum.every(isJsonValue)
}

export function TJsonEnum(schema: unknown): schema is TJsonEnum {
	return (schema as TJsonEnum)[Kind] === 'JsonEnum'
}

export const EnumDescriptions = Symbol()
export const Description = Symbol()

export interface TJsonEnum<T extends string[] | number[] = string[] | number[]>
	extends TSchema {
	[Kind]: 'JsonEnum'
	[EnumDescriptions]: Record<T[number], string>
	[Description]?: string | undefined
	static: { [K in keyof T]: T[K] }[number]
	enum: [...T]
}

// export function JsonEnumFromRecord<K extends number>(
// 	entries: Record<K, string>,
// 	options?: SchemaOptions
// ): JsonEnum<K[]>
export function JsonEnumFromRecord<K extends string>(
	entries: Record<K, string>,
	options?: SchemaOptions
): TJsonEnum<K[]>
export function JsonEnumFromRecord<T extends Array<string> | Array<number>>(
	entries: Record<T[number], string>,
	options: SchemaOptions = {}
): TJsonEnum<T> {
	const arr = Object.keys(entries).map((k) =>
		Number.isInteger(Number(k)) ? Number(k) : k
	) as (keyof typeof entries)[]

	let description = map(
		entries,
		(description, literal) => `  * ${literal?.toString()}: ${description}`
	).join('\n')

	if (options.description)
		description = options.description + '\n\n' + description

	return {
		[Description]: options.description,
		[EnumDescriptions]: entries,
		[Kind]: 'JsonEnum',
		enum: arr,
		...options,
		description
	} as TJsonEnum<T>
}

export function MergeEnumSchemas<T extends TJsonEnum<string[]>[]>(
	schemas: [...T],
	options: SchemaOptions = {}
) {
	const entries = schemas
		.map((item) => item[EnumDescriptions])
		.reduce((prev, cur) => Object.assign(prev, cur)) as {
		[P in Static<T[number]>]: string
	}

	return JsonEnumFromRecord(entries, options)
}

/** Extracts a literal from a JsonEnum, plus any associated description. */
export function ExtractLiteralFromEnum<
	T extends ReturnType<typeof JsonEnumFromRecord>,
	K extends T['enum'][number]
>(schema: T, key: K, options: SchemaOptions = {}) {
	const description = schema[EnumDescriptions][key]
	return Type.Literal<K>(key, {
		description,
		...options
	})
}

export function JsonEnum<T extends string[] | number[]>(
	literals: [...T],
	options: SchemaOptions = {}
) {
	return { ...options, [Kind]: 'JsonEnum', enum: literals } as TJsonEnum<T>
}

// export function StringEnum<T extends string[]>(
// 	values: [...T],
// 	options: SchemaOptions = {}
// ) {
// 	const result = Type.Unsafe<T[number]>({
// 		...options,
// 		type: 'string',
// 		enum: values
// 	})
// 	return result as typeof result & { enum: typeof values }
// }

// export function IntegerEnum<T extends number[]>(
// 	values: [...T],
// 	options: SchemaOptions = {}
// ) {
// 	const result = Type.Unsafe<T[number]>({
// 		...options,
// 		type: 'integer',
// 		enum: values
// 	})
// 	return result as typeof result & { enum: typeof values }
// }
