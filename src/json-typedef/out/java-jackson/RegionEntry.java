// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

@JsonSerialize
public class RegionEntry {
    @JsonProperty("description")
    private MarkdownString description;

    @JsonProperty("features")
    private List<MarkdownString> features;

    @JsonProperty("id")
    private Id id;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("quest_starter")
    private MarkdownString questStarter;

    @JsonProperty("source")
    private Source source;

    @JsonProperty("summary")
    private MarkdownString summary;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("suggestions")
    private Suggestions suggestions;

    public RegionEntry() {
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
     * Getter for features.<p>
     */
    public List<MarkdownString> getFeatures() {
        return features;
    }

    /**
     * Setter for features.<p>
     */
    public void setFeatures(List<MarkdownString> features) {
        this.features = features;
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
     * Getter for summary.<p>
     */
    public MarkdownString getSummary() {
        return summary;
    }

    /**
     * Setter for summary.<p>
     */
    public void setSummary(MarkdownString summary) {
        this.summary = summary;
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
