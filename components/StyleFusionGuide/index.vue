<script setup lang="ts">
const steps = [
  { label: '原图', image: 'https://cos.51easyai.com/2025-08-30/663e19cd4fa9d8078385c7c9/upload/20250830145049956-original.png' },
  { label: '参考图', image: 'https://cos.51easyai.com/2025-08-30/663e19cd4fa9d8078385c7c9/upload/20250830145102503-reference.png' },
  { label: '生成结果', image: 'https://cos.51easyai.com/2025-08-30/663e19cd4fa9d8078385c7c9/upload/20250830145112076-result.png' }
]
</script>

<template>
  <div>
    <div class="h-full flex flex-col gap-3 justify-center items-center">
      <div class="text-xl font-bold">
        款式融合
      </div>
      <div class="text-sm font-light">
        将原图与参照图,在设计风格上进行自由融合,生成全新款式图
      </div>
      <!-- 第一行：文本 -->
      <div class="flex items-center gap-2">
        <template
          v-for="(step, index) in steps"
          :key="index"
        >
          <div class="text-sm">
            {{ step.label }}
          </div>
          <icon
            v-if="index < steps.length - 1"
            name="material-symbols-light:keyboard-double-arrow-right-rounded"
            class="text-xl"
          />
        </template>
      </div>

      <!-- 第二行：图片 -->
      <div class="flex items-center gap-2">
        <template
          v-for="(step, index) in steps"
          :key="index"
        >
          <img
            :src="step.image"
            alt=""
            class="w-24 h-24 object-cover rounded-lg"
          >
          <icon
            v-if="index < steps.length - 1"
            name="material-symbols-light:keyboard-double-arrow-right-rounded"
            class="text-xl"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
