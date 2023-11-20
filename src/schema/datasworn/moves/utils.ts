import {
	Type,
	TypeGuard,
	type ArrayOptions,
	type ObjectOptions,
	type Static,
	type TArray,
	type TLiteral,
	type TNull,
	type TObject,
	type TRef,
	type TSchema
} from '@sinclair/typebox'
import { type Simplify } from 'type-fest'
import {
	ExtractLiteralFromEnum,
	type TJsonEnum
} from '../../../typebox/enum.js'
import { SourcedNode, type EnhanceMany } from '../common/abstract.js'
import { MoveIDWildcard } from '../common/id.js'
import { Abstract, ID } from '../common/index.js'
import { MarkdownString } from '../common/localize.js'
import { Nullable, type TNullable } from '../common/utils.js'
import { ActionRollUsing } from './action.js'
import { MoveOutcomes, MoveRollType, TriggerBy } from './common.js'

const MoveBase = SourcedNode(
	Type.Object({
		id: Type.Ref(ID.MoveID),
		roll_type: Type.Ref(MoveRollType),
		replaces: Type.Optional(
			Type.Ref(ID.MoveID, {
				description:
					'Indicates that this move replaces the identified move. References to the replaced move can be considered equivalent to this move.'
			})
		),
		trigger: Type.Object({
			text: Type.Ref(MarkdownString, {
				description:
					'A markdown string containing the primary trigger text for this move.\n\nSecondary trigger text (for specific stats or uses of an asset ability) may be described described in Trigger#conditions.',
				type: 'string'
			})
		}),
		text: Type.Ref(MarkdownString, {
			description: 'The complete rules text of the move.'
		}),
		outcomes: Type.Optional(Type.Ref(MoveOutcomes)),
		oracles: Type.Optional(
			Type.Array(Type.Ref(ID.OracleTableID), {
				description:
					"Oracles associated with this move. It's not recommended to roll these automatically, as almost all moves present them as an option, not a requirement."
			})
		)
	})
)
export type MoveBase = Static<typeof MoveBase>

export function Move<
	RollType extends TSchema,
	Trigger extends TSchema,
	Outcomes extends TSchema
>(roll_type: RollType, trigger: Trigger, outcomes: Outcomes, options = {}) {
	return Type.Composite(
		[
			Type.Object({ roll_type, trigger, outcomes }),
			Type.Omit(MoveBase, ['roll_type', 'outcomes', 'trigger'])
		],
		options
	)
}

export const TriggerConditionBase = {
	text: Type.Optional(
		Type.Ref(MarkdownString, {
			description:
				'A markdown string of any trigger text specific to this trigger condition.'
		})
	),
	by: Type.Optional(Type.Ref(TriggerBy))
}

export function TriggerCondition<
	Method extends TSchema,
	RollOption extends TSchema
>(method: Method, roll_option: RollOption, options: ObjectOptions = {}) {
	const rollOptionsOptions = {
		description: 'The options available when rolling with this trigger.'
	}
	const roll_options = TypeGuard.TNull(roll_option)
		? roll_option
		: (Type.Array(roll_option, rollOptionsOptions) as RollOption extends TNull
				? TNull
				: TArray<RollOption>)

	return Type.Object(
		{
			...TriggerConditionBase,
			method,
			roll_options
			// roll_options: Type.Array(roll_option, {
			// 	description: 'The options available when rolling with this trigger.'
			// })
		},
		options
	)
}

export function Trigger(
	rollConditionSchema: TObject,
	options: ObjectOptions = {},
	conditionsOptions: ArrayOptions = {}
) {
	return Type.Object(
		{
			text: Type.Ref(MarkdownString, {
				description:
					'A markdown string of the primary trigger text for this move.\n\nSecondary trigger text (for specific stats or uses of an asset ability) may be available for individual trigger conditions.',
				type: 'string',
				pattern: /.*\.{3}/.source
			}),
			conditions: Type.Array(Type.Ref(rollConditionSchema), {
				...conditionsOptions
			})
		},
		options
	)
}

export function TriggerEnhancement(
	conditionSchema: TRef<TObject>,
	options: ObjectOptions
) {
	return Type.Object(
		{
			conditions: Type.Array(conditionSchema)
		},
		options
	)
}

export function TriggerConditionEnhancement<
	T extends TObject<{
		roll_options: TArray<TRef<TObject>>
		method: TRef<TJsonEnum>
	}>
>(base: T, options: ObjectOptions) {
	const RollOptions = base.properties.roll_options
	type RollOptions = T['properties']['roll_options']

	const Method = base.properties.method
	type Method = T['properties']['method']

	type TNullableRollOptions = Omit<
		T['properties'],
		'roll_options' | 'method'
	> & {
		roll_options: RollOptions extends TNull
			? RollOptions
			: TNullable<RollOptions>
		method: Method extends TNull ? Method : TNullable<Method>
	}

	const roll_options = TypeGuard.TNull(RollOptions)
		? RollOptions
		: Nullable(RollOptions)

	const method = TypeGuard.TNull(Method)
		? Method
		: Nullable(Method, {
				description:
					'A `null` value means this condition provides no roll mechanic of its own; it must be used with another trigger condition that provides a non-null `method`.'
		  })

	const nuProps = {
		...base.properties,
		roll_options,
		method
	} as TNullableRollOptions

	return Type.Object(nuProps, options)
}

export function MoveEnhancement<
	T extends TObject<{ roll_type: TLiteral<string> } & {}>,
	TriggerEnhancement extends TObject
>(
	moveSchema: T,
	triggerEnhanceSchema: TriggerEnhancement,
	options: ObjectOptions = {}
) {
	const result = Abstract.EnhanceMany(
		Type.Object({
			roll_type: moveSchema.properties.roll_type,
			trigger: Type.Optional(triggerEnhanceSchema)
		}),
		Type.Ref(MoveIDWildcard),
		options
	)

	return result
}
export type MoveEnhancement<T extends { roll_type: string }, E> = Simplify<
	EnhanceMany<Pick<T, 'roll_type'> & { trigger?: E }>
>

export function RollOption<
	Using extends ActionRollUsing,
	Props extends TObject
>(using: Using, props: Props, options: ObjectOptions = {}) {
	return Type.Composite(
		[
			props,
			Type.Object({
				using: ExtractLiteralFromEnum(ActionRollUsing, using)
			})
		],
		{
			additionalProperties: false,
			...options
		}
	)
}
export type RollOption<
	Using extends string,
	Props extends Record<string, unknown>
> = {
	using: Using
} & Props
