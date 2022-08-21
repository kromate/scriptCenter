
<template>
	<div>
		<LayoutNavBar />
		<LazyPagesLandingHeroSection />
		<LazyPagesLandingScriptCardList />
	</div>
</template>

<script setup lang="ts">
import { FolderReader } from '@/composables/fileReader'

console.log(FolderReader('scriptFiles'))
definePageMeta({
	layout: 'default'
})
</script>

<style scoped></style>
