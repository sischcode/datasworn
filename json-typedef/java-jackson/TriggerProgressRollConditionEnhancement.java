// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

@JsonSerialize
public class TriggerProgressRollConditionEnhancement {
    @JsonProperty("method")
    private ProgressRollMethod method;

    @JsonProperty("roll_options")
    private List<ProgressRollOption> rollOptions;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("by")
    private TriggerBy by;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("text")
    private MarkdownString text;

    public TriggerProgressRollConditionEnhancement() {
    }

    /**
     * Getter for method.<p>
     */
    public ProgressRollMethod getMethod() {
        return method;
    }

    /**
     * Setter for method.<p>
     */
    public void setMethod(ProgressRollMethod method) {
        this.method = method;
    }

    /**
     * Getter for rollOptions.<p>
     * The options available when rolling with this trigger condition.
     */
    public List<ProgressRollOption> getRollOptions() {
        return rollOptions;
    }

    /**
     * Setter for rollOptions.<p>
     * The options available when rolling with this trigger condition.
     */
    public void setRollOptions(List<ProgressRollOption> rollOptions) {
        this.rollOptions = rollOptions;
    }

    /**
     * Getter for by.<p>
     */
    public TriggerBy getBy() {
        return by;
    }

    /**
     * Setter for by.<p>
     */
    public void setBy(TriggerBy by) {
        this.by = by;
    }

    /**
     * Getter for text.<p>
     * A markdown string of any trigger text specific to this trigger condition.
     */
    public MarkdownString getText() {
        return text;
    }

    /**
     * Setter for text.<p>
     * A markdown string of any trigger text specific to this trigger condition.
     */
    public void setText(MarkdownString text) {
        this.text = text;
    }
}