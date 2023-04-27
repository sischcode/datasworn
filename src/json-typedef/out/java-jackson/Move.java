// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class Move {
    @JsonProperty("id")
    private Id id;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("outcomes")
    private MoveOutcomes outcomes;

    @JsonProperty("source")
    private Source source;

    @JsonProperty("text")
    private MarkdownString text;

    @JsonProperty("trigger")
    private Trigger trigger;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("suggestions")
    private Suggestions suggestions;

    public Move() {
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
     * Getter for name.<p>
     */
    public Label getName() {
        return name;
    }

    /**
     * Setter for name.<p>
     */
    public void setName(Label name) {
        this.name = name;
    }

    /**
     * Getter for outcomes.<p>
     */
    public MoveOutcomes getOutcomes() {
        return outcomes;
    }

    /**
     * Setter for outcomes.<p>
     */
    public void setOutcomes(MoveOutcomes outcomes) {
        this.outcomes = outcomes;
    }

    /**
     * Getter for source.<p>
     */
    public Source getSource() {
        return source;
    }

    /**
     * Setter for source.<p>
     */
    public void setSource(Source source) {
        this.source = source;
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

    /**
     * Getter for trigger.<p>
     */
    public Trigger getTrigger() {
        return trigger;
    }

    /**
     * Setter for trigger.<p>
     */
    public void setTrigger(Trigger trigger) {
        this.trigger = trigger;
    }

    /**
     * Getter for suggestions.<p>
     */
    public Suggestions getSuggestions() {
        return suggestions;
    }

    /**
     * Setter for suggestions.<p>
     */
    public void setSuggestions(Suggestions suggestions) {
        this.suggestions = suggestions;
    }
}