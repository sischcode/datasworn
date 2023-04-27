// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.util.Map;

@JsonSerialize
public class OracleTableRendering {
    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("color")
    private Color color;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("columns")
    private Map<String, OracleTableColumn> columns;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("icon")
    private SvgImageUrl icon;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @JsonProperty("style")
    private OracleTableStyle style;

    public OracleTableRendering() {
    }

    /**
     * Getter for color.<p>
     */
    public Color getColor() {
        return color;
    }

    /**
     * Setter for color.<p>
     */
    public void setColor(Color color) {
        this.color = color;
    }

    /**
     * Getter for columns.<p>
     */
    public Map<String, OracleTableColumn> getColumns() {
        return columns;
    }

    /**
     * Setter for columns.<p>
     */
    public void setColumns(Map<String, OracleTableColumn> columns) {
        this.columns = columns;
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
     * Getter for style.<p>
     */
    public OracleTableStyle getStyle() {
        return style;
    }

    /**
     * Setter for style.<p>
     */
    public void setStyle(OracleTableStyle style) {
        this.style = style;
    }
}