
<template>
	<div>
		<LayoutNavBar />
		<LazyPagesLandingHeroSection />
		<LazyPagesLandingScriptCardList />
	</div>
</template>

<script setup lang="ts">
import { byFolderType } from '@/composables/fileReader'

byFolderType()

definePageMeta({
	layout: 'default'
})
</script>

<style scoped></style>
