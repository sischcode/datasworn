// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize
public class WorldTruthOption {
    @JsonProperty("description")
    private MarkdownString description;

    @JsonProperty("id")
    private Id id;

    @JsonProperty("quest_starter")
    private MarkdownString questStarter;

    public WorldTruthOption() {
    }

    /**
     * Getter for description.<p>
     */
    public MarkdownString getDescription() {
        return description;
    }

    /**
     * Setter for description.<p>
     */
    public void setDescription(MarkdownString description) {
        this.description = description;
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
     * Getter for questStarter.<p>
     */
    public MarkdownString getQuestStarter() {
        return questStarter;
    }

    /**
     * Setter for questStarter.<p>
     */
    public void setQuestStarter(MarkdownString questStarter) {
        this.questStarter = questStarter;
    }
}
