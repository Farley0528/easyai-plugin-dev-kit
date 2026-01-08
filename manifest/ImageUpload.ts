import { ComponentSceneConst, type IComponentMateInfo } from "~/composables";
import { ComponentGroupConst } from "~/composables";

export default {
  name: "ImageUpload", // 组件名称
  path: "./components/ImageUpload/index.vue", // 组件路径
  scenes: ComponentSceneConst.DrawPanne, // 组件场景
  description: "A image upload component", // 组件描述
  data: {
    // 组件数据
    paramName: "upload_image_path", // 参数名称,可自定义
    label: "图片上传", // 组件标签，显示在组件面板时候的名称
    icon: "icon-park:upload-picture", // 组件图标，显示在组件面板的图标
    group: ComponentGroupConst.IMAGE, // 针对组件
    isRefComponent: true, // 是否为引用组件 （引用组件，在执行绘画的时候会执行参数赋值操作）
  },
} satisfies IComponentMateInfo<typeof ComponentSceneConst.DrawPanne>;
