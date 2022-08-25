<template>
	<div>
		<Nav />
		<Main />
	</div>
	<PageLoading v-if="loading" />
</template>

<script setup lang="ts">
import Nav from '@/components/editor/Nav.vue'
import Main from '@/components/editor/Main.vue'
import { useEditor } from '@/composables/editor/index'
const id = useRoute().query.id
const type = useRoute().query.type
const { fetchScriptDocument, loading } = useEditor()
fetchScriptDocument(type, id)
</script>

<style>
body {
  --nav-height: 4.2rem;
}
</style>
