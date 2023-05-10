/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type PageNumber = number;
/**
 * A localized plain text name or label.
 */
export type Label = string;
export type OracleTableID = string;
export type AssetID = string;
/**
 * A move ID, for a standard move or a unique asset move
 */
export type MoveID = string;
export type DelveSiteDomainID = string;
export type DelveSiteThemeID = string;
export type EncounterClassicID = string;
export type RegionEntryID = string;
export type OracleCollectionID = string;
/**
 * A CSS color value. See: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 */
export type CSSColor = string;
/**
 * Localized text, formatted in Markdown.
 *
 * It uses some custom syntax; e.g. `{{table:some_oracle_table_id}}` indicates that the referenced oracle table is rendered there part of the source material.
 */
export type MarkdownString = string;
/**
 * Normally, rows will end with two numbers separated by a dash, indicating their dice range.
 *
 * Rows with a single number represent unrollable rows that are sometimes included for rendering purposes; in this case, the number represents the row's index.
 */
export type OracleTableRowID = string;
/**
 * A relative URL pointing to a vector image in the SVG format.
 */
export type SVGImageURL = string;
/**
 * The ID of the oracle table to be rolled. If omitted, it defaults to the ID of this oracle table.
 */
export type OracleTableID1 = string;
export type OracleTableRollMethod = "no_duplicates" | "keep_duplicates" | "make_it_worse";
/**
 * A string template that may be used in place of OracleTableRow#result.
 */
export type TemplateString = string;
/**
 * A string template that may be used in place of OracleTableRow#summary.
 */
export type TemplateString1 = string;
/**
 * A string template that may be used in place of OracleTableRow#description.
 */
export type TemplateString2 = string;
export type OracleTableStyle = "table" | "embed_in_row" | "embed_as_column";
export type OracleColumnContentType = "range" | "result" | "summary" | "description";
export type OracleCollectionStyle = "multi_table";
/**
 * A relative URL pointing to a raster image in the WEBP format.
 */
export type WEBPImageURL = string;
export type MoveCategoryID = string;
export type MoveRollType = "action_roll" | "progress_roll" | "no_roll";
/**
 * Localized text, formatted in Markdown.
 *
 * It uses some custom syntax; e.g. `{{table:some_oracle_table_id}}` indicates that the referenced oracle table is rendered there part of the source material.
 */
export type MarkdownString1 = string;
export type MoveOutcomeType = "miss" | "weak_hit" | "strong_hit";
export type MoveRerollMethod = "any" | "all" | "challenge_die" | "challenge_dice" | "action_die";
export type AssetTypeID = string;
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export type AssetOptionField = SelectFieldPlayerStat | TextField;
export type PlayerStat = "edge" | "heart" | "iron" | "shadow" | "wits";
export type PlayerConditionMeter = "health" | "spirit" | "supply";
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export type AssetControlField = CheckboxField;
export type AssetAbilityID = string;
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export type AssetAbilityOptionField = TextField;
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export type AssetAbilityControlField = ClockField | CounterField | CheckboxField;
export type AssetIDWildcard = string;
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export type AssetConditionMeterControlField = CheckboxField;
export type MoveRollType1 = "action_roll" | "progress_roll" | "no_roll";
export type TriggerExtension = TriggerActionRollExtension | TriggerProgressRollExtension;
/**
 * `any`: When rolling with this move trigger option, the player picks which stat to use.
 *
 * `all`: When rolling with this move trigger option, *every* stat or progress track of the `using` key is rolled.
 *
 * `highest`: When rolling with this move trigger option, use the highest/best option from the `using` key.
 *
 * `lowest`: When rolling with this move trigger option, use the lowest/worst option from the `using` key.
 */
export type MoveRollMethod = "any" | "all" | "highest" | "lowest";
export type TriggerActionRollOptionChoice =
  | TriggerActionRollOptionChoiceStat
  | TriggerActionRollOptionChoiceRef
  | TriggerActionRollOptionChoiceAttachedAssetRef
  | TriggerActionRollOptionChoiceCustomValue;
