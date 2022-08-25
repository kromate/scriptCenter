
<template>
	<div ref="container" style="height: calc(100% - 2.5rem)" />
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import { useStorage } from '@vueuse/core'
import { initialEditorValue, StorageName } from '@/composables/utils'
import {
  mountConvertedEditor,
  unmountConvertedEditor
} from '@/composables/editor/main'

const container = ref<HTMLDivElement | null>(null)

const editorValue = useStorage<Record<string, any>>(
  StorageName.EDITOR_VALUE,
  initialEditorValue
)

const emit =
  defineEmits<(e: 'change', payload: typeof editorValue.value) => void>()

onMounted(() => {
  mountConvertedEditor(container, emit)
  // emit("change", editorValue.value);
})

onUnmounted(() => {
  unmountConvertedEditor()
})

</script>
