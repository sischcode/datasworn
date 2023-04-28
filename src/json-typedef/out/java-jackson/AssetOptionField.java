// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

/**
 * Asset options are fields that are usually only set once, typically when the
 * player purchases the asset. The most common examples are the "Name" fields
 * on companion assets. A more complex example is the choice of stats on the
 * Devotant asset.
 */
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "field_type")
@JsonSubTypes({
    @JsonSubTypes.Type(name = "select_asset_extension", value = AssetOptionFieldSelectAssetExtension.class),
    @JsonSubTypes.Type(name = "select_number", value = AssetOptionFieldSelectNumber.class),
    @JsonSubTypes.Type(name = "select_stat", value = AssetOptionFieldSelectStat.class),
    @JsonSubTypes.Type(name = "text", value = AssetOptionFieldText.class),
})
public abstract class AssetOptionField {
}
