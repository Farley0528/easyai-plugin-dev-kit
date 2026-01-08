<script setup lang="ts">
import type { IExecutionNodeStatusItem } from "~/composables/worklfow/node/node.interface";

const data = defineModel<INodeData<NodeTypeEnum.Markdown2Html>>("data",{default: {}});

const props = defineProps<{
  nodeResult: IExecutionNodeStatusItem
}>(); // 节点执行产出结果

/**
 * 文本内容
 */
const textContent = computed(() => {
  return props.nodeResult?.result?.output_content?.filter(
    item => item.type === "text"
  );
});

const initInputs = () => {
  if(!data.value?.inputs){
    Object.assign(data.value, { inputs:{ markdown: "" }});
  }
};

initInputs();
</script>

<template>
  <div>
    <div
      class="w-full p-2 min-w-96"
      @keydown.stop
    >
      <div>
        <!--    需要输入的变量 -->
        <a-form
          layout="vertical"
          :model="data.data.body"
        >
          <div class="relative">
            <a-form-item
              label="markdown内容"
              name="markdown"
              :rules="[{ required: true, message: `请输入内容` }]"
            >
              <a-input
                v-model:value="data.data.body.markdown"
                placeholder='请输入markdown'
                class="border"
              />
            </a-form-item>
            <div
              v-if="data.inputs.markdown"
              class="absolute inset-0 z-10 flex items-center justify-center bg-gray-500/40 rounded"
            >
              <div
                class="bg-gray-500/60 text-white text-xs rounded px-2 py-0.5 shadow"
              >
                已关联节点 #{{ data.inputs.markdown[0] }}
              </div>
            </div>
          </div>
        </a-form>
      </div>
      <div v-show="textContent?.length">
        <a-form layout="vertical">
          <a-form-item label="转换结果">
            <a-textarea v-for="(output, index) in textContent || []" :value="output.content" readonly class="border"/>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