export type AssetConditionMeterIDWildcard = string;
export type AssetOptionFieldIDWildcard = string;
export type ProgressType =
  | "combat_progress"
  | "vow_progress"
  | "scene_challenge_progress"
  | "journey_progress"
  | "delve_progress"
  | "bonds_progress"
  | "failure_track";
/**
 * A move ID with wildcards
 */
export type MoveIDWithWildcard = string;
export type AssetConditionMeterID = string;
export type EncounterCollectionID = string;
/**
 * Challenge rank, represented as a number: 1 = Troublesome, 2 = Dangerous, 3 = Formidable, 4 = Extreme, 5 = Epic
 */
export type ChallengeRank = 1 | 2 | 3 | 4 | 5;
export type RarityID = string;
/**
 * The asset enhanced by this rarity.
 */
export type AssetID1 = string;
export type DelveSiteID = string;
export type DelveSiteDenizenID = string;
/**
 * The ID of the relevant encounter, if one is specified.
 */
export type EncounterClassicID1 = string;
export type DelveSiteDenizenFrequency = "very_common" | "common" | "uncommon" | "rare" | "unforeseen";
export type ThemeFeatureRowID = string;
export type ThemeDangerRowID = string;
export type DomainFeatureRowID = string;
export type DomainDangerRowID = string;
export type WorldTruthOptionID = string;
export type WorldTruthID = string;

/**
 * Describes game rules elements compatible with the Ironsworn tabletop role-playing game by Shawn Tomkin.
 */
export interface SourcebookClassic {
  id: string;
  ruleset: "classic";
  source: Source;
  oracles?: {
    [k: string]: OracleCollection;
  };
  moves?: {
    [k: string]: MoveCategory;
  };
  assets?: {
    [k: string]: AssetType;
  };
  regions?: {
    [k: string]: RegionEntry;
  };
  encounters?: {
    [k: string]: EncounterCollectionClassic;
  };
  rarities?: {
    [k: string]: Rarity;
  };
  delve_sites?: {
    [k: string]: DelveSite;
  };
  site_themes?: {
    [k: string]: DelveSiteTheme;
  };
  site_domains?: {
    [k: string]: DelveSiteDomain;
  };
  world_truths?: {
    [k: string]: WorldTruth;
  };
}
/**
 * Metadata describing the original source of this item
 */
