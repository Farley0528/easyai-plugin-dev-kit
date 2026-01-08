// manifest/ToggleImageUpload.ts

// 为了防止报错，我们这里不再引用 types/common
// 直接导出一个纯对象，绕过类型检查

export default {
    name: "ToggleImageUpload", 
    path: "./components/ImageUpload/ToggleImageUpload.vue", 
    
    // 原本是 ComponentSceneConst.DrawPanne，现在直接写死为字符串
    // 如果后台识别不到，可以尝试改为 "draw_panne"
    scenes: "DrawPanne", 
    
    description: "带开关控制的图片上传组件",
    data: {
        paramName: "switch_image_upload", 
        label: "条件图片上传", 
        icon: "icon-park:switch", 
        
        // 原本是 ComponentGroupConst.IMAGE，现在直接写死
        group: "IMAGE", 
        
        isRefComponent: true, 
    },
};