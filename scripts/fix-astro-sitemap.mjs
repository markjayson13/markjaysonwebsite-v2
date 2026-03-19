import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const utilsDir = path.resolve("node_modules", "@astrojs", "sitemap", "dist", "utils");
const runtimePath = path.join(utilsDir, "parse-i18n-url.js");
const typesPath = path.join(utilsDir, "parse-i18n-url.d.ts");
const debugSrcDir = path.resolve("node_modules", "debug", "src");
const debugIndexPath = path.join(debugSrcDir, "index.js");
const remarkSmartypantsDistDir = path.resolve("node_modules", "remark-smartypants", "dist");
const remarkSmartypantsRuntimePath = path.join(remarkSmartypantsDistDir, "plugin.js");
const remarkSmartypantsTypesPath = path.join(remarkSmartypantsDistDir, "plugin.d.ts");
const prismComponentsDir = path.resolve("node_modules", "prismjs", "components");
const prismComponentsIndexPath = path.join(prismComponentsDir, "index.js");

const runtimeStub = `function parseI18nUrl() {
  return void 0;
}

export {
  parseI18nUrl,
};
`;

const typeStub = "export declare function parseI18nUrl(): undefined;\n";
const debugStub = `const createDebug = require("./common")(require("./node"));

module.exports = createDebug;
`;
const remarkSmartypantsRuntimeStub = `export default function remarkSmartypants() {
  return function transformer(tree) {
    return tree;
  };
}
`;
const remarkSmartypantsTypeStub = `export default function remarkSmartypants(): (tree: unknown) => unknown;\n`;
const prismComponentsStub = `export default function loadLanguages() {
  return void 0;
}
`;

await mkdir(utilsDir, { recursive: true });
await writeFile(runtimePath, runtimeStub, "utf8");
await writeFile(typesPath, typeStub, "utf8");
await mkdir(debugSrcDir, { recursive: true });
await writeFile(debugIndexPath, debugStub, "utf8");
await mkdir(remarkSmartypantsDistDir, { recursive: true });
await writeFile(remarkSmartypantsRuntimePath, remarkSmartypantsRuntimeStub, "utf8");
await writeFile(remarkSmartypantsTypesPath, remarkSmartypantsTypeStub, "utf8");
await mkdir(prismComponentsDir, { recursive: true });
await writeFile(prismComponentsIndexPath, prismComponentsStub, "utf8");
