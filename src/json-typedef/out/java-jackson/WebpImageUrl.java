// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Dataforged;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * A relative URL pointing to a WEBP image.
 */
public class WebpImageUrl {
    @JsonValue
    private String value;

    public WebpImageUrl() {
    }

    @JsonCreator
    public WebpImageUrl(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
