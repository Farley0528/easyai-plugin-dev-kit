/**
 * 节点类型枚举
 */
export enum NodeTypeEnum {
  API = 'API',
  POLL_API = 'POLL_API',
  OUTPUT = 'OUTPUT',
  INPUT = 'INPUT',
  URL2FILE = 'URL2FILE',
  OpenAIImage = 'OpenAIImage',
  DrawApp = 'DrawApp',
  Agent = 'Agent',
  Preview = 'Preview',
  ComponentInput = 'ComponentInput',
  SAVETOLOCALFILE = 'SaveLocalFile',
  ApiPlugin='ApiPlugin',
  Markdown2Html='Markdown2Html'
}


/**
 * 节点元数据
 */
export interface INodeMeta {
  title: string
  description?: string
  icon?: string
}

/**
 * 节点数据接口
 */
export interface INodeData<T extends NodeTypeEnum = NodeTypeEnum> {
  class_type: T
  plugin_type?: NodeTypeEnum.ApiPlugin // 插件节点，必填
  _meta: INodeMeta
  inputs?: {
    [key: string]: any
  }
  output?: any
  data?: NodeDataMap[T]
  outputSpec?: INodeOutputSpec
}

export interface INodeOutputSpec {
  type: FileType
  defaultPath: string[]
}

/**
 * 节点数据映射类型
 * @type {NodeDataMap}
 * @property {IAPINodeData} API - API 节点数据
 * @property {IPollAPINodeData} POLL_API - 轮询 API 节点数据
 * @property {IInputNodeData} INPUT - 输入节点数据
 * @property {IOutputNodeData} OUTPUT - 输出节点数据
 * @property {IUrl2FileNodeData} URL2FILE - URL转文件节点数据
 * @property {IOpenAIImageNodeData} OpenAIImage - 云平台模型接口
 * @property {IDrawAppNodeData} DrawApp - 绘图应用
 * @property {IAgentNodeData} Agent - 智能体
 * @property {IPreviewNodeData} Preview - 预览节点
 */
export type NodeDataMap = {
  [NodeTypeEnum.API]: IAPINodeData
  [NodeTypeEnum.POLL_API]: IPollAPINodeData
  [NodeTypeEnum.INPUT]: IInputNodeData
  [NodeTypeEnum.OUTPUT]: IOutputNodeData
  [NodeTypeEnum.URL2FILE]: IUrl2FileNodeData
  [NodeTypeEnum.OpenAIImage]: IOpenAIImageNodeData
  [NodeTypeEnum.DrawApp]: IDrawAppNodeData
  [NodeTypeEnum.Agent]: IAgentNodeData
  [NodeTypeEnum.Preview]: IPreviewNodeData
  [NodeTypeEnum.ComponentInput]: IComponentInputData
  [NodeTypeEnum.ApiPlugin]: IApiPluginNodeData;
  [NodeTypeEnum.Markdown2Html]: IApiPluginNodeData
}


/**
 * API 节点数据类型
 * @interface IAPINodeData
 * @param userId - 用户 ID
 * @param successCondition - 成功条件
 * @param pollTime - 轮询时间
 * @param pollTimeout - 轮询超时时间
 * @param response - 响应数据
 */
export interface IAPINodeData {
  headers?: { [key: string]: string }
  params?: { [key: string]: string }
  pathParams?: { [key: string]: string }
  body?: { [key: string]: any }
  successCondition?: { key: string[], value: string | number | boolean }[]
}

/**
 * 轮询 API 节点数据类型
 * @interface IPollAPINodeData
 * @param headers - 请求头
 * @param body - 请求体
 * @param params - 请求参数
 * @param pathParams - 请求路径参数
 * @param successCondition - 成功条件
 * @param pollTime - 轮询时间
 * @param pollTimeout - 轮询超时时间
 */
export interface IPollAPINodeData {
  headers?: { [key: string]: string }
  body?: { [key: string]: any }
  params?: { [key: string]: string }
  pathParams?: { [key: string]: string }
  successCondition?: { key: string[], value: string | number | boolean }[]
  pollTime?: number
  pollTimeout?: string
}

