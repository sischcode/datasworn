// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

@JsonSerialize
public class MoveExtension {
    @JsonProperty("id")
    private Id id;

    @JsonProperty("trigger")
    private TriggerExtension trigger;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("_extends")
    private List<Id> extends_;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("outcomes")
    private MoveOutcomesExtension outcomes;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("text")
    private MarkdownString text;

    public MoveExtension() {
    }

    /**
     * Getter for id.<p>
     */
    public Id getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     */
    public void setId(Id id) {
        this.id = id;
    }

    /**
     * Getter for trigger.<p>
     */
    public TriggerExtension getTrigger() {
        return trigger;
    }

    /**
     * Setter for trigger.<p>
     */
    public void setTrigger(TriggerExtension trigger) {
        this.trigger = trigger;
    }

    /**
     * Getter for extends_.<p>
     */
    public List<Id> getExtends_() {
        return extends_;
    }

    /**
     * Setter for extends_.<p>
     */
    public void setExtends_(List<Id> extends_) {
        this.extends_ = extends_;
    }

    /**
     * Getter for outcomes.<p>
     */
    public MoveOutcomesExtension getOutcomes() {
        return outcomes;
    }

    /**
     * Setter for outcomes.<p>
     */
    public void setOutcomes(MoveOutcomesExtension outcomes) {
        this.outcomes = outcomes;
    }

    /**
     * Getter for text.<p>
     */
    public MarkdownString getText() {
        return text;
    }

    /**
     * Setter for text.<p>
     */
    public void setText(MarkdownString text) {
        this.text = text;
    }
}
