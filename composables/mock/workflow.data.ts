export const MorkWorkflows = [
  {
    "cover": "https://oss.gptpro.ink/temps/image/1725411766663.png",
    "user": {
      "username": "admin",
      "avatar_url": "https://easyai-1253343986.cos.ap-shanghai.myqcloud.com/2025-07-16/663e19cd4fa9d8078385c7c9/upload/20250716100223104-0iCtX1-ComfyUI_00388_.png",
      "_id": "663e19cd4fa9d8078385c7c9",
      "nickname": "ke ai de guan li"
    },
    "title": "Flux",
    "description": "目前最强的开源模型！",
    "_id": "66dee72fa17822e69b17e0b7",
    "tags": [
      "flux"
    ],
    "name": "flux",
    "type": "common",
    "params": [
      {
        "title": "产出节点(必须）",
        "name": "output",
        "type": [
          "26|SaveImage",
          "filename_prefix"
        ],
        "param": "",
        "outputType": "image",
        "timeout": 60,
        "componentName": ""
      },
      {
        "title": "提示词（支持中文）",
        "name": "positive",
        "type": [
          "27|ZFTextTranslation",
          "text"
        ],
        "param": "cute anime girl with massive fluffy fennec ears and a big fluffy tail blonde messy long hair blue eyes wearing a maid outfit with a long black dress with a gold leaf pattern and a white apron eating a slice of an apple pie in the kitchen of an old dark victorian mansion with a bright window and very expensive stuff everywhere",
        "attributes": {
          "enableLLM": true,
          "presetPrompt": "你是一名知名的设计师，当用户给你一个场景，你不能简单翻译，而是需要根据用户的场景，设一个该场景的物品摆设，用英语直接输出，不需要任何其他修饰和说明"
        },
        "mcp_description": "用户具体的生成图片的要求",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": true,
        "mcp_default": "",
        "componentName": "Positive"
      },
      {
        "title": "宽度",
        "name": "width",
        "type": [
          "5|EmptyLatentImage",
          "width"
        ],
        "param": 1024,
        "attributes": {
          "min": 0,
          "max": 10,
          "step": 1
        },
        "mcp_description": "图像的宽度",
        "mcp_ignore": false,
        "mcp_type": "number",
        "mcp_required": false,
        "mcp_default": "1024",
        "componentName": "Width"
      },
      {
        "title": "高度",
        "name": "height",
        "type": [
          "5|EmptyLatentImage",
          "height"
        ],
        "param": 1024,
        "attributes": {
          "min": 0,
          "max": 10,
          "step": 1
        },
        "mcp_description": "图像高度",
        "mcp_ignore": false,
        "mcp_type": "number",
        "mcp_required": false,
        "mcp_default": "1024",
        "componentName": "Height"
      },
      {
        "title": "随机种子",
        "name": "seed",
        "type": [
          "25|RandomNoise",
          "noise_seed"
        ],
        "param": "",
        "attributes": {
          "seedLength": 9
        },
        "mcp_description": "",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": false,
        "mcp_default": "",
        "componentName": "Seed"
      },
      {
        "title": "生图张数",
        "name": "batch_size",
        "type": [
          "5|EmptyLatentImage",
          "batch_size"
        ],
        "param": 1,
        "mcp_description": "生成的图像张数",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": false,
        "mcp_default": "",
        "componentName": "BatchSize"
      }
    ],
    "category": [],
    "appType": "workflow",
    "sortNumber": 1,
    "created_at": 1725884207000,
    "likeCount": 0,
    "isLiked": false,
    "isFavorited": false,
    "favoriteCount": 0,
    "useCount": 137,
    "power": 20
  },
  {
    "cover": "https://oss.gptpro.ink/temps/image/1720445919922.png",
    "user": {
      "username": "admin",
      "avatar_url": "https://easyai-1253343986.cos.ap-shanghai.myqcloud.com/2025-07-16/663e19cd4fa9d8078385c7c9/upload/20250716100223104-0iCtX1-ComfyUI_00388_.png",
      "_id": "663e19cd4fa9d8078385c7c9",
      "nickname": "ke ai de guan li"
    },
    "title": "文生图-Kolors(快手）",
    "description": "SD3瞬间不香了，快手最新开源文生图大模型，",
    "_id": "66dee72fa17822e69b17e0b5",
    "tags": [
      "快手可图",
      "中文最强",
      "局部重绘",
      "图生视频",
      "图生图",
      "AI写真",
      "AI摄影"
    ],
    "name": "Kolors-text2img",
    "type": "common",
    "params": [
      {
        "title": "产出节点(必须）",
        "name": "output",
        "type": [
          "16|SaveImage",
          "filename_prefix"
        ],
        "param": "",
        "outputType": "image",
        "timeout": 60,
        "componentName": ""
      },
      {
        "title": "正向提示词（支持中文）",
        "name": "positive",
        "type": [
          "12|KolorsTextEncode",
          "prompt"
        ],
        "param": "cinematic photograph of an astronaut riding a horse in space",
        "componentName": "Positive"
      },
      {
        "title": "负向提示词",
        "name": "negative",
        "type": [
          "12|KolorsTextEncode",
          "negative_prompt"
        ],
        "param": "",
        "componentName": "Negative"
      },
      {
        "title": "宽度",
        "name": "width",
        "type": [
          "14|KolorsSampler",
          "width"
        ],
        "param": "1024",
        "componentName": "Width"
      },
      {
        "title": "高度",
        "name": "height",
        "type": [
          "14|KolorsSampler",
          "height"
        ],
        "param": "1024",
        "componentName": "Height"
      },
      {
        "title": "随机种子",
        "name": "seed",
        "type": [
          "14|KolorsSampler",
          "seed"
        ],
        "param": "",
        "componentName": "Seed"
      }
    ],
    "category": [],
    "appType": "workflow",
    "sortNumber": 2,
    "created_at": 1725884207000,
    "likeCount": 0,
    "isLiked": false,
    "isFavorited": false,
    "favoriteCount": 0,
    "useCount": 2,
    "power": 50
  },
  {
    "cover": "https://oss.gptpro.ink/temps/image/1725416239203.png",
    "user": {
      "username": "admin",
      "avatar_url": "https://easyai-1253343986.cos.ap-shanghai.myqcloud.com/2025-07-16/663e19cd4fa9d8078385c7c9/upload/20250716100223104-0iCtX1-ComfyUI_00388_.png",
      "_id": "663e19cd4fa9d8078385c7c9",
      "nickname": "ke ai de guan li"
    },
    "title": "AI扩图",
    "description": "AI一键扩图",
    "_id": "66dee72fa17822e69b17e0b9",
    "tags": [
      "AI扩图"
    ],
    "name": "expansion",
    "type": "common",
    "params": [
      {
        "title": "产出节点(必须）",
        "name": "output",
        "type": [
          "249|SaveImage",
          "filename_prefix"
        ],
        "param": "",
        "outputType": "image",
        "timeout": 120,
        "componentName": ""
      },
      {
        "title": "原图",
        "name": "image_path_origin",
        "type": [
          "253|Image Load",
          "image_path"
        ],
        "param": "https://oss.gptpro.ink/temps/image/1725416239203.png",
        "componentName": "ImageUploadAuto"
      },
      {
        "title": "上",
        "name": "custom_number_slider_1",
        "type": [
          "225|ImpactInt",
          "value"
        ],
        "param": 256,
        "attributes": "{\r\n  \"min\": 50,\r\n  \"max\": 1280,\r\n  \"step\": 16\r\n}",
        "componentName": "CustomNumberSlider"
      },
      {
        "title": "下",
        "name": "custom_number_slider_2",
        "type": [
          "227|ImpactInt",
          "value"
        ],
        "param": 256,
        "attributes": "{\r\n  \"min\": 50,\r\n  \"max\": 1280,\r\n  \"step\": 16\r\n}",
        "componentName": "CustomNumberSlider"
      },
      {
        "title": "左",
        "name": "custom_number_slider_3",
        "type": [
          "224|ImpactInt",
          "value"
        ],
        "param": 1280,
        "attributes": "{\r\n  \"min\": 50,\r\n  \"max\": 1280,\r\n  \"step\": 16\r\n}",
        "componentName": "CustomNumberSlider"
      },
      {
        "title": "右",
        "name": "custom_number_slider_4",
        "type": [
          "226|ImpactInt",
          "value"
        ],
        "param": 1280,
        "attributes": "{\r\n  \"min\": 50,\r\n  \"max\": 1280,\r\n  \"step\": 16\r\n}",
        "componentName": "CustomNumberSlider"
      }
    ],
    "category": [],
    "appType": "workflow",
    "sortNumber": 3,
    "created_at": 1725884207000,
    "likeCount": 0,
    "isLiked": false,
    "isFavorited": false,
    "favoriteCount": 0,
    "useCount": 1,
    "power": 50
  },
  {
    "cover": "https://oss.gptpro.ink/temps/image/19659-769977270-woman, flower dress, colorful, darl background,flower armor,green theme,exposure blend, medium shot, bokeh, (hdr.png",
    "user": {
      "username": "admin",
      "avatar_url": "https://easyai-1253343986.cos.ap-shanghai.myqcloud.com/2025-07-16/663e19cd4fa9d8078385c7c9/upload/20250716100223104-0iCtX1-ComfyUI_00388_.png",
      "_id": "663e19cd4fa9d8078385c7c9",
      "nickname": "ke ai de guan li"
    },
    "title": "图生图",
    "_id": "66dee72fa17822e69b17e0a2",
    "tags": [],
    "name": "img2img",
    "type": "system",
    "params": [
      {
        "title": "大模型",
        "name": "ckpt_name",
        "type": [
          "92|Efficient Loader",
          "ckpt_name"
        ],
        "componentName": "ModelSelect"
      },
      {
        "title": "批量任务",
        "name": "image_path_origin",
        "type": [
          "70|Image Load",
          "image_path"
        ],
        "param": "https://wangbo0808.oss-cn-shanghai.aliyuncs.com/aidraw/00004-2024-04-11_Restart.png",
        "componentName": "ImageUploadAuto"
      },
      {
        "title": "重绘幅度",
        "name": "denoise",
        "type": [
          "85|KSampler (Efficient)",
          "denoise"
        ],
        "componentName": "Denoise"
      },
      {
        "title": "产出节点",
        "name": "output",
        "type": [
          "120|SaveImage"
        ],
        "param": "",
        "outputType": "image",
        "componentName": ""
      }
    ],
    "category": [],
    "appType": "workflow",
    "sortNumber": 10,
    "created_at": 1725884207000,
    "likeCount": 0,
    "isLiked": false,
    "isFavorited": false,
    "favoriteCount": 0,
    "useCount": 10,
    "power": 10
  },
  {
    "cover": "https://oss.gptpro.ink/temps/image/1722226025101.png",
    "user": {
      "username": "admin",
      "avatar_url": "https://easyai-1253343986.cos.ap-shanghai.myqcloud.com/2025-07-16/663e19cd4fa9d8078385c7c9/upload/20250716100223104-0iCtX1-ComfyUI_00388_.png",
      "_id": "663e19cd4fa9d8078385c7c9",
      "nickname": "ke ai de guan li"
    },
    "title": "去除背景",
    "_id": "66dee72fa17822e69b17e0b0",
    "tags": [
      "去除背景",
      "极速抠图"
    ],
    "name": "removebg",
    "type": "system",
    "params": [
      {
        "title": "111",
        "name": "width",
        "type": [],
        "param": "",
        "componentName": "Width"
      },
      {
        "title": "产出节点",
        "name": "output",
        "type": [
          "74|SaveImage"
        ],
        "param": "",
        "outputType": "image",
        "timeout": 30,
        "componentName": ""
      },
      {
        "title": "3333",
        "name": "advance_onlineEdit_origin",
        "type": [],
        "param": "",
        "componentName": "MaskEditor"
      }
    ],
    "category": [],
    "appType": "workflow",
    "sortNumber": 20,
    "created_at": 1725884207000,
    "likeCount": 0,
    "isLiked": false,
    "isFavorited": false,
    "favoriteCount": 0,
    "useCount": 3
  },
  {
    "cover": "https://static.51easyai.com/Runninghub-template.jpg",
    "user": {},
    "title": "RunningHub模板应用",
    "description": "GPT4o风格 单图模式",
    "_id": "681c6bc1affa20f8c7ab76cf",
    "tags": [
      "RunningHub",
      "模板应用",
      "图生图"
    ],
    "name": "RunningHub-Template",
    "type": "common",
    "params": [
      {
        "title": "产出节点(必须）",
        "name": "output",
        "type": [
          "2|OUTPUT"
        ],
        "param": "",
        "outputType": "image",
        "timeout": 300,
        "componentName": ""
      },
      {
        "name": "custom_hint",
        "attributes": {
          "hint": "RunningHub生成时间不稳定，如果遇到超时，可以增加超时时间。",
          "href": "/pay/charge"
        },
        "mcp_description": "",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": false,
        "mcp_default": "",
        "componentName": "Hint"
      },
      {
        "name": "image_path",
        "mcp_description": "",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": false,
        "mcp_default": "",
        "type": [
          "1|INPUT",
          "image"
        ],
        "componentName": "ImageUploadAuto",
        "param": "https://static.51easyai.com/Mb4lue-ComfyUI_01060_.png"
      },
      {
        "name": "positive",
        "attributes": {
          "enableLLM": true,
          "enableTranslate": false,
          "presetPrompt": "你是一名知名的设计师，当用户给你一个场景，你不能简单翻译，而是需要根据用户的场景，设一个该场景的物品摆设，用英语直接输出，不需要任何其他修饰和说明"
        },
        "mcp_description": "",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": false,
        "mcp_default": "",
        "type": [
          "1|INPUT",
          "prompt"
        ],
        "param": "转换为吉卜力风格",
        "componentName": "Positive"
      }
    ],
    "category": [],
    "appType": "customWorkflow",
    "sortNumber": 999,
    "created_at": 1746696665761,
    "likeCount": 0,
    "isLiked": false,
    "isFavorited": false,
    "favoriteCount": 0,
    "useCount": 4
  },
  {
    "cover": "https://qnoss.51easyai.com//image/temps/67613b9902cefde1bc4c8cb8/çµå_æ¨¡ç¹æ¢è£-1.jpg",
    "user": {},
    "title": "电商_模特换装自由",
    "description": "让你的服装产品匹配到合适的模特",
    "_id": "6789ad6629ad8e83b45cb28d",
    "tags": [
      "图生图",
      "局部重绘"
    ],
    "name": "flux-fill-redux",
    "type": "common",
    "params": [
      {
        "title": "产出节点(必须）",
        "name": "output",
        "type": [
          "71|SaveImage",
          "filename_prefix"
        ],
        "param": "",
        "outputType": "image",
        "timeout": 120,
        "componentName": ""
      },
      {
        "title": "",
        "name": "advance_onlineEdit_origin",
        "type": [
          "189|Image Load",
          "image_path"
        ],
        "param": "",
        "mcp_description": "被迁移到的对象，比如将A迁移到B上，这个参数表示B的参数，而不是A这很重要",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": true,
        "mcp_default": "",
        "componentName": "MaskEditor"
      },
      {
        "title": "提示上传模特图",
        "name": "custom_hint_2",
        "type": [],
        "param": "",
        "attributes": {
          "hint": "在这个网格图上传你的模特图，点击上面第一个图标"
        },
        "mcp_description": "",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": false,
        "mcp_default": "",
        "componentName": "Hint"
      },
      {
        "name": "image_path",
        "type": [
          "188|Image Load",
          "image_path"
        ],
        "mcp_description": "待迁移的对象，比如将A迁移到B，那这里就表示的是A，而不是B",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": true,
        "mcp_default": "",
        "componentName": "ImageUploadAuto"
      },
      {
        "title": "提示上传服装产品图",
        "name": "custom_hint_1",
        "type": [],
        "param": "",
        "attributes": {
          "hint": "在这里上传你的服装产品白底图↑↑↑"
        },
        "mcp_description": "",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": false,
        "mcp_default": "",
        "componentName": "Hint"
      },
      {
        "title": "随机种子",
        "name": "seed",
        "type": [
          "3|KSampler",
          "seed"
        ],
        "param": 179673955724863,
        "attributes": {
          "seedLength": 9
        },
        "mcp_description": "",
        "mcp_ignore": true,
        "mcp_type": "string",
        "mcp_required": false,
        "mcp_default": "",
        "componentName": "Seed"
      },
      {
        "name": "advance_onlineEdit_mask",
        "mcp_description": "",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": false,
        "mcp_default": "",
        "type": [
          "191|Image Load",
          "image_path"
        ],
        "componentName": "MaskEditor"
      }
    ],
    "category": [
      "Product"
    ],
    "appType": "workflow",
    "sortNumber": 999,
    "created_at": 1744949551417,
    "likeCount": 0,
    "isLiked": false,
    "isFavorited": false,
    "favoriteCount": 0,
    "useCount": 4
  },
  {
    "cover": "https://wangbo0808.oss-cn-shanghai.aliyuncs.com/aidraw/image/temps/00100-2234807540v2.png",
    "user": {
      "username": "admin",
      "avatar_url": "https://easyai-1253343986.cos.ap-shanghai.myqcloud.com/2025-07-16/663e19cd4fa9d8078385c7c9/upload/20250716100223104-0iCtX1-ComfyUI_00388_.png",
      "_id": "663e19cd4fa9d8078385c7c9",
      "nickname": "ke ai de guan li"
    },
    "title": "Flux Inpaiting4",
    "description": "flux重绘工作流",
    "_id": "66fd67a4ec2d1cff74bd9ef9",
    "tags": [
      "局部重绘"
    ],
    "name": "flux-inpaiting",
    "type": "common",
    "params": [
      {
        "title": "产出节点(必须）",
        "name": "output",
        "type": [
          "166|SaveImage",
          "filename_prefix"
        ],
        "param": "",
        "outputType": "image",
        "timeout": 300,
        "componentName": ""
      },
      {
        "title": "画板编辑",
        "name": "advance_onlineEdit_origin",
        "type": [
          "174|Image Load",
          "image_path"
        ],
        "param": "",
        "mcp_description": "需要修改的图",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": true,
        "mcp_default": "",
        "componentName": "MaskEditor"
      },
      {
        "title": "画板",
        "name": "advance_onlineEdit_mask",
        "type": [
          "175|Image Load",
          "image_path"
        ],
        "param": "",
        "mcp_description": "",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": false,
        "mcp_default": "",
        "componentName": "MaskEditor"
      },
      {
        "title": "提示词",
        "name": "positive",
        "type": [
          "165|ZFTextTranslation",
          "text"
        ],
        "param": "棕色头发",
        "attributes": {
          "enableLLM": true,
          "presetPrompt": "你是一名知名的设计师，当用户给你一个场景，你不能简单翻译，而是需要根据用户的场景，设一个该场景的物品摆设，用英语直接输出，不需要任何其他修饰和说明"
        },
        "mcp_description": "具体修改的要求",
        "mcp_ignore": false,
        "mcp_type": "string",
        "mcp_required": true,
        "mcp_default": "",
        "componentName": "Positive"
      }
    ],
    "category": [],
    "appType": "workflow",
    "sortNumber": 999,
    "created_at": 1727883172000,
    "likeCount": 0,
    "isLiked": false,
    "isFavorited": false,
    "favoriteCount": 0,
    "useCount": 13,
    "power": 100
  }
]
