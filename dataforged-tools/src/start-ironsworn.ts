import "source-map-support/register.js";
import { JSON_PATHS } from "@constants/index.js";
import { Gamespace } from "@json_out/common/Gamespace.js";
import { buildDataforged } from "@utils/buildDataforged.js";
import { writeJson } from "@utils/io/writeJSON.js";
import _ from "lodash-es";

const data = buildDataforged(Gamespace.Ironsworn);
export { data };

_.forEach(data, (value, key) => {
  JSON_PATHS.forEach(path => writeJson(path + `/ironsworn/${key}.json`, value));
});

// buildOracleMarkdown(data.oracles, MD_PATH);

// buildMoveMarkdown(data.moves, MD_PATH);

// const outRoot = "img";
// const outWebP = "img/raster/webp";

// buildImages(IMG_PATH as string, outRoot, MASTER_PNG_PATH as string, outWebP);

