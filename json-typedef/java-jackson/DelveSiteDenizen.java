// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class DelveSiteDenizen {
    @JsonProperty("_id")
    private DelveSiteDenizenId id;

    @JsonProperty("frequency")
    private DelveSiteDenizenFrequency frequency;

    @JsonProperty("max")
    private Short max;

    @JsonProperty("min")
    private Short min;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("_comment")
    private String comment;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("name")
    private Label name;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("npc")
    private NpcId npc;

    public DelveSiteDenizen() {
    }

    /**
     * Getter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public DelveSiteDenizenId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public void setId(DelveSiteDenizenId id) {
        this.id = id;
    }

    /**
     * Getter for frequency.<p>
     */
    public DelveSiteDenizenFrequency getFrequency() {
        return frequency;
    }

    /**
     * Setter for frequency.<p>
     */
    public void setFrequency(DelveSiteDenizenFrequency frequency) {
        this.frequency = frequency;
    }

    /**
     * Getter for max.<p>
     */
    public Short getMax() {
        return max;
    }

    /**
     * Setter for max.<p>
     */
    public void setMax(Short max) {
        this.max = max;
    }

    /**
     * Getter for min.<p>
     */
    public Short getMin() {
        return min;
    }

    /**
     * Setter for min.<p>
     */
    public void setMin(Short min) {
        this.min = min;
    }

    /**
     * Getter for comment.<p>
     * Any implementation hints or other developer-facing comments on this
     * object. These should be omitted when presenting the object for gameplay.
     */
    public String getComment() {
        return comment;
    }

    /**
     * Setter for comment.<p>
     * Any implementation hints or other developer-facing comments on this
     * object. These should be omitted when presenting the object for gameplay.
     */
    public void setComment(String comment) {
        this.comment = comment;
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
     * Getter for npc.<p>
     * The ID of the relevant NPC entry, if one is specified.
     */
    public NpcId getNpc() {
        return npc;
    }

    /**
     * Setter for npc.<p>
     * The ID of the relevant NPC entry, if one is specified.
     */
    public void setNpc(NpcId npc) {
        this.npc = npc;
    }
}
