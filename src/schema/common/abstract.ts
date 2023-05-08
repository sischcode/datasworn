/**
 * Abstract interfaces and utility types that are only used internally. They are not included in the final schema.
 */
import {
	type Static,
	Type,
	type TObject,
	type TSchema,
	type TString,
	type SchemaOptions,
	type ObjectOptions,
	type TRef,
	type TBoolean,
	type TNumber,
	type TProperties
} from '@sinclair/typebox'
import * as Utils from 'schema/common/utils'
import * as Localize from 'schema/common/localize'
import * as Metadata from 'schema/common/metadata'
import type { OracleTableRow } from 'schema/oracles'
import { mapValues } from 'lodash'
import { type PartialDeep } from 'type-fest'

/** Pattern for keys used in dictionary objects throughout Dataforged; they double as ID fragments, so they require "snake case" (lower case letters and underscores only) */
export const DICT_KEY = Type.RegEx(/^[a-z_]+$/)

export function Dictionary<T extends TSchema>(
	t: T,
	options: ObjectOptions = {}
) {
	return Type.Record(DICT_KEY, t, {
		...options,
		$comment: 'Deserialize as a dictionary object.'
	})
}

/**
 * A rollable number range for oracle table rows. Type parameters are for for row-like objects that have a static range, such as delve features/dangers.
 * @internal
 */
export const Range = Type.Object({
	low: Type.Union([Type.Integer({ minimum: 1, maximum: 100 }), Type.Null()]),
	high: Type.Union([Type.Integer({ minimum: 1, maximum: 100 }), Type.Null()])
})

export type Range = Static<typeof Range>

export function toDefaultsStub<T extends Static<TObject>>(object: T) {
	return mapValues(object, (v) => Type.Any({ default: v }))
}

export function toLiteralsStub<
	T extends Static<TObject<Record<string, TString | TNumber | TBoolean>>>
>(object: T) {
	return mapValues(object, (v) => Type.Literal(v))
}

/** Extracts all properties that can be rendered as Type.Literal with typebox */
type CanBeLiteral<T> = {
	[K in keyof T as Required<T>[K] extends boolean | number | string | null
		? K
		: never]: T[K]
}

export function StaticRowStub(
	literals: Partial<CanBeLiteral<OracleTableRow>> & {
		low?: number
		high?: number
	},
	defaults: PartialDeep<OracleTableRow> = {}
) {
	const result = Type.Object({
		...toLiteralsStub(literals),
		...toDefaultsStub(defaults)
	})
	return result
}

const sourcedNodeBaseProps = {
	name: Type.Ref(Localize.Label),
	canonical_name: Type.Optional(Type.Ref(Localize.Label)),
	source: Type.Ref(Metadata.Source),
	suggestions: Type.Optional(Type.Ref(Metadata.SuggestionsBase))
}

export function SourcedNode<T extends TProperties>(
	properties: T,
	options: ObjectOptions = {}
) {
	return Type.Object<typeof sourcedNodeBaseProps & T>(
		{
			...sourcedNodeBaseProps,
			...properties
		},
		options
	)
}
export type SourcedNode<T extends TProperties> = Static<
	ReturnType<typeof SourcedNode<T>>
>

export function Cyclopedia<T extends TProperties>(
	properties: T,
	options: ObjectOptions = {}
) {
	return SourcedNode(
		{
			features: Type.Array(Type.Ref(Localize.MarkdownString)),
			summary: Type.Ref(Localize.MarkdownString),
			description: Type.Ref(Localize.MarkdownString),
			quest_starter: Type.Optional(Type.Ref(Localize.MarkdownString)),
			...properties
		},
		options
	)
}
export type Cyclopedia<T extends TProperties> = Static<
	ReturnType<typeof Cyclopedia<T>>
>

// type LocalizeKeys = 'name' | 'label' | 'summary' | 'description' | 'text'
type MetaKeys = 'id' | 'source' | 'rendering' | 'name' | 'suggestions'

const MetaKeys = ['id', 'source', 'rendering', 'name', 'suggestions'] as const

/**
 * Omits common metadata and localization keys.
 */
export function OmitMeta<T extends TObject>(t: T) {
	return Type.Omit(t, MetaKeys)
}
export type OmitMeta<T> = Omit<T, MetaKeys>

export function PartialDeep<T extends TSchema>(t: T) {}

/**
 * Extends a single rules element
 */
export function ExtendOne<T extends TObject<{ id: TString | TRef<TString> }>>(
	t: T
) {
	return Type.Composite([
		OmitMeta(t),
		Type.Object({ extends: Type.Optional(t.properties.id) })
	])
}
export type ExtendOne<T extends TObject<{ id: TString | TRef<TString> }>> =
	Static<ReturnType<typeof ExtendOne<T>>>

export function ExtendMany<T extends TObject<{ id: TString | TRef<TString> }>>(
	t: T,
	extendIds: TString | TRef<TString>,
	options: ObjectOptions = {}
) {
	return Type.Composite(
		[
			Utils.DeepPartial(OmitMeta(t)),
			Type.Object({ extends: Type.Optional(Type.Array(extendIds)) })
		],
		options
	)
}
export type ExtendMany<T extends TObject<{ id: TString | TRef<TString> }>> =
	Static<ReturnType<typeof ExtendMany<T>>>

export function Collection<T extends TRef>(
	memberSchema: T,
	idPattern: TRef<TString>,
	properties: TProperties = {},
	options: SchemaOptions = {}
) {
	return SourcedNode(
		{
			id: idPattern,
			extends: Type.Optional(idPattern),
			color: Type.Optional(Type.Ref(Metadata.CSSColor)),
			summary: Type.Optional(Type.Ref(Localize.MarkdownString)),
			description: Type.Optional(Type.Ref(Localize.MarkdownString)),
			contents: Type.Optional(Dictionary(memberSchema)),
			...properties
		},
		options
	)
}

export type Collection<T> = Omit<
	Static<ReturnType<typeof Collection<TRef>>>,
	'contents'
> & { contents?: Record<string, T> }

export function RecursiveCollection<T extends TRef>(
	memberSchema: T,
	idPattern: TRef<TString>,
	refID: string,
	properties: TProperties = {},
	options: SchemaOptions = {}
) {
	return Collection(
		memberSchema,
		idPattern,
		{
			...properties,
			collections: Type.Optional(Dictionary(Type.Unsafe({ $ref: refID })))
		},
		{ ...options, $id: refID }
	)
}

export type RecursiveCollection<T> = Collection<T> & {
	collections?: Record<string, RecursiveCollection<T>>
}

/**
 * Note that `id` and `source` are always omitted.
 */
export function NodeExtendSelf<
	T extends TObject<{ id: TString; source?: TObject; name?: TString }>
>(t: T, omitKeys: Array<keyof Static<T>> = [], options: SchemaOptions = {}) {
	return Utils.DeepPartial(
		Type.Omit(t, [...omitKeys, 'id', 'source', 'name']),
		options
	) as TObject
}

/**
 * Note that `id` is always omitted.
 */
export function NodeExtendForeign<
	T extends TObject<{
		id: TString | TRef<TString>
		source?: TObject
		name?: TString
	}>
>(
	t: T,
	omitKeys: Array<keyof Static<T>> = [],
	extendsIDType: TString | TRef<TString> = t.properties.id,
	options: SchemaOptions = {}
) {
	return Type.Composite(
		[
			Utils.DeepPartial(
				Type.Omit(t, [...omitKeys, 'id', 'source', 'name'])
			) as TObject,
			Type.Object({ extends: Type.Optional(Type.Array(extendsIDType)) })
		],
		options
	)
}