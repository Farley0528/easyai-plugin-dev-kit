import { parse } from "@vue/compiler-sfc";

export function createInjectClassPlugin(prefix = "remote-ui") {
  return {
    name: "inject-remote-ui-class",
    enforce: "pre",
    transform(code: string, id: string): string | null {
      if (!id.endsWith(".vue")) return null;
      if (!id.includes("components")) return null;

      const { descriptor } = parse(code);
      if (!descriptor.template) return null;

      let template = descriptor.template.content;

      // 找根节点（第一行的 <xxx ...>）
      template = template.replace(/<([\w-]+)([^>]*)>/, (match, tag, attrs) => {
        if (/class\s*=/.test(attrs)) {
          // 已经有 class -> 合并
          return `<${tag}${attrs.replace(
            /class\s*=\s*["']([^"']*)["']/,
            (_: string, cls: string) => `class="${prefix} ${cls}"`,
          )}>`;
        } else {
          // 没有 class -> 直接加
          return `<${tag} class="${prefix}"${attrs}>`;
        }
      });

      return code.replace(descriptor.template.content, template);
    },
  };
}
