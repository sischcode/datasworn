// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

/**
 * Describes changes/additions made to the enhanced move's trigger conditions.
 */
@JsonSerialize
public class TriggerActionRollEnhancement {
    @JsonProperty("conditions")
    private List<TriggerActionRollConditionEnhancement> conditions;

    public TriggerActionRollEnhancement() {
    }

    /**
     * Getter for conditions.<p>
     * Trigger conditions added to the enhanced move.
     */
    public List<TriggerActionRollConditionEnhancement> getConditions() {
        return conditions;
    }

    /**
     * Setter for conditions.<p>
     * Trigger conditions added to the enhanced move.
     */
    public void setConditions(List<TriggerActionRollConditionEnhancement> conditions) {
        this.conditions = conditions;
    }
}