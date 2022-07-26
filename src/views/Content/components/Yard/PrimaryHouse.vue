<template>
	<div class="box">
		<h2>Primary House</h2>
		<button @click="sendMsg">Send Message to another house</button>
		<button @click="sendGreeting">Send Greeting to another house</button>
	</div>
</template>
	
<script setup lang='ts'>
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()

const sendMsg = () => {
	instance?.proxy?.$Bus.emit('ready', 'Hello JavaScript!')
}
const sendGreeting = () => {
	instance?.proxy?.$Bus.emit('change', 'Salampagi!')
}
</script>
	
<style lang="scss" scoped>
</style>