
<template>
	<div class="container mx-auto px-4 mt-12 flex flex-col gap-6">
		<LazyPagesLandingScriptCard v-for="n in 10" :key="n" />
	</div>
</template>

<script setup lang="ts">
const test = import.meta.glob('../../../../scriptFiles/JavaScript/Active_pull_request_commentors/readme.md')

const logFileText = async (file) => {
    const response = await fetch(file)
    const text = await response.text()
    console.log(text)
}

logFileText('../../../../scriptFiles/JavaScript/Active_pull_request_commentors/script.js')
</script>

<style scoped>

</style>