export interface Source {
  /**
   * The title of the source document.
   */
  title: string;
  page?: PageNumber;
  /**
   * @minItems 1
   */
  authors: [
    {
      name: string;
      /**
       * An optional email contact for the author
       */
      email?: string;
    },
    ...{
      name: string;
      /**
       * An optional email contact for the author
       */
      email?: string;
    }[]
  ];
  /**
   * The date of the source documents's last update, formatted YYYY-MM-DD. Required because it's used to determine whether the data needs updating.
   */
  date: string;
  /**
   * An absolute URL where the source document is available.
   */
  url: string;
  /**
   * An absolute URL pointing to the location where this element's license can be found.
   */
  license: string;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface OracleCollection {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  id: OracleCollectionID;
  extends?: OracleCollectionID;
  color?: CSSColor;
  summary?: MarkdownString;
  description?: MarkdownString;
  contents?: {
    [k: string]: OracleTable;
  };
  collections?: {
    [k: string]: OracleCollection;
  };
  rendering?: OracleCollectionRendering;
  images?: WEBPImageURL[];
  sample_names?: Label[];
}
export interface Suggestions {
  oracles?: OracleTableID[];
  assets?: AssetID[];
  moves?: MoveID[];
  site_domains?: DelveSiteDomainID[];
  site_themes?: DelveSiteThemeID[];
  encounters?: EncounterClassicID[];
  regions?: RegionEntryID[];
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface OracleTable {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  id: OracleTableID;
  summary?: MarkdownString;
  description?: MarkdownString;
  match?: MatchBehavior;
  table: OracleTableRow[];
  rendering?: OracleTableRendering;
}
export interface MatchBehavior {
  text: MarkdownString;
}
export interface OracleTableRow {
  low: number | null;
  high: number | null;
  id: OracleTableRowID;
  result: MarkdownString;
  icon?: SVGImageURL;
  summary?: MarkdownString;
  description?: MarkdownString;
  rolls?: OracleTableRoll[];
  suggestions?: Suggestions;
  embed_table?: OracleTableID;
  template?: OracleRollTemplate;
}
export interface OracleTableRoll {
  oracle?: OracleTableID1;
  times?: number;
  method?: OracleTableRollMethod;
}
/**
 * Provides string templates that may be used in place of the static row text from `OracleTableRow#result`, `OracleTableRow#summary`, and `OracleTableRow#description`.
 *
 *   These strings are formatted in Markdown, but use a special syntax for their placeholders: `{{result:some_oracle_table_id}}`. The placeholder should be replaced with the value of a rolled (or selected) `OracleTableRow#result` from the target oracle table ID.
 */
export interface OracleRollTemplate {
  result?: TemplateString;
  summary?: TemplateString1;
  description?: TemplateString2;
}
export interface OracleTableRendering {
  icon?: SVGImageURL;
  style?: OracleTableStyle;
  color?: CSSColor;
}
export interface OracleCollectionRendering {
  columns: {
    [k: string]: OracleTableColumn;
  } & {
    [k: string]: OracleCollectionColumn;
  };
  color?: CSSColor;
  style?: OracleCollectionStyle;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface OracleTableColumn {
  label?: Label;
  content_type: OracleColumnContentType;
}
/**
 * A column's default label is the title of the source table.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface OracleCollectionColumn {
  label?: Label;
  content_type: OracleColumnContentType;
  table_key: string;
  color?: CSSColor;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface MoveCategory {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  id: MoveCategoryID;
  extends?: MoveCategoryID;
  color?: CSSColor;
  summary?: MarkdownString;
  description?: MarkdownString;
  contents?: {
    [k: string]: Move;
  };
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface Move {
  id: MoveID;
  name: Label;
  move_type: MoveRollType;
  trigger: {
    text: MarkdownString1;
  };
  text: MarkdownString;
  outcomes?: MoveOutcomes;
  oracles?: OracleTableID[];
  suggestions?: Suggestions;
  source: Source;
}
export interface MoveOutcomes {
  miss: MoveOutcomeMatchable;
  weak_hit: MoveOutcome;
  strong_hit: MoveOutcomeMatchable;
}
export interface MoveOutcomeMatchable {
  text: MarkdownString;
  count_as?: MoveOutcomeType;
  reroll?: MoveReroll;
  match?: MoveOutcome;
}
export interface MoveReroll {
  text?: MarkdownString;
  method: MoveRerollMethod;
}
export interface MoveOutcome {
  text: MarkdownString;
  count_as?: MoveOutcomeType;
  reroll?: MoveReroll;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface AssetType {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  id: AssetTypeID;
  extends?: AssetTypeID;
  color?: CSSColor;
  summary?: MarkdownString;
  description?: MarkdownString;
  contents?: {
    [k: string]: Asset;
  };
  member_label?: Label;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface Asset {
  id: AssetID;
  name: Label;
  source: Source;
  options?: {
    [k: string]: AssetOptionField;
  };
  controls?: {
    [k: string]: AssetControlField;
  };
  suggestions?: Suggestions;
  requirement?: MarkdownString;
  /**
   * @minItems 3
   * @maxItems 3
   */
  abilities: [AssetAbility, AssetAbility, AssetAbility];
  condition_meter?: AssetConditionMeter1;
  /**
   * If `true`, this asset counts as an impact (Starforged) or a debility (classic Ironsworn).
   */
  count_as_impact?: boolean;
  attachments?: AssetAttachment;
  /**
   * Most assets only benefit to their owner, but certain assets (like Starforged's module and command vehicle assets) are shared amongst the player's allies, too.
   */
  shared?: boolean;
}
/**
 * Select a standard player stat or condition meter.
 */
export interface SelectFieldPlayerStat {
  id: string;
  label: Label;
  field_type: "select_stat";
  value?: PlayerStat | PlayerConditionMeter;
  choices: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-z_]+$".
     */
    [k: string]: {
      label: Label;
      value: PlayerStat | PlayerConditionMeter;
      selected?: boolean;
    };
  };
}
export interface TextField {
  id: string;
  label: Label;
  field_type: "text";
  value?: string;
}
export interface CheckboxField {
  id: string;
  label: Label;
  field_type: "checkbox";
  value?: boolean;
}
export interface AssetAbility {
  id: AssetAbilityID;
  name?: Label;
  text: MarkdownString;
  enabled: boolean;
  /**
   * Unique moves added by this asset ability.
   */
  moves?: {
    [k: string]: Move;
  };
  options?: {
    [k: string]: AssetAbilityOptionField;
  };
  controls?: {
    [k: string]: AssetAbilityControlField;
  };
  extend_asset?: {
    suggestions?: Suggestions;
    /**
     * If `true`, this asset counts as an impact (Starforged) or a debility (classic Ironsworn).
     */
    count_as_impact?: boolean;
    attachments?: AssetAttachment;
    /**
     * Most assets only benefit to their owner, but certain assets (like Starforged's module and command vehicle assets) are shared amongst the player's allies, too.
     */
    shared?: boolean;
  } & {
    condition_meter?: AssetConditionMeter;
  };
  extend_moves?: MoveExtension[];
}
export interface ClockField {
  id: string;
  label: Label;
  field_type: "clock";
  value?: number;
  min: 0;
  max: 4 | 6 | 8 | 10;
}
export interface CounterField {
  id: string;
  label: Label;
  field_type: "counter";
  value?: number;
  min: 0;
  max?: number;
}
/**
 * Describes which assets can be attached to this asset. Example: Starforged's Module assets, which can be equipped by Command Vehicle assets. See p. 55 of Starforged for more info.
 */
