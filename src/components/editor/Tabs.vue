<template>
	<div
		class="border-b border-gray-200 dark:border-gray-700 text-sm flex justify-start dark:bg-gray-900 h-10 overflow-x-auto max-w-[100vw]"
	>
		<a
			v-for="item in tabArray"
			:key="item.value"
			:class="selectedTab.fileName === item.fileName ? 'tab-item-active' : 'tab-item'"
			href="#"
			@click.prevent="selectContentTabObject(item)"
		>
			{{ item.fileName }}
		</a>
	</div>
</template>

<script setup lang="ts">
import { tabArray, selectedTab, selectContentTabObject } from '@/composables/editor'

</script>

<style>
.tab-item {
  @apply inline-block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400;
}

.tab-item-active {
  @apply inline-block px-4 py-2 border-t-2 border-indigo-500 text-indigo-500 font-semibold;
}
</style>
