// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public class RegularExpression {
    @JsonValue
    private String value;

    public RegularExpression() {
    }

    @JsonCreator
    public RegularExpression(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
