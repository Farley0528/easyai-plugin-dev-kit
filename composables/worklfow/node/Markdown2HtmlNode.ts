import { NodeCategoryEnum, PluginBaseNode } from "./PluginBaseNode";
import {
  Markdown2Html
} from '#components'

import { NodeTypeEnum } from "~/composables/worklfow/node/node.interface";

export default class Markdown2HtmlNode extends PluginBaseNode {
  static override nodeType = NodeTypeEnum.Markdown2Html // 节点类型

  static override getNodeList() {
    return [
      {
        type: Markdown2HtmlNode.nodeType, // 节点类型
        label: 'Markdown转HTML',          // 标签
        description: 'Markdown转HTML',    // 描述
        category: NodeCategoryEnum.BASE,  // 分类
        icon: 'material-symbols-light:markdown-paste' // 图标
      }
    ]
  }

  initData() {
    // 数据类型 IApiPluginNodeData
    return {
      method: 'POST', // 请求方法
      url: 'http://localhost:3200/plugins/api/markdown2html', // 请求地址，节点的业务逻辑，需要在接口中完成
      body: {
        markdown: '' // 接口请求体内容，输入的markdown内容
      },
      headers: {
        'Content-Type': 'application/json'
        // 依据接口自行扩展，认证等信息
      }
    } // 初始化数据
  }

  /**
   * 输入信息关联父节点产出的数据类型及数据路径
   */
  override createOutputSpec(): INodeOutputSpec {
    return {
      type: 'text', // 文本类型
      defaultPath: ['output_content', '*', 'content'] // 数据路径，文本为 ['output_content', '*', 'content']，媒体类型为 ['output_content', '*', 'url']
    }
  }

  // 画布节点 UI
  static override renderNode() {
    return Markdown2Html // 节点组件
  }
}
