<template>
	<button @click="add">ADD</button>
	<button @click="del">DEL</button>
	<div class="wraps">

		<transition-group leave-active-class="animate__animated  animate__bounceOut"
			enter-active-class=" animate__animated animate__bounceIn" tag="section">
			<div :key="index" v-for="(item, index) in list">
				<div class="item">{{ item }}</div>
			</div>
		</transition-group>
	</div>
</template>
	
<script setup lang='ts'>
import { reactive } from 'vue';
import 'animate.css'
const list = reactive<number[]>([1, 2, 3])
const add = () => {
	list.push(list.length + 1)
}
const del = () => {
	list.pop()
}
</script>
	
<style lang="scss" scoped>
.wraps {
	display: flex;
	flex-wrap: wrap;
	word-break: break-all;
	border: 1px;

	.item {
		margin: 10px;
	}
}
</style>