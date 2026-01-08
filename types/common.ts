import type { WorkFlow, WorkFlowApp } from "~/types/workflow";

export enum MaterialTypeEnum {
  common = "common", // 公共级别，用户素材
  personal = "personal", // 个人级别，用户个人素材
}

export type FileType = "image" | "video" | "audio" | "3d" | "text";

export interface IMaterial {
  _id: string;
  name: string; // 素材名称
  ext: string; // 素材后缀
  type: MaterialTypeEnum; // 素材类型
  fileType: FileType; // 素材文件类型
  description: string; // 素材描述
  tags: string[]; // 素材标签
  width: number; // 素材宽度
  height: number; // 素材高度
  size: number; // 素材大小
  url: string; // 素材链接
  mtl?: string; // 3d材质链接
  user_id: string; // 上传者
  organizations: string[]; // 组织
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
  preview: string; // 素材预览图
}

export const GlobalInjectKeyConst = {
  AllMaterials: "allMaterials",
  UploadFileToOSS: "useUtilsUploadFileToOSS",
  AllWorkFlowApps: "allWorkFlowApps"
} as const;

export type GlobalInjectKeyEnum =
  (typeof GlobalInjectKeyConst)[keyof typeof GlobalInjectKeyConst];

/** 全局注入的素材数据 */
export interface GlobalInjectMaterials {
  materials: Ref<IMaterial[], IMaterial[]>;
  refreshMaterials: () => Promise<void>;
}

/** 全局注入工作流应用状态 */
export interface GlobalInjectWorkflowAppStatus {
  workflows: Ref<WorkFlowApp[], WorkFlow[]>
  refreshAllWorkflows: () => Promise<void>
}

/** 全局注入函数 */
/**
 * 上传文件到OSS函数
 */
export interface GlobalInjectUploadFileToOSS {
  useUtilsUploadFileToOSS: (
    file: File | Blob,
    filename?: string
  ) => Promise<string>;
}
