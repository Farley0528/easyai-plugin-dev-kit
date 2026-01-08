export enum WorkFlowTypeEnum {
  system = 'system', // 系统级别，内置工作流
  common = 'common', // 公共级别，用户共享工作流
  personal = 'personal' // 个人级别，创作者工作流
}

/**
 * @property _id 工作流id
 * @property title 显示名称
 * @property name 标准名称，需要保持唯一
 * @property params 参数
 * @property workflow 工作流
 * @property cover 封面图
 * @property preview 预览图
 * @property is_public 是否公开
 * @property description 工作流描述
 * @property power   算力消耗
 * @property nodeCount 节点数
 * @property runTime 运行时间，秒
 * @property sortNumber 排序
 * @property tags 应用标签
 * @property useGuide 使用指导图，显示在工作流的使用页面
 * @property includeServers 指定运行的服务器名
 * @property excludeServers 排除运行的服务器名
 * @property user 用户
 * @property type 工作流类型
 * @property mainProducts 代表作
 * @property comment 评论
 * @property organizations 所属组织
 * @property salePrice 销售价格
 * @property updated_at 更新时间
 * @property application_id  所属应用
 * @property editor_model 0表示创造新内容， 1表示编辑已有内容
 * @property prem_level_min 默认为空，表示无需权限层级，有值时表示需要相应的权限层级才可以访问
 * @property category 分类
 * @property appType 应用类型
 * @property custom_workflow 自定义工作流id
 * @property customAccessUrl 自定义访问接口
 * @property created_at 创建时间
 * @property isLiked 是否喜欢
 * @property likeCount 喜欢数
 * @property isFavorited 是否喜欢
 * @property favoriteCount 喜欢数
 * @property useCount 使用次数
 */
export interface WorkFlow {
  _id?: string
  title?: string // 显示名称
  name: string // 标准名称，需要保持唯一
  params: any // 参数
  workflow: string | object // 工作流
  cover?: string // 封面图
  preview?: string // 预览图
  is_public?: boolean // 是否公开
  description?: string // 工作流描述
  description_mcp?: string // 描述，用于mcp
  power?: number //   算力消耗
  nodeCount?: number // 节点数
  runTime?: number // 运行时间，秒
  timeout_setting: TimeOutConfig
  sortNumber?: number // 排序
  tags?: string[] // 应用标签
  useGuide?: string // 使用指导图，显示在工作流的使用页面
  includeServers?: string[] // 指定运行的服务器名
  excludeServers?: string[] // 排除运行的服务器名
  user?: User
  type?: WorkFlowTypeEnum // 工作流类型
  mainProducts?: string[] // 代表作
  comment?: IComment[] // 评论
  organizations?: string[] // 所属组织
  salePrice?: number // 销售价格
  updated_at?: number // 更新时间
  application_id?: string[] // 所属应用
  editor_model?: 0 | 1 // editor_model 0表示创造新内容， 1表示编辑已有内容
  prem_level_min?: number // 默认为空，表示无需权限层级，有值时表示需要相应的权限层级才可以访问
  category?: WorkFlowCategoriesEnum[] // 分类
  appType: AppTypeEnum
  custom_workflow?: string // 自定义工作流id
  template_example_data?: Record<string, any>
  customAccessUrl?: string // 自定义访问接口
  created_at?: number // 创建时间
  isLiked?: boolean // 是否喜欢
  likeCount?: number // 喜欢数
  isFavorited?: boolean // 是否收藏
  favoriteCount?: number // 收藏数
  useCount?: number // 使用次数
  integrationPlatforms?: { _id: string, code: string, isAuthed: boolean }[] // 集成平台
}

export type WorkFlowApp = Pick<
  WorkFlow,
  | 'cover'
  | 'user'
  | 'title'
  | 'description'
  | '_id'
  | 'tags'
  | 'name'
  | 'type'
  | 'category'
  | 'customAccessUrl'
  | 'params'
  | 'appType'
  | 'sortNumber'
  | 'created_at'
  | 'isLiked'
  | 'likeCount'
  | 'isFavorited'
  | 'favoriteCount'
  | 'useCount'
  | 'power'
>


/** 工作流超时设定 */
export interface TimeOutConfig {
  timeout: number
  timeoutActions?: TimeOutActionEnum[]
}


