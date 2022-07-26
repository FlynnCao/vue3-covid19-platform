<template>
	<div class="yard">
		<PrimaryHouseVue></PrimaryHouseVue>
		<SecondaryHouseVue></SecondaryHouseVue>
	</div>
</template>
	
<script setup lang='ts'>
import PrimaryHouseVue from './PrimaryHouse.vue';
import SecondaryHouseVue from './SecondaryHouse.vue';
</script>
	
<style lang="scss" scoped>
.yard {
	.box {
		width: 200px;
		height: 200px;
		margin: 10px;
		border: 1px solid #ccc;
	}
}
</style>