export interface AssetAttachment {
  /**
   * Asset IDs (which may be wildcards) that may be attached to this asset
   */
  assets: AssetIDWildcard[];
  /**
   * Omit if there's no upper limit to the number of attached assets.
   */
  max?: number;
}
export interface AssetConditionMeter {
  min?: number;
  max?: number;
  controls?: {
    [k: string]: AssetConditionMeterControlField;
  };
}
export interface MoveExtension {
  text?: MarkdownString;
  oracles?: OracleTableID[];
  move_type?: MoveRollType1;
  trigger?: TriggerExtension;
  outcomes?: MoveOutcomesExtension;
  extends?: MoveIDWithWildcard[];
}
export interface TriggerActionRollExtension {
  roll_options: TriggerActionRollOptionExtension[];
}
export interface TriggerActionRollOptionExtension {
  text?: MarkdownString;
  method?: MoveRollMethod | MoveOutcomeType;
  by?: TriggerBy;
  choices?: TriggerActionRollOptionChoice[];
}
/**
 * Information on who can trigger this trigger option. Usually this is just the player, but some asset abilities can trigger from an ally's move.
 */
export interface TriggerBy {
  player: boolean;
  ally: boolean;
}
export interface TriggerActionRollOptionChoiceStat {
  using: PlayerStat | PlayerConditionMeter;
}
export interface TriggerActionRollOptionChoiceRef {
  using: "ref";
  ref: AssetConditionMeterIDWildcard | AssetOptionFieldIDWildcard;
}
export interface TriggerActionRollOptionChoiceAttachedAssetRef {
  using: "attached_asset_meter";
}
export interface TriggerActionRollOptionChoiceCustomValue {
  using: "custom_value";
  label: Label;
  value: number;
}
export interface TriggerProgressRollExtension {
  roll_options: TriggerProgressRollOptionExtension[];
}
export interface TriggerProgressRollOptionExtension {
  text?: MarkdownString;
  method?: MoveRollMethod | MoveOutcomeType;
  by?: TriggerBy;
  choices?: TriggerProgressRollOptionChoice[];
}
export interface TriggerProgressRollOptionChoice {
  using: ProgressType;
}
export interface MoveOutcomesExtension {
  miss?: MoveOutcomeMatchableExtension;
  weak_hit?: MoveOutcomeExtension;
  strong_hit?: MoveOutcomeMatchableExtension;
}
export interface MoveOutcomeMatchableExtension {
  text?: MarkdownString;
  count_as?: MoveOutcomeType;
  reroll?: MoveReroll;
  match?: MoveOutcome;
}
export interface MoveOutcomeExtension {
  text?: MarkdownString;
  count_as?: MoveOutcomeType;
  reroll?: MoveReroll;
}
export interface AssetConditionMeter1 {
  min: number;
  max: number;
  value?: number;
  id: AssetConditionMeterID;
  label: Label;
  controls?: {
    [k: string]: AssetConditionMeterControlField;
  };
}
/**
 * A region entry, like the Ironlands region entries found in classic Ironsworn.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface RegionEntry {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  features: MarkdownString[];
  summary: MarkdownString;
  description: MarkdownString;
  quest_starter: MarkdownString;
  id: RegionEntryID;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface EncounterCollectionClassic {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  id: EncounterCollectionID;
  extends?: EncounterCollectionID;
  color?: CSSColor;
  summary?: MarkdownString;
  description?: MarkdownString;
  contents?: {
    [k: string]: EncounterClassic;
  };
  member_label?: Label;
}
/**
 * An encounter entry, similar to those in Chapter 5 of the Ironsworn Rulebook.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface EncounterClassic {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  features: MarkdownString[];
  description: MarkdownString;
  quest_starter: MarkdownString;
  rank: ChallengeRank;
  drives: MarkdownString[];
  tactics: MarkdownString[];
  id: EncounterClassicID;
  your_truths?: MarkdownString;
}
/**
 * A rarity, as described in Ironsworn: Delve.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface Rarity {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  id: RarityID;
  asset: AssetID1;
  icon?: SVGImageURL;
  /**
   * From Ironsworn: Delve, p. 174:
   *
   *       Some assets will bring a rarity into play more often than others, so the experience point cost for a rarity will vary by the linked asset. These costs are shown in the tables on page 175.
   *
   *       If you are playing solo, and aren’t concerned with the relative balance of rarity abilities, you can ignore these variable costs. If so, spend 3 experience points to purchase a rarity.
   */
  xp_cost: number;
  description: MarkdownString;
}
/**
 * A delve site with a theme, domain, and denizen table.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface DelveSite {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  id: DelveSiteID;
  icon?: SVGImageURL;
  rank: ChallengeRank;
  theme: DelveSiteThemeID;
  domain: DelveSiteDomainID;
  /**
   * An additional theme or domain card for use with optional rules in Ironsworn: Delve.
   */
  extra_card?: DelveSiteThemeID | DelveSiteDomainID;
  description: MarkdownString;
  denizens: DelveSiteDenizen[] &
    [
      {
        low: 1;
        high: 27;
        frequency: "very_common";
      },
      {
        low: 28;
        high: 41;
        frequency: "common";
      },
      {
        low: 42;
        high: 55;
        frequency: "common";
      },
      {
        low: 56;
        high: 69;
        frequency: "common";
      },
      {
        low: 70;
        high: 75;
        frequency: "uncommon";
      },
      {
        low: 76;
        high: 81;
        frequency: "uncommon";
      },
      {
        low: 82;
        high: 87;
        frequency: "uncommon";
      },
      {
        low: 88;
        high: 93;
        frequency: "uncommon";
      },
      {
        low: 94;
        high: 95;
        frequency: "rare";
      },
      {
        low: 96;
        high: 97;
        frequency: "rare";
      },
      {
        low: 98;
        high: 99;
        frequency: "rare";
      },
      {
        low: 100;
        high: 100;
        frequency: "unforeseen";
      }
    ];
}
export interface DelveSiteDenizen {
  id: DelveSiteDenizenID;
  name?: Label;
  low: number;
  high: number;
  encounter?: EncounterClassicID1;
  frequency: DelveSiteDenizenFrequency;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface DelveSiteTheme {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  summary: MarkdownString;
  description?: MarkdownString;
  icon?: SVGImageURL;
  id: DelveSiteThemeID;
  card_type: "theme";
  features: DelveSiteThemeFeatureRow[] &
    [
      {
        low: 1;
        high: 4;
      },
      {
        low: 5;
        high: 8;
      },
      {
        low: 9;
        high: 12;
      },
      {
        low: 13;
        high: 16;
      },
      {
        low: 17;
        high: 20;
      }
    ];
  dangers: DelveSiteThemeDangerRow[] &
    [
      {
        low: 1;
        high: 5;
      },
      {
        low: 6;
        high: 10;
      },
      {
        low: 11;
        high: 12;
      },
      {
        low: 13;
        high: 14;
      },
      {
        low: 15;
        high: 16;
      },
      {
        low: 17;
        high: 18;
      },
      {
        low: 19;
        high: 20;
      },
      {
        low: 21;
        high: 22;
      },
      {
        low: 23;
        high: 24;
      },
      {
        low: 25;
        high: 26;
      },
      {
        low: 27;
        high: 28;
      },
      {
        low: 29;
        high: 30;
      }
    ];
}
export interface DelveSiteThemeFeatureRow {
  low: number | null;
  high: number | null;
  result: MarkdownString;
  icon?: SVGImageURL;
  summary?: MarkdownString;
  description?: MarkdownString;
  rolls?: OracleTableRoll[];
  suggestions?: Suggestions;
  embed_table?: OracleTableID;
  template?: OracleRollTemplate;
  id: ThemeFeatureRowID;
}
export interface DelveSiteThemeDangerRow {
  low: number | null;
  high: number | null;
  result: MarkdownString;
  icon?: SVGImageURL;
  summary?: MarkdownString;
  description?: MarkdownString;
  rolls?: OracleTableRoll[];
  suggestions?: Suggestions;
  embed_table?: OracleTableID;
  template?: OracleRollTemplate;
  id: ThemeDangerRowID;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface DelveSiteDomain {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  summary: MarkdownString;
  description?: MarkdownString;
  icon?: SVGImageURL;
  id: DelveSiteDomainID;
  card_type: "domain";
  features: DelveSiteDomainFeatureRow[] &
    [
      {
        low: 21;
        high: 43;
      },
      {
        low: 44;
        high: 56;
      },
      {
        low: 57;
        high: 64;
      },
      {
        low: 65;
        high: 68;
      },
      {
        low: 69;
        high: 72;
      },
      {
        low: 73;
        high: 76;
      },
      {
        low: 77;
        high: 80;
      },
      {
        low: 81;
        high: 84;
      },
      {
        low: 85;
        high: 88;
      },
      {
        low: 89;
        high: 98;
        result: string;
        suggestions: {
          [k: string]: unknown;
        };
      },
      {
        low: 99;
        high: 99;
        result: string;
        suggestions: {
          [k: string]: unknown;
        };
      },
      {
        low: 100;
        high: 100;
        result: string;
        suggestions: {
          [k: string]: unknown;
        };
      }
    ];
  dangers: DelveSiteDomainDangerRow[] &
    [
      {
        low: 31;
        high: 33;
      },
      {
        low: 34;
        high: 36;
      },
      {
        low: 37;
        high: 39;
      },
      {
        low: 40;
        high: 42;
      },
      {
        low: 43;
        high: 45;
      }
    ];
}
export interface DelveSiteDomainFeatureRow {
  low: number | null;
  high: number | null;
  result: MarkdownString;
  icon?: SVGImageURL;
  summary?: MarkdownString;
  description?: MarkdownString;
  rolls?: OracleTableRoll[];
  suggestions?: Suggestions;
  embed_table?: OracleTableID;
  template?: OracleRollTemplate;
  id: DomainFeatureRowID;
}
export interface DelveSiteDomainDangerRow {
  low: number | null;
  high: number | null;
  result: MarkdownString;
  icon?: SVGImageURL;
  summary?: MarkdownString;
  description?: MarkdownString;
  rolls?: OracleTableRoll[];
  suggestions?: Suggestions;
  embed_table?: OracleTableID;
  template?: OracleRollTemplate;
  id: DomainDangerRowID;
}
/**
 * A world truth category in the format used by Ironsworn.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z_]+$".
 */
export interface WorldTruth {
  name: Label;
  canonical_name?: Label;
  source: Source;
  suggestions?: Suggestions;
  options: WorldTruthOption[];
  icon?: SVGImageURL;
  id: WorldTruthID;
}
export interface WorldTruthOption {
  description: MarkdownString;
  quest_starter: MarkdownString;
  id: WorldTruthOptionID;
}
