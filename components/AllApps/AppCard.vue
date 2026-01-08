<script setup lang="ts">
interface Props {
  data?: any
  srcLabel?: string
  avatarLabel?: string
  usernameLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  srcLabel: 'src',
  avatarLabel: 'avatar_url',
  usernameLabel: 'username'
})

const isVideo = (src: string) => {
  return typeof src === 'string' && src.includes('.mp4')
}

const default_avatar = 'https://oss.gptpro.ink/temps/image/1720368128128.png'
const default_nickname = ''

const linkUrl = computed(() => `/appshows/${props.data['name']}/${props.data['_id']}`)

const handleAccessUrl = () => {
  if (props.data?.customAccessUrl) {
    navigateTo(props.data?.customAccessUrl, { external: true })
  } else {
    navigateTo(`/draw/${props.data['name']}/${props.data['_id']}`)
  }
}
</script>

<template>
  <div>
    <NuxtLinkLocale :to="linkUrl">
    <div
      hoverable
      class="relative overflow-hidden cursor-pointer group !p-0"
      data-component-id="app-card"
      data-component-name="应用"
    >
      <!-- 视频/图片封面 -->
      <div class="overflow-hidden rounded-lg">
        <video
          v-if="isVideo(data[srcLabel])"
          autoplay
          loop
          muted
          playsinline
          class="w-full object-cover aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
          :src="data[srcLabel]"
          type="video/mp4"
        />
        <img
          v-else
          class="w-full object-cover aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
          :src="data[srcLabel]"
          :alt="data['title']"
        />
      </div>

      <!-- hover 信息层 -->
      <div
        class="absolute bottom-0 left-0 w-full h-2/5 rounded-lg invisible group-hover:visible bg-black/50 backdrop-blur-md overflow-hidden transition-all duration-300 flex flex-col justify-start items-start text-white px-3 py-2"
        data-component-id="app-card-info"
        data-component-name="应用信息"
      >
        <!-- 标题和描述 -->
        <span
          class="font-medium truncate w-full"
          data-component-id="app-card-info-title"
        >
          {{ data["title"] }}
        </span>
        <p
          class="text-xs opacity-80 truncate w-full"
          data-component-id="app-card-info-description"
        >
          {{ data["description"] }}
        </p>

        <!-- 作者信息 -->
        <div class="flex items-center mt-auto w-full">
          <a-avatar
            :src="data['user']?.[avatarLabel] || default_avatar"
            size="small"
            class="mr-2"
          />
          <span class="text-xs opacity-80">
            {{ data["user"]?.["nickname"] || default_nickname }}
          </span>
        </div>

        <!-- 操作按钮 -->
        <div class="w-full flex justify-center mt-2">
          <button
            class="w-4/5 rounded-full px-4 py-0.5 border-gray-300 bg-theme-primary"
            @click.stop.prevent="handleAccessUrl"
          >
            一键使用
          </button>
        </div>
      </div>
    </div>
  </NuxtLinkLocale>
  </div>
</template>