/**
 * 输入字段类型枚举
 * @enum {string} InputFieldTypeEnum
 * @property {string} boolean - 布尔类型
 * @property {string} string - 字符串类型
 * @property {string} number - 数字类型
 */
export enum InputFieldTypeEnum {
  boolean = 'boolean',
  string = 'string',
  number = 'number'
}

/**
 * 输入节点数据类型
 * @interface IInputNodeData
 * @param schema - 输入数据结构
 */
export interface IInputNodeData {
  schema: IInputNodeDataSchema
}

export interface IInputNodeDataSchema {
  [key: string]: {
    type: InputFieldTypeEnum
    default?: any
    required?: boolean
    description?: string
  }
}

export interface IOutputNodeDataSchema {
  [key: string]: {
    outputType?: OutputType
  }
}

/**
 * 输出节点数据类型
 * @interface IOutputNodeData
 * @param schema - 输出数据
 */
export interface IOutputNodeData {
  schema: IOutputNodeDataSchema
}

/**
 * 输出节点数据类型
 * @interface IUrl2FileNodeData
 * @param output - 输出数据
 */
export interface IUrl2FileNodeData {
  [key: string]: File
}

export type openAIImageNodeType =
  | 'editImage'
  | 'generateImage'
  | 'generateVideo'
  | 'multiViewGenerate3D'
  | 'imageGenerate3D'
  | 'textGenerate3D'

export interface IOpenAIImageNodeData extends INodeDataCondition {
  type: openAIImageNodeType
}

export interface IDrawAppNodeData extends INodeDataCondition {
  options: unknown
}

export interface IAgentNodeData extends INodeDataCondition {
  agentId: string
  model: string
  systemPrompt: string // 系统提示词中含有变量
  userPrompt: string // 用户提示词（变量）
  params: Record<string, unknown>
}

export interface IPreviewNodeData {
  sourceNode: {
    id: string
  }[]
}
export interface IComponentInputData {
  component: string
  params: {
    value: string
    type: FileType
  }
}

// /**
//  * 插件需要继承 IApiPluginNodeData
//  */
// export interface IMarkdown2HtmlData extends IApiPluginNodeData {
//   input: ''
//   output: ''
// }
export interface IApiPluginNodeData extends INodeDataCondition {
  method: 'POST' // 请求方法
  url: string;  // 请求地址
  body: Record<string, unknown> // 请求体
  headers: { [key: string]: string } // 请求头
}


export type INodeDataCondition = Partial<
  INodeDataSuccessCondition & INodeDataFailureCondition
>

export interface INodeDataSuccessCondition {
  successCondition?: { key: string[], value: string | number | boolean }[]
}

export interface INodeDataFailureCondition {
  failureCondition: { key: string[], value: string | number | boolean }[]
}

export type FileType = 'image' | 'video' | 'audio' | '3d' | 'text' | 'file'
export type OutputType = 'image' | 'video' | 'text' | 'audio' | '3d'


export interface GeneralOutput {
  /**
   * The generated output type, defaults to `image`,support `image` and `video` etc.
   */
  type?: FileType;
  /**
   * The base64-encoded JSON of the generated image. Default value for `gpt-image-1`,
   * and only present if `response_format` is set to `b64_json` for `dall-e-2` and
   * `dall-e-3`.
   */
  b64_json?: string;

  /**
   * For `dall-e-3` only, the revised prompt that was used to generate the image.
   */
  revised_prompt?: string;

  /**
   * When using `dall-e-2` or `dall-e-3`, the URL of the generated image if
   * `response_format` is set to `url` (default value). Unsupported for
   * `gpt-image-1`.
   */
  url?: string;
  /**
   * The generated content.
   */
  content?: string;
  /**
   * The role of the generated content.
   */
  role?: string;

  /** buffer  */
  buffer?: Buffer;
}

export interface IExecutionNodeStatusItem {
  status: 'started' | 'process' | 'success' | 'failed'
  result: unknown
  message?: string
}

/**
 * 节点输出类型
 */
export interface NodeOutput {
  output_content: GeneralOutput[]
}

