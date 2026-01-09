<template>
  <div class="toggle-upload-wrapper p-4 bg-white rounded-md border border-gray-100 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
           <svg width="18" height="18" viewBox="0 0 48 48" fill="none"><path d="M11 20V12C11 10.3431 12.3431 9 14 9H34C35.6569 9 37 10.3431 37 12V20M11 20V36C11 37.6569 12.3431 39 14 39H34C35.6569 39 37 37.6569 37 36V20M11 20H37" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 29V15" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 21L24 15L18 21" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <span class="text-sm font-bold text-gray-700">启用图片参考</span>
      </div>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="isEnabled" class="sr-only peer">
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>

    <div v-if="isEnabled" class="mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
      <OriginalImageUpload 
        :value="currentImage" 
        @update:value="handleImageUpdate" 
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import OriginalImageUpload from './index.vue'; 

const isEnabled = ref(false);
const currentImage = ref("");
const emit = defineEmits(['update:value']);
const props = defineProps<{ value?: string }>();

watch(isEnabled, (newVal) => {
  if (!newVal) {
    currentImage.value = "";
    emit('update:value', ""); 
  }
});

const handleImageUpdate = (val: string) => {
  currentImage.value = val;
  if (isEnabled.value) {
    emit('update:value', val);
  }
};
</script>

<style scoped>
.animate-in { animation: fadeIn 0.3s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
</style>