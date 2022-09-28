import { AssetAbilityBuilder, AssetStateBuilder, ConditionMeterBuilder, DisplayBuilder, SourceInheritorBuilder, TitleBuilder } from '@builders'
import { InputSelectOptionType, InputType, Replacement } from '@schema'
import type { Asset, AssetAbility, AssetAttachment, InputToggle, AssetType, AssetUsage, ConditionMeter, Display, Game, Source, Title, YamlAsset } from '@schema'
import { formatId } from '@utils'
import { badJsonError } from '@utils/logging/badJsonError.js'
import { buildLog } from '@utils/logging/buildLog.js'
import { pickInput } from '@utils/object_transform/pickInput.js'
import { replaceInAllStrings } from '@utils/object_transform/replaceInAllStrings.js'
import _ from 'lodash-es'

/**
 * @internal
 */
export class AssetBuilder extends SourceInheritorBuilder implements Asset {
  $id: Asset['$id']
  Title: Title
  States?: InputToggle[]|undefined
  Aliases?: string[] | undefined
  'Asset type': AssetType['$id']
  Display: Display
  Usage: AssetUsage
  Attachments?: AssetAttachment | undefined
  Requirement?: string | undefined
  Inputs?: Asset['Inputs']
  Abilities: [AssetAbility, AssetAbility, AssetAbility]
  'Condition meter'?: ConditionMeter | undefined
  constructor (yaml: YamlAsset, game: Game, parent: AssetType, rootSource: Source) {
    super(yaml.Source ?? {}, rootSource)
    this['Asset type'] = parent.$id
    const fragment = yaml._idFragment ?? yaml.Title.Short ?? yaml.Title.Standard ?? yaml.Title.Canonical
    this.$id = formatId(fragment, this['Asset type'])
    buildLog(this.constructor, `Building: ${this.$id}`)
    this.Title = new TitleBuilder(yaml.Title, this)
    this.Aliases = yaml.Aliases
    this.Display = new DisplayBuilder({
      Icon: yaml.Display?.Icon,
      Color: yaml.Display?.Color ?? parent.Display.Color
    })
    this.Usage = {
      Shared: !!['command vehicle', 'support vehicle', 'module'].includes(parent.Title.Short?.toLowerCase() ?? parent.Title.Canonical.toLowerCase())
    }
    this.Attachments = yaml.Attachments
    if (yaml.Inputs != null) {
      this.Inputs = _.mapValues(yaml.Inputs, inputJson => {
        const result = pickInput<InputType.Select|InputType.Text>(inputJson, this)
        if (result.Type === InputType.Select) {
          _.forEach(result['Sets attributes'], hint => {
            let searchValue: Replacement|undefined
            let replaceValue: string = this.$id
            switch (hint.Type) {
              case InputSelectOptionType.ConditionMeter:
                searchValue = Replacement.AssetSelectMeter
                replaceValue = this.$id
                break
              case InputSelectOptionType.Stat:
                searchValue = Replacement.AssetSelectStat
                replaceValue = this.$id
                break
              default:
                break
            }
            if (searchValue) {
              yaml.Abilities = replaceInAllStrings(yaml.Abilities, searchValue, replaceValue)
            }
          })
        }
        return result
      })
    }
    if (yaml.States != null) {
      this.States = yaml.States.map(state => new AssetStateBuilder(state, this)) ?? undefined
    }
    this.Requirement = yaml.Requirement
    this['Condition meter'] = (yaml['Condition meter'] != null) ? new ConditionMeterBuilder(yaml['Condition meter'], formatId('Condition meter', this.$id), this['Asset type']) : undefined
    if (yaml.Abilities.length !== 3) {
      throw badJsonError(this.constructor, yaml.Abilities, `Asset ${this.$id} doesn't have 3 abilities!`)
    } else {
      this.Abilities = yaml.Abilities.map((abilityJson, index) => new AssetAbilityBuilder(abilityJson, formatId((index + 1).toString(), this.$id), game, this)) as [AssetAbilityBuilder, AssetAbilityBuilder, AssetAbilityBuilder]
    }

    _.merge(this, replaceInAllStrings(this, Replacement.Asset, this.$id))

    if (this['Condition meter'] != null) {
      _.merge(this, replaceInAllStrings(this, Replacement.AssetMeter, this['Condition meter'].$id))
    }
  }
}