// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class TriggerOptionChoiceActionStat extends TriggerOptionChoiceAction {
    @JsonProperty("ref")
    private StatId ref;

    public TriggerOptionChoiceActionStat() {
    }

    /**
     * Getter for ref.<p>
     */
    public StatId getRef() {
        return ref;
    }

    /**
     * Setter for ref.<p>
     */
    public void setRef(StatId ref) {
        this.ref = ref;
    }
}
