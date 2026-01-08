// server/api/markdown2html.post.ts
import { defineEventHandler, readBody } from "h3";
import MarkdownIt from "markdown-it";
import type {  NodeOutput } from "~/composables/worklfow/node/node.interface";

export default defineEventHandler(async (event) => {
  try {
    // 获取请求体
    const body = await readBody<{ markdown: string }>(event);

    if (!body?.markdown) {
      return { error: "Missing markdown content" };
    }

    // 初始化 Markdown-it
    const md = new MarkdownIt({
      html: true,        // 支持 HTML 标签
      linkify: true,     // 自动识别 URL
      typographer: true  // 美化引号、破折号等
    });

    // 转换
    const html = md.render(body.markdown);

    /**
     * 节点输出类型标准数据结构
     */
    return {
      output_content: [{
        type: "text",
        content: html
      }]
    } as NodeOutput;
  } catch (err) {
    console.error("Markdown to HTML conversion failed:", err);
    return { error: "Conversion failed", details: err.message };
  }
});
