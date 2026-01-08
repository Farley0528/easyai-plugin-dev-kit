<template>
  <div class="remote-ui" style="padding: 20px;">
    <h1>组件调试预览</h1>
    <hr style="margin: 20px 0;">
    
    <ToggleImageUpload />
    
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue';
import { GlobalInjectKeyConst } from "~/types/common";

// ========================================================
// 修复核心：手动把组件引进来，确保一定能找到
// ========================================================
import ToggleImageUpload from "~/components/ImageUpload/ToggleImageUpload.vue";


// --- 下面是 Mock 数据，保持不变 ---
provide(GlobalInjectKeyConst.AllMaterials, {
  materials: ref([]),
  refreshMaterials: async () => {},
});

provide(GlobalInjectKeyConst.UploadFileToOSS, {
  useUtilsUploadFileToOSS: async (file: File | Blob) => {
    console.log("模拟上传中...", file);
    return "https://mock-url.com/fake.jpg"; 
  }
});
</script>