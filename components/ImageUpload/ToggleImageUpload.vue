<template>
  <div class="p-4 border-2 border-green-500 bg-green-50 rounded-lg">
    <h3 class="text-green-700 font-bold text-lg">✅ 插件连接成功！</h3>
    <p class="text-gray-600 mt-2">如果您看到这个绿色框，说明 Vercel 部署和 EasyAI 配置都通了。</p>
    <div class="mt-4">
      <button 
        class="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
        @click="count++"
      >
        点击测试交互: {{ count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>