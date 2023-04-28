// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

@JsonSerialize
public class OracleTable {
    @JsonProperty("canonical_name")
    private Label canonicalName;

    @JsonProperty("id")
    private OracleTableId id;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("source")
    private Source source;

    @JsonProperty("table")
    private List<OracleTableRow> table;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("description")
    private MarkdownString description;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("match")
    private OracleTableMatchBehavior match;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("rendering")
    private OracleTableRendering rendering;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("suggestions")
    private Suggestions suggestions;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("summary")
    private MarkdownString summary;

    public OracleTable() {
    }

    /**
     * Getter for canonicalName.<p>
     */
    public Label getCanonicalName() {
        return canonicalName;
    }

    /**
     * Setter for canonicalName.<p>
     */
    public void setCanonicalName(Label canonicalName) {
        this.canonicalName = canonicalName;
    }

    /**
     * Getter for id.<p>
     */
    public OracleTableId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     */
    public void setId(OracleTableId id) {
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
     * Getter for table.<p>
     */
    public List<OracleTableRow> getTable() {
        return table;
    }

    /**
     * Setter for table.<p>
     */
    public void setTable(List<OracleTableRow> table) {
        this.table = table;
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
     * Getter for match.<p>
     */
    public OracleTableMatchBehavior getMatch() {
        return match;
    }

    /**
     * Setter for match.<p>
     */
    public void setMatch(OracleTableMatchBehavior match) {
        this.match = match;
    }

    /**
     * Getter for rendering.<p>
     */
    public OracleTableRendering getRendering() {
        return rendering;
    }

    /**
     * Setter for rendering.<p>
     */
    public void setRendering(OracleTableRendering rendering) {
        this.rendering = rendering;
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
}
