import type { Asset, DelveSiteDomain, DelveSiteTheme, EncounterClassic, EncounterStarforged, GameObject, IronlandsRegion, Move, OracleTable } from '@schema'

/**
 * Describes "non-canonical" suggestions for game content related to the parent item.
 *
 * These are intended be offered as convenient shortcuts for the user (for instance, including a menu dropdown for rolling on suggested tables); having them roll automatically is **not recommended** for most projects.
 *
 * These can be safely ignored if that functionality is not desired.
 * @public
 */
export interface Suggestions {
  /**
   * Suggested game objects and their parameters.
   */
  'Game objects'?: GameObject[] | undefined
  /**
   * Suggested oracle rolls, by table ID. Multiples of the same ID can be used to indicate that multiple rolls should be made.
   * @pattern ^(starforged|ironsworn)/oracles/[a-z_-]+/[a-z_-/]+$
   */
  'Oracle rolls'?: Array<OracleTable['$id']> | undefined
  /**
   * Suggested move IDs.
   * @pattern ^(starforged|ironsworn)/moves/[a-z_-]+/[a-z_-]+$
   */
  'Moves'?: Array<Move['$id']> | undefined
  /**
   * Suggested asset IDs.
   * @pattern ^(starforged|ironsworn)/assets/[a-z_-]+/[a-z_-]+$
   */
  'Assets'?: Array<Asset['$id']> | undefined
  /**
   * Suggested encounter IDs.
   * @pattern ^(starforged/encounters|ironsworn/encounters/[a-z_-]+)/[a-z_-]+$
   */
  'Encounters'?: Array<EncounterStarforged['$id']> | Array<EncounterClassic['$id']> | undefined
  /**
   * Suggested delve site themes.
   * @pattern ^ironsworn/themes/[a-z_-]+$
   */
  'Themes'?: Array<DelveSiteTheme['$id']> | undefined
  /**
   * Suggested delve site domains.
   * @pattern ^ironsworn/domains/[a-z_-]+$
   */
  'Domains'?: Array<DelveSiteDomain['$id']> | undefined
  /**
   * Suggested Ironlands regions.
   * @pattern ^ironsworn/regions/[a-z_-]+$
   */
  'Regions'?: Array<IronlandsRegion['$id']> | undefined
}