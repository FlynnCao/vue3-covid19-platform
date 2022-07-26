<template>
	<div class="room">
		<h3>Secondary Room</h3>
		<div>Inbox:{{ inbox }}</div>
	</div>

</template>
	
<script setup lang='ts'>
import Bus from '../utils/CustomBus'
import { ref } from 'vue'
const inbox = ref('... ...')
Bus.on('ready', (msg: string) => {
	inbox.value = msg
})
</script>
	
<style lang="scss" scoped>
</style>