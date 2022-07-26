import type { UserModule from '~/types';
import type { DefineComponent from 'vue';
<template>
	<transition appear appear-from-class="from" appear-active-class="active" appear-to-class="to">
		<div class="box"></div>
	</transition>
</template>
	
<script setup lang='ts'>

</script>
	
<style lang="scss" scoped>
.box {
	width: 100px;
	height: 100px;
	background: red;
}

.from {
	width: 0;
	height: 0;
}

.active {
	transition: all 2s ease;
}

.to {
	width: 200px;
	height: 200px;
	transform: rotate(45deg);
}
</style>