<template>
	<div class="house">
		<KitchenVue @ready="getReadyFood"></KitchenVue>
		<DiningRoomVue :food="currentFood"></DiningRoomVue>
	</div>
</template>
	
<script setup lang='ts'>
import { ref } from 'vue';
import KitchenVue from './Kitchen.vue';
import DiningRoomVue from './DiningRoom.vue';
type Food = {
	name: string,
	hasSoup: boolean
}
const currentFood = ref<Food | null>()
const getReadyFood = (payload: Food) => {
	currentFood.value = payload
}
</script>
	
<style lang="scss" scoped>
</style>