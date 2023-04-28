import { DF_KEY, dictionarySchema, refSchema } from './common'
import { type JSONSchemaType as Schema } from 'ajv'
import {
	type Moves as Types,
	type Localize,
	type Metadata,
	type Players,
	type RulesetClassic,
	type RulesetStarforged,
	type Moves,
	type Assets
} from '@base-types'
import { Abstract } from '@schema-json'
import _ from 'lodash'
import { type PartialSchema } from 'ajv/dist/types/json-schema'
import { type MarkdownPhrase } from 'schema-json/localize'

export const MoveID: Schema<Types.MoveID> = {
	type: 'string',
	oneOf: [
		{
			title: 'Move ID',
			type: 'string',
			pattern: /^[a-z0-9][a-z0-9_]+\/moves(\/[a-z][a-z_]*[a-z]){2}$/.source,
			examples: ['starforged/moves/adventure/face_danger']
		},
		{
			title: 'Asset move ID',
			type: 'string',
			pattern:
				/^[a-z0-9][a-z0-9_]+\/assets(\/[a-z][a-z_]*[a-z]){2}\/moves\/[a-z][a-z_]*[a-z]$/
					.source,
			examples: ['starforged/assets/module/grappler/moves/ready_grappler']
		}
	]
}

export const MoveCategoryID: Schema<Types.MoveCategoryID> = {
	type: 'string',
	pattern: /^[a-z0-9][a-z0-9_]+\/collections\/moves\/[a-z][a-z_]*[a-z]$/.source,
	examples: ['starforged/collections/moves/adventure']
}

export const MoveCategory: Schema<Types.MoveCategory> =
	Abstract.collectionSchema<Types.MoveCategory>('Move', 'MoveCategoryID')
export const MoveCategoryExtension = Abstract.collectionExtensionSchema(
	'Move',
	'MoveCategoryID'
)

export const MoveOutcomeType: Schema<Types.MoveOutcomeType> = {
	type: 'string',
	enum: ['miss', 'weak_hit', 'strong_hit']
}

const MoveOutcome: Schema<Types.MoveOutcome> = {
	type: 'object',
	required: ['text'],
	additionalProperties: false,
	properties: {
		text: refSchema<Localize.MarkdownParagraph>('MarkdownParagraph'),
		count_as: refSchema<Types.MoveOutcomeType>('MoveOutcomeType'),
		reroll: {
			title: 'Move reroll',
			type: 'object',
			required: ['method'],
			nullable: true,
			properties: {
				text: refSchema<Localize.MarkdownPhrase>('MarkdownPhrase'),
				method: {
					title: 'Move reroll method',
					type: 'string',
					enum: ['any', 'all', 'challenge_die', 'challenge_dice', 'action_die']
				}
			}
		}
	}
}

const MoveOutcomeMatchable: Schema<Types.MoveOutcomeMatchable> = _.merge(
	{} as Schema<Types.MoveOutcomeMatchable>,
	MoveOutcome,
	{ properties: { match: MoveOutcome } }
)

const MoveOutcomes: Schema<Types.MoveOutcomes> = {
	title: 'Move outcomes',
	type: 'object',
	required: MoveOutcomeType.enum as Types.MoveOutcomeType[],
	properties: {
		miss: MoveOutcomeMatchable,
		weak_hit: MoveOutcome,
		strong_hit: MoveOutcomeMatchable
	}
}

export const RollableStatID: Schema<Types.RollableStatID> = {
	oneOf: [
		refSchema<Players.PlayerStatID>('StatID'),
		refSchema<Players.PlayerConditionMeterID>('ConditionMeterID'),
		refSchema<Assets.AssetAbilityControlFieldID>('AssetAbilityControlFieldID'),
		refSchema<Assets.AssetControlFieldID>('AssetControlFieldID'),
		refSchema<Assets.AssetAbilityOptionFieldID>('AssetAbilityOptionFieldID'),
		refSchema<Assets.AssetOptionFieldID>('AssetOptionFieldID'),
		refSchema<
			RulesetClassic.ConditionMeterAlias | RulesetStarforged.ConditionMeterAlias
		>('ConditionMeterAlias')
	]
}

export const MoveRollType: Schema<Types.MoveRollType> = {
	type: 'string',
	enum: ['action_roll', 'progress_roll']
}

export const MoveRollMethod: Schema<Types.MoveRollMethod> = {
	type: 'string',
	enum: ['any', 'highest', 'lowest', 'all'],

	description:
		'`any`: When rolling with this move trigger option, the player picks which stat to use.\n\n`all`: When rolling with this move trigger option, *every* stat or progress track of the `using` key is rolled.\n\n`highest`: When rolling with this move trigger option, use the highest/best option from the `using` key.\n\n`lowest`: When rolling with this move trigger option, use the lowest/worst option from the `using` key.'
}

