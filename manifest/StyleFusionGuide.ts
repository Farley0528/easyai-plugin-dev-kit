import { ComponentSceneConst, type IComponentMateInfo } from "~/composables";

/**
 * 应用右侧使用说明插件
 */
export default {
  name: "StyleFusionGuide", // 组件名称
  path: "./components/StyleFusionGuide/index.vue", // 组件路径
  scenes: ComponentSceneConst.AppGuide, // 组件场景
  description: "应用引导-款式融合", // 组件描述
  data: {
    label: "应用使用指南",   // 组件标签
  }
} satisfies IComponentMateInfo<typeof ComponentSceneConst.AppGuide>;
