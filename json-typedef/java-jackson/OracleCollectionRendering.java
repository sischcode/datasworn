// Code generated by jtd-codegen for Java + Jackson v0.2.1

package Datasworn;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

/**
 * Describes the presentation of this oracle collection, which might represent a
 * group of separate tables, or a single table with additional columns.
 */
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "style")
@JsonSubTypes({
    @JsonSubTypes.Type(name = "multi_table", value = OracleCollectionRenderingMultiTable.class),
    @JsonSubTypes.Type(name = "tables", value = OracleCollectionRenderingTables.class),
})
public abstract class OracleCollectionRendering {
}