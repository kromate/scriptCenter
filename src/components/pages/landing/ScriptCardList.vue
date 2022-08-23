
<template>
	<div class="container mx-auto px-4 mt-12 flex flex-col gap-6">
		<LazyPagesLandingScriptCard v-for="script in scripts" :key="script.name" :script="script" />
	</div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { FolderReader, byFolderType } from '@/composables/fileReader'
import { uploadScript, uploadScriptList } from '@/composables/uploader'

const scriptFiles = useStorage('scriptFiles', [])
const sc = await byFolderType()
</script>

<style scoped>

</style>
