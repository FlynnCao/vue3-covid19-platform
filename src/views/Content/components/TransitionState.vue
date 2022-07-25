<template>
	<div>
		<input type="number" v-model="num.current" step="20">
		<div>
			{{ num.tweenedNumber }}
		</div>
	</div>
</template>
	
<script setup lang='ts'>
import gsap from 'gsap'
import { reactive, watch } from 'vue';
const num = reactive({
	current: 0,
	tweenedNumber: 0
})
watch(() => num.current, (newValue, oldValue) => {
	gsap.to(num, {
		tweenedNumber: newValue,
		duration: 1,
	})
})
</script>
	
<style>
</style>