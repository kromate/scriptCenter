
<template>
	<div class="container mx-auto px-4 mt-12 flex flex-col gap-6">
		<LazyPagesLandingScriptCard v-for="script in scripts" :key="script.name" :script="script" />
	</div>
</template>

<script setup lang="ts">
import { FolderReader } from '@/composables/fileReader'

const scripts = FolderReader('scriptFiles')

</script>

<style scoped>

</style>
