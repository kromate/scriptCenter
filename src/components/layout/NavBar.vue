<template>
	<nav class="relative select-none border-b border-black p-4 container mx-auto max-w-6xl">
		<div class="flex items-center justify-between h-full">
			<nuxt-link>
				<img src="@/assets/images/logo.svg" alt="">
			</nuxt-link>
			<div class="flex gap-8 text-white">
				<nuxt-link to="#" class="hidden">
					Search
				</nuxt-link>
				<nuxt-link to="#" class="hidden">
					Explore
				</nuxt-link>
				<a href="https://github.com/kromate/scriptCenter" target="_BLANK">
					Star on Github
				</a>
			</div>

			<div class="flex items-center gap-4 hidden">
				<button class="btn-secondary">
					Sign in
				</button>
				<button class="btn-primary">
					Sign up
				</button>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import Github from '../icons/Github.vue'

</script>
