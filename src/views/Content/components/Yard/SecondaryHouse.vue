<template>
	<div class="box">
		<h2>Secondary House</h2>
	</div>
</template>
	
<script setup lang='ts'>
import { getCurrentInstance, ref } from 'vue';
const instance = getCurrentInstance()
instance?.proxy?.$Bus.on('ready', (payload) => {
	console.log('Primary House said:', payload)  // ->  Primary House said: Hello JavaScript!
})

setTimeout(() => {
	instance?.proxy?.$Bus.off('ready')
}, 3000);


instance?.proxy?.$Bus.on('*', (type, payload) => {
	console.log('type:', type)  // -> type: change
	console.log('payload:', payload) // ->  payload: Salampagi!
})


setTimeout(() => {
	instance?.proxy?.$Bus.all.clear()
}, 100000)
</script>
	
<style lang="scss" scoped>
</style>