/**
 * 页面插件示例
 */

import {ComponentSceneConst, type IComponentMateInfo} from "~/composables";
export default {
    name: "Markdown2Html", // 插件名称 备注：带上特殊标识，不要和已有插件重名，比如Remote+插件名
    path: "./composables/worklfow/node/Markdown2HtmlNode.ts", // 插件路径
    scenes: ComponentSceneConst.Workflow, // 组件场景
    description: "",
    data: undefined,
} satisfies IComponentMateInfo<typeof ComponentSceneConst.Workflow>;

