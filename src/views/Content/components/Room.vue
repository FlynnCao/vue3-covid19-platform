<template>
	<div class="room">
		Room: global lightness : {{ data }}
		<CabinetVue></CabinetVue>
	</div>
</template>
	
<script setup lang='ts'>
import CabinetVue from './Cabinet.vue';
import { inject } from 'vue';
const data = inject('globalLightness')
</script>
	
<style lang="scss" scoped>
.room {
	width: 300px;
	height: 300px;
	background-color: green;
	color: white;
}
</style>