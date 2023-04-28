// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

/**
 * Extends or upgrades an existing action roll trigger.
 */
@JsonSerialize
public class TriggerExtensionProgressRoll extends TriggerExtension {
    @JsonProperty("options")
    private List<TriggerOptionProgress> options;

    public TriggerExtensionProgressRoll() {
    }

    /**
     * Getter for options.<p>
     */
    public List<TriggerOptionProgress> getOptions() {
        return options;
    }

    /**
     * Setter for options.<p>
     */
    public void setOptions(List<TriggerOptionProgress> options) {
        this.options = options;
    }
}
