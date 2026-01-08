<!--应用插件开发示例-->
<script setup lang="ts">
import {GlobalInjectKeyConst, type GlobalInjectUploadFileToOSS} from "~/types";
import ImagePreviewWithUpload from "./ImagePreviewWithUpload.vue";
import RecommendedImages from "./RecommendedImages.vue";

interface Props {
  title?: string; // 标题，显示在上传按钮上方
  paramName?: string;
  params?: { name: string; param?: string }[];
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  paramName: "upload_image_path",
});

const { useUtilsUploadFileToOSS } = inject<GlobalInjectUploadFileToOSS>(
  GlobalInjectKeyConst.UploadFileToOSS,
  {
    useUtilsUploadFileToOSS: async (file: File | Blob, filename?: string) => "",
  },
);

const image = ref<string | undefined>();

const handleSetImage = (url: string) => {
  image.value = url;
};
const pageSize = ref<number>(8);

const handleUploadImg = async (image?: string) => {
  if (!image) return;
  if (image.startsWith("http")) {
    return image;
  }

  const blob = await ImageUrlToBlob(image);

  const fileName = `upload_image_${new Date().getTime()}.png`;
  return await useUtilsUploadFileToOSS(blob, fileName);
};

const handleBindParams = async () => {
  return {
    [props.paramName]: await handleUploadImg(image.value),
  };
};

defineExpose({
  handleBindParams,
});
</script>

<template>
  <div>
    <div class="max-w-[460px] mt-1">
      <div class="flex items-center py-1">
        <icon name="icon-park:upload-picture" size="20" class="mr-1 text-blue-500 dark:text-white" />
        {{ title || "图片上传" }}
      </div>
      <div class="flex flex-col items-center border rounded">
        <!--    图片上传、预览区域 -->
        <div class="h-48 w-full flex justify-center">
          <!--    显示选中图片 -->
          <div v-if="image" class="p-2 w-full">
            <ImagePreviewWithUpload v-model="image" />
          </div>

          <!--    图片上传 -->
          <ImageUploadDropPasteClick v-else v-model="image" />
        </div>
        <div>
          <RecommendedImages
            v-model="pageSize"
            @update-image="handleSetImage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
