<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    maxSizeMB?: number;
  }>(),
  { maxSizeMB: 5 },
);

const image = defineModel<string>();

const updateImage = (file: File) => {
  image.value = URL.createObjectURL(file);
};

const { open, handleDrop, handlePaste } = useUploadImage(
  updateImage,
  props.maxSizeMB,
);

onMounted(() => {
  window.addEventListener("paste", handlePaste);
});

onBeforeUnmount(() => {
  window.removeEventListener("paste", handlePaste);
});
</script>

<template>
  <div
    class="aspect-[5/2] flex justify-center items-center cursor-pointer"
    @click="open"
  >
    <div
      class="flex flex-col gap-2 justify-center items-center rounded-lg"
      @dragover.prevent
      @drop.prevent="handleDrop"
    >
      <slot name="description" :max-size-m-b="maxSizeMB">
        <icon name="mdi:image-plus-outline" size="24" />
        <p class="text-md">点击/拖拽/粘贴</p>
        <p class="text-xs text-gray-500">
          请上传图片文件，文件大小不超过{{ maxSizeMB }}MB
        </p>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
