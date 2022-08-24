
<template>
	<div class="container mx-auto px-4 mt-12 flex flex-col gap-6 mb-6">
		<div v-if="!loading && scriptList.length" class="w-full flex flex-col gap-5 md:px-8">
			<select v-model="selected" class="border-2 border-gray-900 px-2 py-2 rounded">
				<option v-for="n in selectTypes" :key="n" :value="n">
					{{ n }}
				</option>
			</select>
			<LazyPagesLandingScriptCard v-for="script in scriptList" :key="script.name" :script="script" />
		</div>
		<div v-if="loading" class="w-full flex flex-col gap-5 md:px-8">
			<LazySkeletonLoader v-for="n in 3" :key="n" height="150px" radius="4px" />
		</div>
		<div v-if="!loading && !scriptList.length" class="w-full flex flex-col gap-5 md:px-8">
			<p>	Something went wrong</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useScriptList, selectTypes, selected } from '@/composables/scriptCentral/index'
const { fetchScripts, loading, scriptList } = useScriptList()

onMounted(async() => {
	await fetchScripts()
})

</script>

<style scoped>
select {
  background: url('../../../assets/icons/source/downArrow.svg') #ffffff;
  background-position: 98% 50%;
  z-index: 100;
  overflow: hidden;
  overflow: -moz-hidden-unscrollable;
  background-repeat: no-repeat;
  background-attachment: relative;
}
select,
input[type='number'],
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
}
</style>
