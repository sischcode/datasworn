// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class MoveReroll {
    @JsonProperty("method")
    private MoveRerollMethod method;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("text")
    private MarkdownString text;

    public MoveReroll() {
    }

    /**
     * Getter for method.<p>
     */
    public MoveRerollMethod getMethod() {
        return method;
    }

    /**
     * Setter for method.<p>
     */
    public void setMethod(MoveRerollMethod method) {
        this.method = method;
    }

    /**
     * Getter for text.<p>
     * Describes the trigger condition for the reroll, if any.
     */
    public MarkdownString getText() {
        return text;
    }

    /**
     * Setter for text.<p>
     * Describes the trigger condition for the reroll, if any.
     */
    public void setText(MarkdownString text) {
        this.text = text;
    }
}
