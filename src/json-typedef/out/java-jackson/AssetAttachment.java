// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

/**
 * Describes which assets can be attached to this asset. The "canonical" example
 * for this are Starforged's Module assets, which can be equipped by Command
 * Vehicle assets. See p. 55 of Starforged for more info.
 */
@JsonSerialize
public class AssetAttachment {
    @JsonProperty("assets")
    private List<AssetIdwildcard> assets;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("max")
    private UnsignedByte max;

    public AssetAttachment() {
    }

    /**
     * Getter for assets.<p>
     */
    public List<AssetIdwildcard> getAssets() {
        return assets;
    }

    /**
     * Setter for assets.<p>
     */
    public void setAssets(List<AssetIdwildcard> assets) {
        this.assets = assets;
    }

    /**
     * Getter for max.<p>
     * The maximum number of attached assets. Omitted if there's no upper limit
     * to the number of attached assets.
     */
    public UnsignedByte getMax() {
        return max;
    }

    /**
     * Setter for max.<p>
     * The maximum number of attached assets. Omitted if there's no upper limit
     * to the number of attached assets.
     */
    public void setMax(UnsignedByte max) {
        this.max = max;
    }
}
