// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.List;
import java.util.Map;

@JsonSerialize
public class Asset {
    @JsonProperty("abilities")
    private List<AssetAbility> abilities;

    @JsonProperty("id")
    private Id id;

    @JsonProperty("name")
    private Label name;

    @JsonProperty("source")
    private Source source;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("attachments")
    private AssetAttachment attachments;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("controls")
    private Map<String, AssetControlField> controls;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("count_as_impact")
    private Boolean countAsImpact;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("options")
    private Map<String, AssetOptionField> options;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("requirement")
    private MarkdownString requirement;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("shared")
    private Boolean shared;

    public Asset() {
    }

    /**
     * Getter for abilities.<p>
     */
    public List<AssetAbility> getAbilities() {
        return abilities;
    }

    /**
     * Setter for abilities.<p>
     */
    public void setAbilities(List<AssetAbility> abilities) {
        this.abilities = abilities;
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
     * Getter for attachments.<p>
     */
    public AssetAttachment getAttachments() {
        return attachments;
    }

    /**
     * Setter for attachments.<p>
     */
    public void setAttachments(AssetAttachment attachments) {
        this.attachments = attachments;
    }

    /**
     * Getter for controls.<p>
     */
    public Map<String, AssetControlField> getControls() {
        return controls;
    }

    /**
     * Setter for controls.<p>
     */
    public void setControls(Map<String, AssetControlField> controls) {
        this.controls = controls;
    }

    /**
     * Getter for countAsImpact.<p>
     * If `true`, this asset counts as an impact (Starforged) or a debility
     * (classic Ironsworn).
     */
    public Boolean getCountAsImpact() {
        return countAsImpact;
    }

    /**
     * Setter for countAsImpact.<p>
     * If `true`, this asset counts as an impact (Starforged) or a debility
     * (classic Ironsworn).
     */
    public void setCountAsImpact(Boolean countAsImpact) {
        this.countAsImpact = countAsImpact;
    }

    /**
     * Getter for options.<p>
     */
    public Map<String, AssetOptionField> getOptions() {
        return options;
    }

    /**
     * Setter for options.<p>
     */
    public void setOptions(Map<String, AssetOptionField> options) {
        this.options = options;
    }

    /**
     * Getter for requirement.<p>
     */
    public MarkdownString getRequirement() {
        return requirement;
    }

    /**
     * Setter for requirement.<p>
     */
    public void setRequirement(MarkdownString requirement) {
        this.requirement = requirement;
    }

    /**
     * Getter for shared.<p>
     * Most assets only benefit to their owner, but certain assets (like
     * Starforged's module and command vehicle assets) are shared amongst the
     * player's allies, too.
     */
    public Boolean getShared() {
        return shared;
    }

    /**
     * Setter for shared.<p>
     * Most assets only benefit to their owner, but certain assets (like
     * Starforged's module and command vehicle assets) are shared amongst the
     * player's allies, too.
     */
    public void setShared(Boolean shared) {
        this.shared = shared;
    }
}
