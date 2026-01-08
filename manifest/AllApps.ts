/**
 * 页面插件示例
 */

import {ComponentSceneConst, type IComponentMateInfo} from "~/composables";
import {BuilderComponentGroupConst} from "~/composables/meta/interface/dynamicPage.interface";
export default {
    name: "RemoteAllApps", // 组件名称 备注：带上特殊标识，不要和已有组件重名，比如Remote+组件名
    path: "./components/AllApps/index.vue", // 组件路径
    scenes: ComponentSceneConst.DynamicPage, // 组件场景
    description: "",
    data: {
        icon: "carbon:app", // 组件图标
        label: "全部应用",   // 组件标签
        group: BuilderComponentGroupConst.HomeTemplate
    }
} satisfies IComponentMateInfo<typeof ComponentSceneConst.DynamicPage>;

