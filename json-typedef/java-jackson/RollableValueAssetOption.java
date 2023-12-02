// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

/**
 * A reference to the value of an asset option.
 */
@JsonSerialize
public class RollableValueAssetOption extends RollableValue {
    @JsonProperty("assets")
    private List<AssetIdWildcard> assets;

    @JsonProperty("option")
    private DictKey option;

    public RollableValueAssetOption() {
    }

    /**
     * Getter for assets.<p>
     */
    public List<AssetIdWildcard> getAssets() {
        return assets;
    }

    /**
     * Setter for assets.<p>
     */
    public void setAssets(List<AssetIdWildcard> assets) {
        this.assets = assets;
    }

    /**
     * Getter for option.<p>
     * The dictionary key of the asset option field.
     */
    public DictKey getOption() {
        return option;
    }

    /**
     * Setter for option.<p>
     * The dictionary key of the asset option field.
     */
    public void setOption(DictKey option) {
        this.option = option;
    }
}