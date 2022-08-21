
<template>
	<div class="container mx-auto px-4 mt-12 flex flex-col gap-6">
		<LazyPagesLandingScriptCard v-for="script in scripts" :key="script.name" :script="script" />
	</div>
</template>

<script setup lang="ts">
import { FolderReader } from '@/composables/fileReader'

const scripts = FolderReader('scriptFiles')
// const test = import.meta.glob('../../../../scriptFiles/JavaScript/Active_pull_request_commentors/**')

// console.log(test)

console.log()
</script>

<style scoped>

</style>
