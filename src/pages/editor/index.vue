<template>
	<div>
		<Nav />
		<Main />
	</div>
</template>

<script setup lang="ts">
import Nav from '@/components/editor/Nav.vue'
import Main from '@/components/editor/Main.vue'
console.log('test')
</script>

<style>
body {
  --nav-height: 4.2rem;
}
</style>
