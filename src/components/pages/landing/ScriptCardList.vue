
<template>
	<div class="container mx-auto px-4 mt-12 flex flex-col gap-6">
		<div v-if="ScriptList.length">
			<LazyPagesLandingScriptCard v-for="script in ScriptList" :key="script.name" :script="script" />
		</div>
		<div v-else class="w-full flex flex-col gap-5">
			<LazySkeletonLoader v-for="n in 3" :key="n" height="150px" radius="4px" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { useScriptList } from '@/composables/scriptCentral/index'

const { fetchScripts, loading, ScriptList } = useScriptList()

</script>

<style scoped>

</style>
