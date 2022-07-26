<template>
	<div class="kitchen">
		<h2>Kitchen Area</h2>
		<button @click="foodReady">Send Food</button>
	</div>
</template>
	
<script setup lang='ts'>
type Food = {
	name: string,
	hasSoup: boolean
}
const emits = defineEmits(['ready'])
const food1: Food = {
	name: 'fried chicken',
	hasSoup: false
}
const foodReady = () => {
	emits('ready', food1)
}
</script>
	
<style lang="scss" scoped>
.kitchen {
	border: 1px solid green;
	width: 200px;
}
</style>