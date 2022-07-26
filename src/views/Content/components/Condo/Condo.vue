<template>
	<div class="condo">
		Condo
		<RoomVue></RoomVue>
	</div>
</template>
	
<script setup lang='ts'>
import { provide, ref, getCurrentInstance } from 'vue';
import RoomVue from './Room.vue';
provide('globalLightness', ref(true))
</script>
	
<style lang="scss" scoped>
.condo {
	width: 500px;
	height: 500px;
	background-color: red;
	color: #fff;
}
</style>