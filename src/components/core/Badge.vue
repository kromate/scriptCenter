<template>
	<span
		v-if="name"
		:style="`color: ${selectPalette.color} ; background-color: ${selectPalette.bg};`"
		class="py-1.5 px-3 font-medium lg:text-sm text-xs rounded-3xl"
	>
		<slot :name="name">{{ toLowerCase(name) }}</slot>
	</span>
</template>

<script setup lang='ts'>

const toLowerCase = (val) => {
	return val.toLowerCase()
}

const props = defineProps<{
  name?: 'pending' | 'success' | 'failed' | 'default'
  secondary?: boolean
}>()

const selectPalette = ref<{color:string, bg:string}>()

const palette = {
	success: { color: '#15803D', bg: '#DCFCE7' },
	failed: { color: '#D12E2E', bg: '#FAEAEA' },
	pending: { color: '#E2C044', bg: '#FAF5E1' },
	default: { color: '#0145FF', bg: '#0145ff57' }
}

		switch (toLowerCase(props.name)) {
			case 'pending':
				selectPalette.value = palette.pending
				break
			case 'success':
					selectPalette.value = palette.success
				break
			case 'failed':
					selectPalette.value = palette.failed
				break
			default :
					selectPalette.value = palette.default
		}

</script>
