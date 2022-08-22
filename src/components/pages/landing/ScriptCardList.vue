
<template>
	<div class="container mx-auto px-4 mt-12 flex flex-col gap-6">
		<LazyPagesLandingScriptCard v-for="script in scripts" :key="script.name" :script="script" />
	</div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { FolderReader } from '@/composables/fileReader'
import { uploadScript } from '@/composables/uploader'
const scripts = FolderReader('scriptFiles')

uploadScript()

</script>

<style scoped>

</style>
