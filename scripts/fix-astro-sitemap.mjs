import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const utilsDir = path.resolve("node_modules", "@astrojs", "sitemap", "dist", "utils");
const runtimePath = path.join(utilsDir, "parse-i18n-url.js");
const typesPath = path.join(utilsDir, "parse-i18n-url.d.ts");

const runtimeStub = `function parseI18nUrl() {
  return void 0;
}

export {
  parseI18nUrl,
};
`;

const typeStub = "export declare function parseI18nUrl(): undefined;\n";

await mkdir(utilsDir, { recursive: true });
await writeFile(runtimePath, runtimeStub, "utf8");
await writeFile(typesPath, typeStub, "utf8");
