<template>
	<div class="NextTickTest">
		<h2>String</h2>
		<el-input v-model="message" placeholder="..." size="normal" clearable></el-input>
		<p ref="box" class="flex text-center text-red-500 bg-slate-300 ">
			{{ message }}
		</p>
		<el-button size="default" @click="changeText">Change Message</el-button>
		<h2>Number</h2>
		<el-input v-model="score" placeholder="..." size="normal" clearable></el-input>
		<p ref="box" class="flex text-center text-red-500 bg-slate-300 ">
			{{ score }}
		</p>
		<el-button size="default" @click="changeScore">Change Message</el-button>

	</div>
</template>
	
<script setup lang='ts'>
import { nextTick } from 'vue';
const message = ref<string>('Nothing to happen.')
const score = ref<number>(-1)
const box = ref<HTMLElement>()
const changeText = async () => {
	message.value = 'Winter is coming...'
	await nextTick()
	console.log(box.value?.innerText)
}

const changeScore = () => {
	for (let index = 0; index < 100; index++) {
		score.value = index
	}
	for (let index = 0; index < 5; index++) {
		setTimeout(() => {
			console.log(index)
			score.value = index
		})
	}
}
</script>
	
<style lang="scss" scoped>
.NextTickTest {}
</style>