import { join } from "path";
import { promises as fs } from "fs";
import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  // 跨域
  event.node.res.setHeader("Access-Control-Allow-Origin", "*");
  event.node.res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  event.node.res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // 支持 preflight OPTIONS 请求
  if (event.node.req.method === "OPTIONS") {
    event.node.res.statusCode = 204;
    event.node.res.end();
    return;
  }

  try {
    // Nuxt buildDir 是 .nuxt
    let manifestPath = join(process.cwd(), "public/generated/manifest.js");

    // 检查文件是否存在
    try {
      await fs.access(manifestPath);
    } catch {
      // fallback 到 .output/public
      manifestPath = join(process.cwd(), ".output/public/generated/manifest.js");
      await fs.access(manifestPath);
    }

    // 动态导入
    const { manifestInfo } = await import(manifestPath);

    return manifestInfo;
  } catch (err) {
    console.warn("manifest not found", err);
    return { version: "0.0.0", components: [] };
  }
});
