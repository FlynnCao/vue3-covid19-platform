<template>
	<div class="room">
		<h3>Primary Room</h3>
		<button @click="sendMail">Send Message to Secondary Room.</button>
		<input type="text" v-model="paper">
	</div>
</template>
	
<script setup lang='ts'>
import { ref } from 'vue'
import Bus from '../../utils/CustomBus';
const paper = ref('... ...')
const sendMail = () => {
	Bus.emit('ready', paper.value)
}
</script>
	
<style lang="scss" scoped>
</style>