// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class AssetConditionMeterControlFieldCardFlip extends AssetConditionMeterControlField {
    @JsonProperty("disables_asset")
    private Boolean disablesAsset;

    @JsonProperty("is_impact")
    private Boolean isImpact;

    @JsonProperty("label")
    private InputLabel label;

    @JsonProperty("value")
    private Boolean value;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("icon")
    private SvgImageUrl icon;

    public AssetConditionMeterControlFieldCardFlip() {
    }

    /**
     * Getter for disablesAsset.<p>
     * Does this field disable the asset when its value is set to `true`?
     */
    public Boolean getDisablesAsset() {
        return disablesAsset;
    }

    /**
     * Setter for disablesAsset.<p>
     * Does this field disable the asset when its value is set to `true`?
     */
    public void setDisablesAsset(Boolean disablesAsset) {
        this.disablesAsset = disablesAsset;
    }

    /**
     * Getter for isImpact.<p>
     * Does this field count as an impact (Starforged) or debility (Ironsworn
     * classic) when its value is set to `true`?
     */
    public Boolean getIsImpact() {
        return isImpact;
    }

    /**
     * Setter for isImpact.<p>
     * Does this field count as an impact (Starforged) or debility (Ironsworn
     * classic) when its value is set to `true`?
     */
    public void setIsImpact(Boolean isImpact) {
        this.isImpact = isImpact;
    }

    /**
     * Getter for label.<p>
     */
    public InputLabel getLabel() {
        return label;
    }

    /**
     * Setter for label.<p>
     */
    public void setLabel(InputLabel label) {
        this.label = label;
    }

    /**
     * Getter for value.<p>
     * Is the card flipped over?
     */
    public Boolean getValue() {
        return value;
    }

    /**
     * Setter for value.<p>
     * Is the card flipped over?
     */
    public void setValue(Boolean value) {
        this.value = value;
    }

    /**
     * Getter for icon.<p>
     * An icon associated with this input.
     */
    public SvgImageUrl getIcon() {
        return icon;
    }

    /**
     * Setter for icon.<p>
     * An icon associated with this input.
     */
    public void setIcon(SvgImageUrl icon) {
        this.icon = icon;
    }
}
