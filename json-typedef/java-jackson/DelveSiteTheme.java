// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;

/**
 * A delve site theme card.
 */
@JsonSerialize
public class DelveSiteTheme {
    @JsonProperty("dangers")
    private List<DelveSiteThemeDangerRow> dangers;

    @JsonProperty("features")
    private List<DelveSiteThemeFeatureRow> features;

    @JsonProperty("id")
    private DelveSiteThemeId id;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("source")
    private Source source;

    @JsonProperty("summary")
    private MarkdownString summary;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("canonical_name")
    private Label canonicalName;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("description")
    private MarkdownString description;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("icon")
    private SvgImageUrl icon;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("suggestions")
    private Suggestions suggestions;

    public DelveSiteTheme() {
    }

    /**
     * Getter for dangers.<p>
     */
    public List<DelveSiteThemeDangerRow> getDangers() {
        return dangers;
    }

    /**
     * Setter for dangers.<p>
     */
    public void setDangers(List<DelveSiteThemeDangerRow> dangers) {
        this.dangers = dangers;
    }

    /**
     * Getter for features.<p>
     */
    public List<DelveSiteThemeFeatureRow> getFeatures() {
        return features;
    }

    /**
     * Setter for features.<p>
     */
    public void setFeatures(List<DelveSiteThemeFeatureRow> features) {
        this.features = features;
    }

    /**
     * Getter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public DelveSiteThemeId getId() {
        return id;
    }

    /**
     * Setter for id.<p>
     * The unique Datasworn ID for this item.
     */
    public void setId(DelveSiteThemeId id) {
        this.id = id;
    }

    /**
     * Getter for name.<p>
     * The primary name/label for this item.
     */
    public Label getName() {
        return name;
    }

    /**
     * Setter for name.<p>
     * The primary name/label for this item.
     */
    public void setName(Label name) {
        this.name = name;
    }

    /**
     * Getter for source.<p>
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
     */
    public Source getSource() {
        return source;
    }

    /**
     * Setter for source.<p>
     * Attribution for the original source (such as a book or website) of this
     * item, including the author and licensing information.
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
     * Getter for canonicalName.<p>
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    public Label getCanonicalName() {
        return canonicalName;
    }

    /**
     * Setter for canonicalName.<p>
     * The name of this item as it appears on the page in the book, if it's
     * different from `name`.
     */
    public void setCanonicalName(Label canonicalName) {
        this.canonicalName = canonicalName;
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
     * Getter for icon.<p>
     */
    public SvgImageUrl getIcon() {
        return icon;
    }

    /**
     * Setter for icon.<p>
     */
    public void setIcon(SvgImageUrl icon) {
        this.icon = icon;
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
