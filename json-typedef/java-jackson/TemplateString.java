// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * A rich text string in Markdown with replaced values from oracle roll results.
 * 
 * The custom syntax `{{some_row_key:some_oracle_table_id}}` should be replaced
 * by the `some_row_key` string of a rolled oracle table. This is usually the
 * `result` key, for example `{{result:starforged/oracles/core/action}}`
 */
public class TemplateString {
    @JsonValue
    private String value;

    public TemplateString() {
    }

    @JsonCreator
    public TemplateString(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}