const TriggerBy: Schema<Moves.TriggerBy> = {
	title: 'Triggered by',
	type: 'object',
	description:
		"Information on who can trigger this trigger option. Usually this is just the player, but some asset abilities can trigger from an ally's move.",
	additionalProperties: false,
	default: { player: true, ally: false },
	required: ['player', 'ally'],
	properties: {
		player: {
			type: 'boolean',
			default: true
		},
		ally: {
			type: 'boolean',
			default: false
		}
	}
}

export const TriggerChoiceBase: PartialSchema<Types.TriggerChoiceBase> = {
	type: 'object',
	title: 'Trigger choice',
	description:
		'Properties common to trigger options for both action rolls and progress rolls.',
	properties: {
		label: refSchema<Localize.Label>('Label') as any,
		using: { enum: ['progress', 'custom', 'stat'] } as any,
		value: { type: 'integer', nullable: undefined as any },
		ref: { type: 'string', nullable: undefined as any }
	}
}

export const TriggerOptionProgressChoice: Schema<Types.TriggerOptionProgressChoice> =
	_(TriggerChoiceBase)
		.omit('properties.using', 'properties.ref')
		.merge({
			title: 'Trigger choice (progress roll)',
			description:
				'A choice belonging to a progress trigger option (which belongs in turn to a progress move).',
			required: ['ref'],
			properties: {
				using: { const: 'progress' },
				ref: {
					...refSchema<Types.ProgressType>('ProgressType'),
					description:
						'Identifies the type of progress track associated with this choice.'
				},
				value: {
					$comment:
						'Omit this for data entry. Recommended implementation: a getter that returns the appropriate integer value.'
				}
			}
		})
		.value()

export const TriggerOptionChoiceCustomValue: Schema<Types.TriggerOptionChoiceCustomValue> =
	_(TriggerChoiceBase)
		.omit('properties.using', 'properties.ref')
		.merge({
			title: 'Trigger choice (custom value)',
			description:
				'Defines a custom static value to be used in place of a stat for an action roll.',
			required: ['value', 'label', 'custom'],
			properties: {
				using: {
					const: 'custom'
				},
				value: {
					description:
						'The numeric value to be used in place of a stat when making the action roll.',
					type: 'integer'
				},
				ref: { const: null }
			}
		})
		.value()

export const TriggerOptionChoiceStat: Schema<Types.TriggerOptionChoiceStat> = _(
	TriggerChoiceBase
)
	.omit('properties.using', 'properties.ref')
	.merge({
		description:
			'For action rolls that use standard player stats, player condition meters, and asset condition meters.',
		required: ['ref'],
		properties: {
			using: { const: 'stat' },
			ref: {
				...refSchema<Types.RollableStatID>('RollableStatID'),
				description: 'Identifies the stat whose value is to be referenced.'
			},
			value: {
				$comment:
					'Omit this for data entry. Recommended implementation: a getter that returns the appropriate integer value.'
			}
		}
	})
	.value()

export const TriggerOptionActionChoice: Schema<Types.TriggerOptionActionChoice> =
	{
		oneOf: [
			refSchema('TriggerChoiceStat'),
			refSchema('TriggerChoiceCustomValue')
		]
	}

const TriggerOptionBase: PartialSchema<Types.TriggerOption> = {
	title: 'Trigger option',
	type: 'object',
	additionalProperties: false,
	properties: {
		text: refSchema<Localize.MarkdownPhrase>('MarkdownPhrase'),
		method: {
			default: 'any',
			description:
				'The method this move trigger uses to select which stat(s) or progress track(s) are rolled. If this is a MoveOutcomeType, then it simply takes that result automatically rather than making a roll.\n\nIf this is `null`, this trigger option describes no rolls of its own, and should inherit the roll method of another trigger option the extended move.',
			oneOf: [
				refSchema<Types.MoveRollMethod>('MoveRollMethod'),
				refSchema<Types.MoveOutcomeType>('MoveOutcomeType')
			]
		},
		choices: {
			title: 'Trigger option choices',
			type: ['array', 'null'] as any,
			items: { type: 'object' },
			description:
				'The stat choices allowed by this trigger option.\n\nIf this is `null`, it should inherit the value of another trigger option for the extended move.'
		},
		by: TriggerBy
	}
}

