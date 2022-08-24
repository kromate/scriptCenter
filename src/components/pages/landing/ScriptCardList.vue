
<template>
	<div class="container mx-auto px-4 mt-12 flex flex-col gap-6 mb-6">
		<div v-if="!loading && scriptList.length" class="w-full flex flex-col gap-5 md:px-8">
			<select>
				<option value="JavaScript">
					Javascript
				</option>
			</select>
			<LazyPagesLandingScriptCard v-for="script in scriptList" :key="script.name" :script="script" />
		</div>
		<div v-if="loading" class="w-full flex flex-col gap-5 md:px-8">
			<LazySkeletonLoader v-for="n in 3" :key="n" height="150px" radius="4px" />
		</div>
		<div v-if="!loading && !scriptList.length" class="w-full flex flex-col gap-5 md:px-8">
			<p>	Something went wrong</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useScriptList } from '@/composables/scriptCentral/index'
const { fetchScripts, loading, scriptList } = useScriptList()
onMounted(async() => {
	await fetchScripts()
})

</script>

<style scoped>

</style>
