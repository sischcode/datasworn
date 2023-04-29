import {
	type Encounters,
	type Abstract,
	type Localize,
	type Progress
} from '@base-types'
import { type Collection } from 'base-types/abstract'

// TODO
export type EncounterClassicID = string
export type EncounterStarforgedID = string
export type EncounterID = EncounterClassicID | EncounterStarforgedID

export type EncounterNatureStarforged = string
export type EncounterNatureClassic = string

interface EncounterLike {
	id: string
	name: string
	rank: Progress.ChallengeRank
	description: Localize.MarkdownString
}
interface Encounter extends EncounterLike, Abstract.Cyclopedia<string> {
	drives: Localize.MarkdownString[]
	tactics: Localize.MarkdownString[]
	quest_starter: Localize.MarkdownString
}
// TODO: Might make more sense as an ExtendOne

export interface EncounterVariantStarforged extends EncounterLike {
	nature: EncounterNatureStarforged
}

export interface EncounterClassic extends Omit<Encounter, 'summary'> {
	your_truths?: Localize.MarkdownString
}

export interface EncounterStarforged extends Encounter {
	summary: Localize.MarkdownString
	nature: EncounterNatureStarforged
	variants?: Record<string, EncounterVariantStarforged>
}

export type EncounterCollectionID = string
export interface EncounterCollectionClassic
	extends Collection<Encounters.EncounterClassic, EncounterCollectionID> {
	member_label?: Localize.Label
}
