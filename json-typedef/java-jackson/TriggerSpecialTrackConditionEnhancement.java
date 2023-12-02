// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

/**
 * A progress move that rolls on one or more special tracks, like Bonds (classic
 * Ironsworn), Failure (Delve), or Legacy (Starforged).
 */
@JsonSerialize
public class TriggerSpecialTrackConditionEnhancement {
    @JsonProperty("method")
    private SpecialTrackRollMethod method;

    @JsonProperty("roll_options")
    private List<TriggerSpecialTrackConditionOption> rollOptions;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("by")
    private TriggerBy by;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("text")
    private MarkdownString text;

    public TriggerSpecialTrackConditionEnhancement() {
    }

    /**
     * Getter for method.<p>
     */
    public SpecialTrackRollMethod getMethod() {
        return method;
    }

    /**
     * Setter for method.<p>
     */
    public void setMethod(SpecialTrackRollMethod method) {
        this.method = method;
    }

    /**
     * Getter for rollOptions.<p>
     * The options available when rolling with this trigger condition.
     */
    public List<TriggerSpecialTrackConditionOption> getRollOptions() {
        return rollOptions;
    }

    /**
     * Setter for rollOptions.<p>
     * The options available when rolling with this trigger condition.
     */
    public void setRollOptions(List<TriggerSpecialTrackConditionOption> rollOptions) {
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