const TriggerOptionAction = _.merge({}, TriggerOptionBase, {
	properties: {
		method: { default: 'any' },
		choices: {
			type: 'array',
			items: refSchema<Types.TriggerOptionActionChoice>('TriggerChoiceAction')
		}
	}
})

const TriggerOptionProgress = _.merge({}, TriggerOptionBase, {
	title: 'Trigger option (progress move)',
	properties: {
		method: { default: 'any' },
		choices: {
			type: 'array',
			items: refSchema<Types.TriggerOptionProgressChoice>(
				'TriggerChoiceProgress'
			)
		}
	}
})

const Trigger: Schema<Types.Trigger> = {
	title: 'Trigger',
	description: "Describes a move's trigger conditions.",
	type: 'object',
	required: ['text'],
	additionalProperties: false,
	properties: {
		text: {
			...refSchema<Localize.MarkdownPhrase>('MarkdownPhrase'),
			description:
				'A markdown string containing the primary trigger text for this move.\n\nSecondary trigger text (for specific stats or uses of an asset ability) may be described described in Trigger#Options.',
			type: 'string',
			pattern: /^.*\.{3}$/.source
		},
		roll_type: refSchema<Types.MoveRollType>('MoveRollType'),
		options: {
			description: 'Available options for triggering this move.',
			type: 'array',
			nullable: true
		} as any
	},
	oneOf: [
		{
			title: 'Trigger (action roll)',
			required: ['options'],
			properties: {
				roll_type: { const: 'action_roll' },
				options: {
					type: 'array',
					items: TriggerOptionAction
				}
			}
		},
		{
			title: 'Trigger (progress move)',
			required: ['options'],
			properties: {
				roll_type: { const: 'progress_roll' },
				options: {
					title: 'Trigger options (progress move)',

					type: 'array',
					items: TriggerOptionProgress
				}
			}
		}
	]
}

export const Move: Schema<Types.Move> = {
	type: 'object',
	required: ['id', 'name', 'text', 'trigger', 'source'],
	additionalProperties: false,
	properties: {
		id: refSchema<Moves.MoveID>('MoveID'),
		name: refSchema<Localize.Label>('Label'),
		trigger: Trigger,
		source: refSchema<Metadata.Source>('Source'),
		outcomes: MoveOutcomes,
		text: refSchema<Localize.MarkdownParagraphs>('MarkdownParagraphs'),
		suggestions: refSchema<Metadata.SuggestionsBase>('Suggestions')
		// tags: {
		// 	description:
		// 		"Arbitrary strings tags that describe optional metadata that doesn't fit in other properties.",
		// 	type: 'array',
		// 	items: {
		// 		type: 'string'
		// 	}
		// },
	}
}

// export const TriggerOptionAction: Schema<Types.TriggerOption<'action_roll'>> = {
// 	required: ['method'],
// 	properties: {
// 		by: { ...refSchema<typeof TriggerBy>('TriggerBy'), nullable: true },
// 		choices: {
// 			type: 'array',
// 			items: { type: 'object' }
// 		},
// 		method: { ...refSchema<typeof MoveRollMethod>('MoveRollMethod') },
// 		text: { ...refSchema<typeof MarkdownPhrase>('MarkdownPhrase') }
// 	}
// }

export const TriggerExtension: Schema<
	| Types.TriggerExtension<'action_roll'>
	| Types.TriggerExtension<'progress_roll'>
> = {
	required: ['options', 'roll_type'],
	type: 'object',
	properties: {
		roll_type: refSchema<typeof MoveRollType>('MoveRollType'),
		options: { type: 'array' } as any // handled by oneOf
	},
	oneOf: [
		{
			roll_type: { const: 'action_roll' },
			options: {
				type: 'array',
				items: refSchema<typeof TriggerOptionAction>('TriggerOptionAction')
			}
		},
		{
			roll_type: { const: 'progress_roll' },
			options: {
				type: 'array',
				items: refSchema<typeof TriggerOptionProgress>('TriggerOptionProgress')
			}
		}
	]
}

export const MoveExtension: Schema<Types.MoveExtension> = {
	title: 'Move extension',
	description: 'Upgrades or otherwise modifies one or more moves.',
	required: ['extends'],
	type: 'object',
	properties: {
		// id: refSchema<string>('ID'),
		extends: {
			description: 'An array of Move IDs',
			type: 'array',
			items: refSchema<Types.MoveID>('MoveID')
		},
		trigger: refSchema<typeof TriggerExtension>('TriggerExtension'),
		text: Move.properties?.text as any,
		outcomes: _.omit(
			MoveOutcomes,
			'required',
			'properties.strong_hit.required',
			'properties.weak_hit.required',
			'properties.miss.required'
		)
	}
}
