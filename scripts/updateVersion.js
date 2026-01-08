import fs from "fs";
import path from "path";

const pkgPath = path.resolve(process.cwd(), "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

// 自动 patch
const versionParts = pkg.version.split(".").map(Number);
versionParts[2] += 1; // 每次 build 自动 +1
pkg.version = versionParts.join(".");

// 写回 package.json
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), "utf-8");
console.log(`Version updated to ${pkg.version}`);
