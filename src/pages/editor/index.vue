<template>
	<div>
		<Nav />
		<Main />
	</div>
</template>

<script setup lang="ts">
import Nav from '@/components/editor/Nav.vue'
import Main from '@/components/editor/Main.vue'
const id = useRoute().query.id
const type = useRoute().query.type

</script>

<style>
body {
  --nav-height: 4.2rem;
}
</style>
