<template>
	<div>
		<button @click="random">shuffle</button>
		<transition-group move-class="move" class="wrapper" tag="div">
			<div :key="item.id" class="item" v-for="item in list">
				{{ item.number }}
			</div>
		</transition-group>
	</div>
</template>
	
<script setup lang='ts'>
import { ref } from 'vue';
import _ from 'lodash'
let list = ref(Array.apply(null, {
	length: 81,
} as number[]).map((_, index) => {
	return {
		id: index,
		number: (index % 9) + 1
	}
}))
console.log('list', list.value)
console.log('_', _)
const random = () => {
	list.value = _.shuffle(list.value)
}
</script>
	
<style scoped lang="scss">
.wrapper {
	display: flex;
	flex-wrap: wrap;
	width: calc(25px * 9 + 10px);

	.item {
		width: 25px;
		height: 25px;
		border: 1px solid #ccc;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.move {
	transition: all 1s;
}
</style>