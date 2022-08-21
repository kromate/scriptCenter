
<template>
	<div class="container mx-auto px-4 mt-12 flex flex-col gap-6">
		<LazyPagesLandingScriptCard v-for="n in 10" :key="n" />
	</div>
</template>

<script setup lang="ts">
const test = import.meta.glob('../../../../scriptFiles/JavaScript/Active_pull_request_commentors/readme.md')

</script>

<style scoped>

</style>
