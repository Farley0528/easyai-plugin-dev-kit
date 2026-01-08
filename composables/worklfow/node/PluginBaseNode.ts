import { type INodeData, type INodeOutputSpec, NodeTypeEnum } from "~/composables/worklfow/node/node.interface";

export interface NodeOptions {
  id?: string
  title: string
}

export const NodeCategoryEnum = {
  BASE: '基础',
  FUNCTIONAL: '功能',
  APP: '应用',
  Agent: '智能体'
} as const

export type NodeCategoryEnum =
    (typeof NodeCategoryEnum)[keyof typeof NodeCategoryEnum]

export interface NodeViewData {
  type: NodeTypeEnum
  label: string
  description?: string
  category: NodeCategoryEnum
  id?: string // appId / agentId // component
  previewUrl?: string
  icon?: string
}

export abstract class PluginBaseNode {
  id?: string
  title: string
  data: Record<string, unknown>

  static nodeType = ''
  static getNodeList(): NodeViewData[] {
    return []
  }

  constructor(options: NodeOptions) {
    this.id = options.id
    this.title = options.title
    this.data = this.initData(options)
  }

  /** 初始化节点数据 */
  abstract initData(options?: NodeOptions): Record<string, unknown>

  create(title: string, id?: string): INodeData {
    return {
      class_type: this.getNodeType() as NodeTypeEnum,
      plugin_type: NodeTypeEnum.ApiPlugin, // 远程插件节点必填项
      _meta: {
        title
      },
      inputs: {},
      data: this.data,
      outputSpec: this.createOutputSpec(id)
    }
  }

  /** 节点类型 */
  getNodeType() {
    return (this.constructor as typeof PluginBaseNode).nodeType
  }

  /** 输出规格（可选） */
  createOutputSpec(_id?: string): undefined | INodeOutputSpec {
    return undefined
  }

  /** 节点本体 UI */
  static renderNode(): Component {
    throw new Error('Not implemented')
  }

  /** 节点属性面板 UI（可选） */
  static renderProperties(): Component {
    return {}
  }
}
