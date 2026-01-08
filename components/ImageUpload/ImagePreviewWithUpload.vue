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

const { open } = useUploadImage(updateImage, props.maxSizeMB);
</script>

<template>
  <div class="h-full w-full relative group">
    <img
      class="h-full w-full object-contain image-bg rounded"
      :src="image"
      alt="show image"
    />
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div
        class="flex items-center p-2 px-3 gap-3 invisible group-hover:visible rounded-lg bg-[rgba(var(--v-theme-background),0.4)] backdrop-blur-md cursor-pointer"
      >
        <a-tooltip :title="1">
          <icon name="mage:image-upload" size="18" @click="open" />
        </a-tooltip>
        <a-tooltip :title="2">
          <icon
            name="material-symbols:delete-outline"
            size="18"
            @click.stop="image = undefined"
          />
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-bg {
  @apply backdrop-blur-md bg-gradient-to-r
  from-gray-300 via-gray-50 to-gray-300
  dark:from-gray-600 dark:via-gray-300 dark:to-gray-600;
}
</style>
