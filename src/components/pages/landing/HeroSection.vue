<template>
	<div class="w-full h-auto bg md:p-20 p-6 flex flex-col justify-center items-center text-center gap-4 ">
		<h1 class="text-5xl font-bold ">
			Centeral collection of scripts
		</h1>
		<p class="text-xl font-light w-full max-w-lg">
			ScriptCenter is basically a web extension of RottenScript with other features like search, share, edit and maybe even run (coming soon.)
		</p>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg {
	background-image: linear-gradient(
			rgba(255, 255, 255, 0.35),
			rgba(255, 255, 255, 0.35)
		),
		url('@/assets/images/bg.png');
		background-position: 100% 50%;

}
</style>
