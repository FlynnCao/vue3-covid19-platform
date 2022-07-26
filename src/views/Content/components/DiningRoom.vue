<template>
	<div class="diningRoom">
		<h2>Lunch Time!</h2>
		<p>I can eat <span class="food">{{ food?.name }}</span> now!</p>
	</div>
</template>
	
<script setup lang='ts'>
type Food = {
	name: string,
	hasSoup: boolean
}
type Props = {
	food: Food | null | undefined
}
defineProps<Props>()
</script>
<style lang="scss" scoped>
.diningRoom {
	width: 200px;
	height: 200px;
	border: 1px solid black;

	.food {
		color: darkorange;
	}
}
</style>