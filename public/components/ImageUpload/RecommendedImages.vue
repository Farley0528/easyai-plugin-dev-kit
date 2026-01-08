<script setup lang="ts">
import {
  GlobalInjectKeyConst,
  type GlobalInjectMaterials,
} from "~/types/common";

interface IImageSource {
  _id: string;
  url: string;
  tags: string[];
}

const { materials: materialList } =
  inject<GlobalInjectMaterials>(GlobalInjectKeyConst.AllMaterials, {
    materials: ref<IImageSource>([]),
  }) || {};

const emit = defineEmits(["update-image"]);
const pageSize = defineModel<number>({ default: 10 });

const showRecommendedImage = computed(() => {
  return materialList.value?.length > 0;
});

// 当前显示的列表
const visibleMaterials = ref<IImageSource[]>([]);

// 是否显示刷新按钮：总数大于 pageSize 才需要
const showRefreshButton = computed(() => {
  return materialList.value?.length > pageSize.value;
});

// 初始化：随机抽取pageSize条
const initVisibleMaterials = () => {
  if (!materialList.value?.length) return;
  visibleMaterials.value = getRandomMaterials(
    materialList.value,
    pageSize.value,
  );
};

// 随机取 count 条，如果不够就循环补足
const getRandomMaterials = (
  list: IImageSource[],
  count: number,
): IImageSource[] => {
  if (!list.length) {
    return [];
  }
  const shuffled = [...list].sort(() => Math.random() - 0.5);
  if (shuffled.length >= count) {
    return shuffled.slice(0, count);
  } else {
    // 不够就循环补足
    const times = Math.ceil(count / shuffled.length);
    const extended = Array(times).fill(shuffled).flat();
    return extended.slice(0, count);
  }
};

const isRotating = ref(false);

const refresh = () => {
  if (isRotating.value) return; // 防止多次触发
  isRotating.value = true;

  // 调用原本的刷新逻辑
  visibleMaterials.value = getRandomMaterials(
    materialList.value,
    pageSize.value,
  );

  // 动画持续 0.5s 后移除旋转（保证动画能再次触发）
  setTimeout(() => {
    isRotating.value = false;
  }, 500);
};

const handleSetImage = (url: string) => {
  emit("update-image", url);
};

const visibleMap = reactive<Record<string, boolean>>({});
const hoveringMap = reactive<Record<string, boolean>>({});
const timerMap: Record<string, ReturnType<typeof setTimeout>> = {};

const startDelay = (id: string) => {
  hoveringMap[id] = true;
  if (timerMap[id]) clearTimeout(timerMap[id]);
  timerMap[id] = setTimeout(() => {
    if (hoveringMap[id]) {
      visibleMap[id] = true;
    }
  }, 500);
};

const cancelDelay = (id: string) => {
  hoveringMap[id] = false;
  if (timerMap[id]) clearTimeout(timerMap[id]);
  visibleMap[id] = false;
};

onMounted(async () => {
  initVisibleMaterials();
  watch(pageSize, () => {
    initVisibleMaterials();
  });
});
</script>

<template>
  <div
    v-if="showRecommendedImage"
    class="px-2 py-1 flex flex-row items-center gap-2 rounded"
  >
    <div class="text-sm mb-2 flex-shrink-0">推荐:</div>
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
          class="inline-block"
          @mouseenter="startDelay(material._id)"
          @mouseleave="cancelDelay(material._id)"
          @dragstart="cancelDelay(material._id)"
        >
          <a-popover :open="!!visibleMap[material._id]">
            <img
              :src="material.url"
              alt="img"
              class="object-cover w-full rounded aspect-[1/1]"
            />
            <template #content>
              <img
                :src="material.url"
                alt="img"
                class="w-48 h-auto object-contain border cursor-pointer"
              />
            </template>
          </a-popover>
        </div>
      </div>
    </div>
    <div
      v-if="showRefreshButton"
      class="cursor-pointer text-sm flex-shrink-0"
      @click="refresh"
    >
      <a-popover>
        <icon
          name="hugeicons:exchange-01"
          size="20"
          :class="{ 'animate-spin': isRotating }"
        />
        <template #content>
          <div class="text-xs">刷新</div>
        </template>
      </a-popover>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
