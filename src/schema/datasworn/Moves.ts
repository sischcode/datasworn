import { Type, type Static } from '@sinclair/typebox'
import { Generic, ID } from './common/index.js'
import {
	MoveActionRoll,
	MoveActionRollEnhancement,
	MoveNoRoll,
	MoveNoRollEnhancement,
	MoveProgressRoll,
	MoveProgressRollEnhancement,
	MoveSpecialTrack,
	MoveSpecialTrackEnhancement
} from './moves/index.js'
import { DiscriminatedUnion } from '../../typebox/discriminated-union.js'

// discriminated union of all moves by roll_type
export const Move = DiscriminatedUnion(
	'roll_type',
	[MoveActionRoll, MoveNoRoll, MoveProgressRoll, MoveSpecialTrack],
	{
		$id: '#/$defs/Move',
		title: 'Move'
	}
)

export type Move = Static<typeof Move>

export const MoveEnhancement = DiscriminatedUnion(
	'roll_type',
	[
		MoveActionRollEnhancement,
		MoveNoRollEnhancement,
		MoveProgressRollEnhancement,
		MoveSpecialTrackEnhancement
	],
	{
		$id: '#/$defs/MoveEnhancement'
	}
)
export type TMoveEnhancement = typeof MoveEnhancement
export type MoveEnhancement =
	| MoveNoRollEnhancement
	| MoveActionRollEnhancement
	| MoveProgressRollEnhancement
	| MoveSpecialTrackEnhancement

// export type MoveEnhancement = Static<typeof MoveEnhancement>

export const MoveCategory = Generic.Collection(
	Type.Ref(ID.MoveCategoryID),
	Type.Ref(Move),
	{ $id: '#/$defs/MoveCategory' }
)
export type MoveCategory = Static<typeof MoveCategory>
export type TMoveCategory = typeof MoveCategory

export * from './moves/index.js'