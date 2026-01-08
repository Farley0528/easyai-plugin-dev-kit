<script setup lang="ts">
import { GlobalInjectKeyConst, type GlobalInjectWorkflowAppStatus } from '~/types'
import AppCard from "~/components/AllApps/AppCard.vue";

const { workflows: apps } = inject<GlobalInjectWorkflowAppStatus>(GlobalInjectKeyConst.AllWorkFlowApps, {})

const fitter = ref<string>('全部')

const tags = computed(() => {
  const tags = [] as {
    text: string
    count: number
  }[]
  for (const workflow of apps.value) {
    if (!workflow.tags) continue
    for (const tag of workflow.tags) {
      const tagItem = tags.find(t => t.text === tag)
      if (tagItem) {
        tagItem.count++
      } else {
        tags.push({ text: tag, count: 1 })
      }
    }
  }
  // 按照出现次数降序排列
  return ["全部"].concat(
    tags
      .filter(v => v.text)
      .sort((a, b) => b.count - a.count)
      .map(item => item.text)
  )
})

/** 过滤后的应用列表 */
const showApps = computed(() => {
  if (fitter.value === '全部') {
    return apps.value
  }
  return apps.value.filter(item => item.tags?.includes(fitter.value))
})

</script>

<template>
  <div>
    <div class="px-2 flex flex-col gap-2">
      <div class="text-lg font-bold py-2">
        <span>应用中心</span>
      </div>
      <div>
        <!-- 标签选择 -->
        <div class="mb-2 flex flex-nowrap overflow-x-auto gap-2 scrollbar-hide">
          <a-checkable-tag
            v-for="tag in tags"
            :key="tag"
            :checked="fitter === tag"
            @change="() => fitter = tag"
            class="px-3 py-1.5 text-sm whitespace-nowrap cursor-pointer"
          >
            {{ tag }}
          </a-checkable-tag>
        </div>

        <!-- 应用展示 -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 3xl:grid-cols-8 gap-3">
          <div
            v-for="item in showApps"
            :key="item.id"
            class="w-full"
          >
            <AppCard
              :data="item"
              src-label="cover"
              avatar-label="avatar_url"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE & Edge */
  scrollbar-width: none;     /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

</style>
