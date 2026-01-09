<script setup lang="ts">
import { inject, ref, computed } from 'vue';

// --- 1. 手动定义常量 (替代 import) ---
const GlobalInjectKeyConst = { AllMaterials: "allMaterials" };

// --- 2. 手动定义类型 (替代 import) ---
interface IImageSource {
  _id: string;
  url: string;
  tags: string[];
}

// 定义注入对象的结构
interface GlobalInjectMaterials {
  materials: any; // 为了不报错，这里简化为 any
}

// --- 3. 注入数据 ---
const { materials: materialList } =
  inject<GlobalInjectMaterials>(GlobalInjectKeyConst.AllMaterials, {
    materials: ref<IImageSource[]>([]),
  }) || {};

const emit = defineEmits(["update-image"]);
const pageSize = defineModel<number>({ default: 10 });

const showRecommendedImage = computed(() => {
  return materialList.value?.length > 0;
});

// 当前显示的列表
const visibleMaterials = ref<IImageSource[]>([]);

// 是否显示刷新按钮
const showRefreshButton = computed(() => {
  return materialList.value?.length > pageSize.value;
});

// 初始化
const initVisibleMaterials = () => {
  if (!materialList.value?.length) return;
  visibleMaterials.value = getRandomMaterials(
    materialList.value,
    pageSize.value,
  );
};

// 随机取图逻辑
const getRandomMaterials = (
  list: IImageSource[],
  count: number,
): IImageSource[] => {
  if (!list.length) return [];
  // 简单随机逻辑
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// 刷新
const refresh = () => {
  initVisibleMaterials();
};

// 监听数据变化
import { watch } from 'vue';
watch(
  () => materialList.value,
  () => {
    initVisibleMaterials();
  },
  { immediate: true, deep: true }
);

// 鼠标悬停逻辑 (保留原版交互)
const visibleMap = ref<Record<string, boolean>>({});
let timer: any = null;
const startDelay = (id: string) => {
  timer = setTimeout(() => {
    visibleMap.value[id] = true;
  }, 500);
};
const cancelDelay = (id: string) => {
  clearTimeout(timer);
  visibleMap.value[id] = false;
};
const handleSetImage = (url: string) => {
  emit("update-image", url);
};
</script>

<template>
  <div v-if="showRecommendedImage">
    <div class="text-xs text-gray-500 mb-1">推荐:</div>
    <div
      class="grid gap-2"
      :style="`grid-template-columns: repeat(${pageSize}, minmax(0, 1fr))`"
    >
      <div
        v-for="material in visibleMaterials"
        :key="material._id"
        class="cursor-pointer"
        @click="handleSetImage(material.url)"
      >
        <div
          class="inline-block w-full"
          @mouseenter="startDelay(material._id)"
          @mouseleave="cancelDelay(material._id)"
        >
           <img
              :src="material.url"
              alt="img"
              class="object-cover w-full rounded aspect-[1/1] hover:opacity-80 transition-opacity"
              :title="'点击使用'"
            />
        </div>
      </div>
    </div>
    
    <div
      v-if="showRefreshButton"
      class="cursor-pointer text-sm flex-shrink-0 mt-2 text-blue-500 flex items-center justify-end"
      @click="refresh"
    >
       <span>换一批 ↻</span>
    </div>
  </div>
</template>