export const TimeOutActionConst = {
  CANCEL: 'cancel',
  CONTINUE: 'continue',
  RETRY: 'RETRY'
} as const

export type TimeOutActionEnum =
  (typeof TimeOutActionConst)[keyof typeof TimeOutActionConst]

/**
 * 用户信息
 * @property _id 用户id
 * @property nickname 用户名
 * @property password 密码
 * @property username 用户名
 * @property wx_openid 微信openid
 * @property wx_unionid 微信unionid
 * @property avatar_url 头像url
 * @property email 邮箱
 * @property inviter_uid 邀请人id
 * @property last_login_date 最后一次登录时间
 * @property register_date 注册时间
 * @property last_login_ip 最后一次登录ip
 * @property mobile 手机号
 * @property my_invite_code 我的邀请码
 * @property role 用户角色
 * @property token 登录token
 * @property socket_id 用户socket id
 * @property status 用户状态
 * @property balance 用户余额
 */
export interface User {
  _id: string
  nickname?: string
  password?: string
  username: string
  wx_openid?: string
  wx_unionid?: string
  avatar_url?: string
  email?: string
  inviter_uid?: string | User
  last_login_date?: number
  register_date?: number
  last_login_ip?: string
  mobile?: string
  my_invite_code?: string[]
  role?: RoleEnum[]
  token?: string
  refresh_token?: string
  socket_id?: string
  status?: 0 | 1 | 2 // 0:正常，1:禁用，2:删除
  balance?: number // 余额
  points?: number // 积分
  organizations?: Array<Pick<IOrganization, '_id' | 'name' | 'admin_ids'>> // 组织id列表
  totalPower?: number // 总积分
}

export interface IComment {
  _id?: string
  rootId?: string
  replyTo?: User | string // 回复的评论ID
  content: string // 评论内容
  author?: User // 评论者
  targetType: CommentTypeEnum // 评论对象的类型 (应用｜作品|AI模型|项目)
  targetId?: string // 评论对象的ID
  deleteFlag?: boolean // 删除标记
  created_at?: number // 创建时间
  likeCount?: number // 点赞数
  authorFlag?: boolean // 作者标记
  replies?: IComment[] // 回复评论
}


/**
 * 工作流分类
 * @description 工作流分类，用于前端展示
 * @enum Marketing 营销
 * @enum Design 设计
 * @enum Development 开发
 * @enum CustomerService 客服
 * @enum Product 产品
 * @enum Operations 运营
 */
export enum WorkFlowCategoriesEnum {
  Marketing = 'Marketing',
  Design = 'Design',
  Development = 'Development',
  CustomerService = 'CustomerService',
  Product = 'Product',
  Operations = 'Operations'
}


/**
 * 工作流的类型
 * @enum workflow: ComfyUI工作流应用
 * @enum custom: 自定义应用,访问链接跳转
 * @enum api: 自定义工作流应用，EasyAI 应用
 */
export enum AppTypeEnum {
  workflow = 'workflow',
  custom = 'custom',
  customWorkflow = 'customWorkflow'
}

export enum CommentTypeEnum {
  app = 'app', // 应用（工作流）
  work = 'work', // 作品
  aiModel = 'aiModel', // AI模型
  project = 'project' // 项目
}

/**
 * 用户权限
 * @property PUBLIC 游客
 * @property USER 普通用户
 * @property CREATOR 创作者
 * @property OPERATOR 运营人员
 * @property MANAGER 普通管理员
 * @property ADMIN 超级管理员
 */
export enum RoleEnum {
  // 游客
  PUBLIC = 'public',
  // 普通用户
  USER = 'user',
  // 创作者
  CREATOR = 'creator',
  // 运营人员
  OPERATOR = 'operator',
  // 普通管理员
  MANAGER = 'manager',
  // 超级管理员
  ADMIN = 'admin'
}


export interface IOrganization {
  _id: string
  name: string
  description?: string
  parent?: string
  level?: number // 权限等级
  workflows?: string[] | WorkFlow[]
  users?: string[] | User[]
  created_at?: number
  children?: IOrganization[]
  admin_ids: Array<string>
  balance: number
  concurrency_limit: number
  is_default_register_org: boolean //  是否是默认注册组织
  enableExclusive: boolean // 启用独享部署
}
