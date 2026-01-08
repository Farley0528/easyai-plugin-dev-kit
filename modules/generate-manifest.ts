import { defineNuxtModule } from "@nuxt/kit";
import fs from "fs";
import path from "path";
import pkg from "../package.json";

export default defineNuxtModule({
  meta: { name: "generate-manifest" },
  async setup(_, nuxt) {
    const generateManifest = () => {
      const manifestDir = path.resolve(nuxt.options.rootDir, "manifest");
      if (!fs.existsSync(manifestDir)) {
        return;
      }

      // 只读取 ts 文件
      const files = fs
        .readdirSync(manifestDir)
        .filter((f) => f.endsWith(".ts"));
      const components = files.map((f) => {
        const mod = require(path.join(manifestDir, f));
        return mod.default;
      });

      const remoteEntry = `remoteEntry_${pkg.version}.js`;

        const outPath = path.join(nuxt.options.rootDir, "public/generated/manifest.js");

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(
        outPath,
        `// ⚠️ 自动生成，请勿修改
export const manifestInfo = ${JSON.stringify(
          { version: pkg.version, prefix: "_nuxt", remoteEntry, components },
          null,
          2,
        )};
`,
        "utf-8",
      );

      return;
    };

    // 初始化就生成一次，保证 dev/build 第一阶段文件存在
    generateManifest();

    // build 前再生成一次
    nuxt.hooks.hook("nitro:build:before", generateManifest);
  },
});
