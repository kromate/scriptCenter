<template>
	<div class="w-full border-2 mx-auto p-4 rounded flex flex-col gap-4">
		<div class="flex justify-between items-center">
			<span class="flex items-center gap-3">
				<LazyAvatar name="SC" :size="25" />
				<span class="text-lg font-medium">Title</span>
			</span>

			<div class="flex items-center">
				<button class="btn" disabled>
					Report
				</button>
			</div>
		</div>

		<p class="desc text-base font-light">
			This is a utility library for Python Projects to Create Readme, fast and easier than ever!
		</p>

		<div class="flex items-center gap-2 flex-wrap">
			<LazyBadge v-for="n in 5" :key="n" name="script Runner" />
		</div>

		<span class="text-slate-500 text-sm mt-1 font-semibold">Javascript</span>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
