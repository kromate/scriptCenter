
<template>
	<nuxt-link :to="`/editor/?type=${script.type}&id=${script.id}`" class="w-full border-2 mx-auto p-4 rounded flex flex-col gap-4 ">
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
			<span v-else>No description has been set for this script yet. send a DM on twitter if you would link to contribute <a href="https://twitter.com/kromate_24" target="_blank" rel="noopener noreferrer">@kromate_24</a> </span>
		</p>

		<div class="flex items-center gap-2 flex-wrap">
			<LazyBadge v-for="n in 5" :key="n" name="script Runner" />
		</div>

		<span class="text-slate-500 text-sm mt-1 font-semibold">{{ script.type }}</span>
	</nuxt-link>
</template>

<script setup lang="ts">
import { scriptListType } from '@/composables/fileReader'

defineProps<{
	script:scriptListType,
}>()
</script>

<style scoped>

</style>
