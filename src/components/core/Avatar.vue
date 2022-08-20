<template>
	<span
		class="rounded-full border border-black relative"
		style="border-width: 2px;"
	>
		<span
			v-if="name"
			:style="`width: ${size}px; height: ${size}px; object-fit: cover;`"
			class="flex items-center justify-center uppercase  bg-secondary text-black font-medium rounded-full"
		>
			<span :style="`font-size: ${size/2}px;line-height: 1em`">{{ name[0] }}</span>
		</span>
		<img
			v-else
			:src="src"
			:style="`width: ${size}px; height: ${size}px; object-fit: cover;`"
			alt=""
			class="!max-w-[1920px] rounded-full"
		>
	</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AvatarComp',
	props: {
		src: {
			type: Object,
			default: null,
			validator: (p: any) => p === null || p === undefined || typeof p.link === 'string' || typeof p.url === 'string'
		},
		name: {
			type: String,
			required: false,
			default: ''
		},
		size: {
			required: false,
			type: Number,
			default: 44
		},
		editable: {
			type: Boolean,
			required: false,
			default: false
		}
	}

})
</script>
