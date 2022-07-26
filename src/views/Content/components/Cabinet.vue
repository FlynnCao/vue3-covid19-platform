<template>
	<div class="cabinet">
		Cabinet
		<button @click="changState">lightness on/off</button>
		<div>globalLightness:{{ data }}</div>
	</div>
</template>
	
<script setup lang='ts'>
import { inject, Ref, ref } from 'vue';

const data = inject<Ref<boolean>>('globalLightness', ref(false))
const changState = () => {
	data.value = !data.value
}
</script>
	
<style lang="scss" scoped>
.cabinet {
	width: 200px;
	height: 200px;
	background-color: blue;
	color: #fff;
}
</style>