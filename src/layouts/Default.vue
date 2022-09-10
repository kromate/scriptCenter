<template>
	<div class="bg">
		<slot />
	</div>
	<ModalBase />
</template>

<script setup lang="ts">
import ModalBase from '@/components/core/modal/ModalBase.vue'
</script>

<style scoped>
.bg{
	background: linear-gradient(115.1deg, #121928 18.38%, #0B162D 98.63%);background: linear-gradient(115.1deg, #121928 18.38%, #0B162D 98.63%);
}
</style>
