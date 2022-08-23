
<template>
	<div class="container mx-auto px-4 mt-12 flex flex-col gap-6">
		<LazyPagesLandingScriptCard v-for="script in scriptFiles" :key="script.name" :script="script" />
	</div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { useScriptList } from '@/composables/scriptCentral/index'

const { fetchScripts, loading } = useScriptList()

</script>

<style scoped>

</style>
