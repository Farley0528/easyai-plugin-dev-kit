import type {
  ComfyUIProperties,
  ComponentGroupType,
} from "~/composables/meta/interface/drawPanne.interface";
import type {BuilderComponentGroupType} from "~/composables/meta/interface/dynamicPage.interface";

export const ComponentSceneConst = {
  DynamicPage: "dynamicPage", // 自定义页面
  Workflow: "workflow", // 工作流
  DrawPanne: "drawPanne", // 绘画面板
  AppGuide: "appGuide" // 应用引导
} as const;

export type ComponentSceneType =
  (typeof ComponentSceneConst)[keyof typeof ComponentSceneConst];

/**
 * 组件元信息
 * @property name
 */
export interface IComponentMateInfo<
  T extends ComponentSceneType = ComponentSceneType,
> {
  name: string; // 组件名称
  path: string; // 组件路径
  description: string; // 描述
  scenes: T; // 所属场景
  data: ComponentDataMap[T]; // 组件数据
}

export type ComponentDataMap = {
  [ComponentSceneConst.DrawPanne]: IDrawPanneData;
  [ComponentSceneConst.DynamicPage]: IDynamicPageData;
  [ComponentSceneConst.AppGuide]: { label: string };
  [ComponentSceneConst.Workflow]?: never;
};

/**
 * 元信息
 * @property remoteEntry 入口
 */
export interface IManifestMateInfo {
  version: string; // 项目版本号
  prefix: string; // 入口文件访问前缀
  remoteEntry: string; // 远程入口文件
  components: IComponentMateInfo<ComponentSceneType>[]; // 组件信息清单
}

export interface IDrawPanneData {
  paramName: keyof ComfyUIProperties;
  label?: string;
  example?: IDynamicOptions;
  icon?: string;
  group: ComponentGroupType;
  isRefComponent?: boolean;
  type?: "number" | "string" | "boolean";
  isUnique?: boolean;
}


export interface IDynamicPageData {
    icon: string           // 图标
    label: string          // 标签
    group: BuilderComponentGroupType //分组
    props?: Record<string, unknown> // 组件属性
    hint?: string                    // 提示信息
}
