
<template>
	<div ref="container" style="height: calc(100% - 2.5rem)" />
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import { useStorage } from '@vueuse/core'
import { StorageName } from '@/composables/utils'
import {
  mountMonacoeditor,
  unmountMonacoeditor
} from '@/composables/editor/main'

const container = ref<HTMLDivElement | null>(null)

onMounted(() => {
  mountMonacoeditor(container)
})

onUnmounted(() => {
  unmountMonacoeditor()
})

</script>
