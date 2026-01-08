/**
 * 组件的的分类
 */
export const ComponentGroupConst = {
  BASE: "base", // 基础组件
  PROMPT: "prompt", // 提示词
  HINT: "hint", // 提示类
  SELECT: "select", // 下拉框
  COLOR_SELECT: "color_select",
  IMAGE: "image", // 图片组件
  OUTPUT: "output", // 产出，无实际组件
  BUSSINESS: "business",
} as const;

export type ComponentGroupType =
  (typeof ComponentGroupConst)[keyof typeof ComponentGroupConst];

/** 动态参数 */
export interface IDynamicOptions {
  min?: number;
  max?: number;
  step?: number;
  hint?: string;
  href?: string;
  required?: boolean;
  seedLength?: number; // 随机种子的长度
  imageSelectItems?: IImageSelectItem[];
  selectItems?: ISelectItem[];
  enableLLM?: boolean; // 是否启用大模型微调功能
  enableTranslate?: boolean; // 是否启用翻译功能
  enableAutoTranslate?: boolean; // 是否启用自动翻译功能
  presetPrompt?: string;
  prePendPositive?: string; // 前置追加正向提示词
  separator?: string; // 分割符号
  limit?: number;
  maskDomain?: number;
  modelType?: PlatformModelType;
  templateText?: string;
  templateOptions?: Record<string, { label: string; value: string }[]>;
}

/** 预览选择组件参数 */
export interface IImageSelectItem {
  src: string;
  title: string;
  value: string | number | boolean;
  valueExtra: string | number | boolean;
  valueExtra2?: string | number | boolean;
}

/** picker 选项 */
export interface ISelectItem {
  label: string;
  value: string | number | boolean;
}

/** 模型种类 */
export const PlatformModelTypeConst = {
  IMAGE_GENERATE: "image_generate",
  IMAGE_EDIT: "image_edit",
  IMAGE_ANALYSIS: "image_analysis",
  TEXT_GENERATE: "text_generate",
  VIDEO_GENERATE: "video_generate",
  IMAGE_TO_VIDEO: "image_to_video",
  TOOLS_CALL: "tools_call",
  AUDIO_GENERATE: "audio_generate",
  TEXT_TO_MODEL: "text_to_model",
  IMAGE_TO_MODEL: "image_to_model",
  MULTIVIEW_TO_MODEL: "multiview_to_model",
} as const;
export type PlatformModelType =
  (typeof PlatformModelTypeConst)[keyof typeof PlatformModelTypeConst];

// 用在外部接口的匹配
export interface ComfyUIProperties {
  ckpt_name?: string;
  lora_name?: string;
  positive?: string;
  positive_template?: string;
  negative?: string;
  width?: number;
  height?: number;
  seed?: number;

  image_path?: string; // 整个工作流只有一张图片输入，一般使用这个参数
  image_path_mask?: string; // 遮罩图片
  image_path_face?: string; // 换脸场景，脸部参考图片
  image_path_style?: string; // 参考图场景，例如ipdapter
  denoise?: number;
  output?: string;
  // 视频参数
  video_frames?: number;
  fps?: number;
  motion_bucket_id?: number;
  augmentation_level?: number;
  filename_prefix?: string;
  cfg?: number;
  steps?: number;
  min_cfg?: number;

  upscale_by?: number; // 放大倍数
  // SD3专属参数
  sd3_aspect_ratio?: SD3AspectRatio;

  // 自定义下拉列表
  custom_dropselect?: string;
  custom_dropselect_number?: number;

  advance_select_image_preview?: string; // 高级选择组件，带图片样式预览
  advance_select_single_chips?: string; // 高级选择组件，纸片组单选
  advance_select_multi_chips?: string; // 高级选择组件，纸片组多选

  // 颜色选择
  advance_select_color: string;

  // 颜色预览选择
  advance_select_preview_color: string;

  // 在线遮罩编辑
  advance_onlineEdit_origin?: string; // 在线遮罩编辑，原图（图像图层部分）
  advance_onlineEdit_mask?: string; // 在线遮罩编辑，遮罩部分  advance_onlineEdit_origin?: string    //在线遮罩编辑，原图（图像图层部分）
  advance_onlineEdit_origin_2?: string;
  advance_onlineEdit_mask_2?: string;

  // 生成的图像批次数量
  batch_size?: number;

  // 自定义数字滑块
  custom_number_slider?: number;

  //     自定义参数
  custom_number?: number;
  custom_string?: string;

  // 自定义批量处理
  custom_batch_image_path_origin?: string;
  custom_batch_image_path_origin_2?: string;

  // 自定义提示信息
  custom_hint?: string;
  // 第二版
  // 模型选择
  advance_ckpt_name?: string;
  advance_lora_name?: string;
  // 3d图片路径
  advance_image_path_3d?: string;
  // 正向提示词
  advance_positive?: string;
  // 负向提示词
  advance_negative?: string;
  // 细节增强提示词
  advance_adetailer?: string;
  // 自定义分组标签
  custom_group_label?: string;
  // 高级图片上传-参考图
  advance_image_upload?: string;
  // 高级图片上传-间单图片
  advance_sample_image_upload?: string;
  // 高级图片上传-背景图片
  advance_background_upload?: string;
  // 高级图片上传-画板图片
  advance_canvas_image_upload?: string;
  // 高级图片上传-遮罩图片
  advance_canvas_mask_upload?: string;
  // 高级图片上传-拆件原图
  advance_splitter_image_upload?: string;
  // 高级图片上传-拆件遮罩原图
  advance_splitter_mask_upload?: string;
  // 自定义单选框-参考图
  custom_radio?: string;
  // 高级自定义数字滑块
  advance_custom_number_slider?: number;
  // 高级自定义下拉列表
  advance_custom_dropselect?: string;
  // 高级随机种子
  advance_seed?: number;
  // 点集
  coordinates?: string; // 正样本点集坐标
  neg_coordinates?: string; // 负样本点集坐标

  canvas_swap_background?: string; // 交换背景图片
  canvas_swap_origin?: string; // 交换背景原图

  multi_image_path?: string; // 多张图片
  multi_source_image_path?: string; // 多源图片选择

  canvas_image_group?: string; // 图片合并
  image_first_frame?: string; // 首帧图片
  image_last_frame?: string; // 尾帧图片
  model_alias?: string; // 模型别名
  multi_view_images?: string; // 多视图图片上传

  upload_image_path?: string; // 图片上传（本地/素材库）
}

export type SD3AspectRatio =
  | "1:1"
  | "16:9"
  | "21:9"
  | "2:3"
  | "3:2"
  | "3:4"
  | "4:3"
  | "9:16";
