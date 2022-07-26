<template>
	<button @click="showBox = !showBox">Switch State</button>
	<transition :duration="{ enter: 200, leave: 500 }" leave-active-class="animate__animated animate__fadeOut"
		enter-active-class="animate__animated animate__fadeIn">
		<div class="box" v-if="showBox"></div>
	</transition>
</template>
	
<script setup lang='ts'>
import 'animate.css'
import { reactive, ref } from 'vue'
const showBox = ref(true)
</script>
	
<style lang="scss" scoped>
.box {
	width: 100px;
	height: 100px;
	background: red;
}
</style>