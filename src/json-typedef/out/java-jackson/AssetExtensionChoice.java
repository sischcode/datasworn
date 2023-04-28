// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class AssetExtensionChoice {
    @JsonProperty("label")
    private Label label;

    @JsonProperty("value")
    private AssetExtension value;

    public AssetExtensionChoice() {
    }

    /**
     * Getter for label.<p>
     */
    public Label getLabel() {
        return label;
    }

    /**
     * Setter for label.<p>
     */
    public void setLabel(Label label) {
        this.label = label;
    }

    /**
     * Getter for value.<p>
     */
    public AssetExtension getValue() {
        return value;
    }

    /**
     * Setter for value.<p>
     */
    public void setValue(AssetExtension value) {
        this.value = value;
    }
}
