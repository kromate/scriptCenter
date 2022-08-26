
<template>
	<div class="w-full border-2 mx-auto p-4 rounded flex items-start flex-col gap-4 " @click.self="$router.push(`/editor/?type=${script.type}&id=${script.id}`)">
		<div class=" w-full max-w-[90vw] flex flex-wrap justify-between items-center">
			<span class="flex items-center gap-3">
				<LazyAvatar :name="script.name" :size="25" />
				<span class="text-base font-medium w-[250px] truncate">{{ script.name }}</span>
			</span>

			<!-- <div class="flex items-center">
				<button class="btn" disabled>
					Report
				</button>
			</div> -->
		</div>

		<p class="desc text-base font-light">
			<span v-if="script.desc">{{ script.desc }}</span>
			<span v-else>No description has been set for this script yet. send a DM on twitter if you would link to contribute <a class="text-blue-900 underline font-medium z-50" href="https://twitter.com/kromate_24" target="_blank" rel="noopener noreferrer">@kromate_24</a> </span>
		</p>

		<div v-if="script.tags.length" class="flex items-center gap-2 flex-wrap">
			<LazyBadge v-for="n in script.tags" :key="n" name="script Runner" />
		</div>
		<LazyBadge v-else name="No Tags Available" />

		<span class="text-slate-500 text-sm mt-1 font-semibold">{{ script.type }}</span>
	</div>
</template>

<script setup lang="ts">
import { scriptListType } from '@/composables/fileReader'

defineProps<{
	script:scriptListType,
}>()
</script>

<style scoped>

</style>
