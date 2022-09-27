// eslint-disable-next-line no-restricted-imports
import { writeSchema } from "./index.js";

const yamlDeclarations = "./build/dataforged-tools.d.ts";
const jsonDeclarations = "../dist/types/index.d.ts";

const schemasToWrite: {typeName: string, outFiles: string[], declarations: string}[] = [
  {
    typeName: "YamlAssetRoot",
    outFiles: ["../_master-data/schema/assets.json"],
    declarations: yamlDeclarations
  },
  {
    typeName: "YamlMoveRoot",
    outFiles: ["../_master-data/schema/moves.json"],
    declarations: yamlDeclarations
  },
  {
    typeName: "YamlEncounterRoot",
    outFiles: ["../_master-data/schema/encounters.json"],
    declarations: yamlDeclarations
  },
  {
    typeName: "YamlTruthRoot",
    outFiles: ["../_master-data/schema/setting_truths.json"],
    declarations: yamlDeclarations
  },
  {
    typeName: "YamlOracleRoot",
    outFiles: ["../_master-data/schema/oracles.json"],
    declarations: yamlDeclarations
  },
  {
    typeName: "YamlIronlandsRegionRoot",
    outFiles: ["../_master-data/schema/ironlands_regions.json"],
    declarations: yamlDeclarations
  },
  {
    typeName: "YamlDelveSiteThemeRoot",
    outFiles: ["../_master-data/schema/delve_site_themes.json"],
    declarations: yamlDeclarations
  },
  {
    typeName: "YamlDelveSiteDomainRoot",
    outFiles: ["../_master-data/schema/delve_site_domains.json"],
    declarations: yamlDeclarations
  },
  {
    typeName: "YamlDelveRarityRoot",
    outFiles: ["../_master-data/schema/delve_rarities.json"],
    declarations: yamlDeclarations
  },
  {
    typeName: "Starforged",
    outFiles: [ "../dist/starforged/schema.json", "../src/starforged/schema.json", "./src/json/starforged/schema.json" ],
    declarations: jsonDeclarations
  },
  {
    typeName: "Ironsworn",
    outFiles: [ "../dist/ironsworn/schema.json", "../src/ironsworn/schema.json", "./src/json/ironsworn/schema.json" ],
    declarations: jsonDeclarations
  }
];


schemasToWrite.forEach(({ declarations, typeName, outFiles }) => {
  writeSchema(declarations, typeName, outFiles);
});