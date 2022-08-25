<template>
	<main class="border-t border-gray-200 dark:border-gray-700">
		<div class="flex flex-row h-full">
			<div id="split-0" class="w-full">
				<Tabs v-model="currentTab" :items="items" />
				<MonacoEditor :active-tab="currentTab" />
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import Split from 'split.js'

import MonacoEditor from './MonacoEditor.vue'
import Tabs from './Tabs.vue'
import { StorageName, useDarkGlobal } from '@/composables/utils'

const iframe = ref<HTMLIFrameElement>()

const items = ref([
  { text: 'HTML', value: 'html' },
  { text: 'CSS', value: 'css' },
  { text: 'JS', value: 'javascript' }
])

const currentTab = useStorage(StorageName.ACTIVE_TAB, items.value[0].value)

const isDark = useDarkGlobal()

watch(isDark, (value) => {
  iframe.value?.contentWindow?.postMessage(
    `theme-${value ? 'dark' : 'light'}`,
    '*'
  )
})

</script>

<style>
main {
  height: calc(100vh - var(--nav-height));
}

</style>
