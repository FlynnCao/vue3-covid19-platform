<template>
	<div class="menu">
		<Tree :data="data"></Tree>
	</div>
</template>
	
<script setup lang='ts'>
import Tree from '../../components/Tree/index.vue'
import { reactive } from 'vue';
import type { TreeElement } from '../../components/Types/tree';
const data = reactive<TreeElement[]>([
	{
		name: 'no1',
		children: [
			{
				name: '1-1',
				children: [
					{ name: '1-1-1' }
				]
			},
			{
				name: '2-1',
				children: [
					{
						name: '2-1-1'
					}
				]
			},
			{
				name: '3-1'
			},
			{
				name: '4-1'
			}
		]
	}
])
</script>



<style lang="scss" scoped>
.menu {
	width: 200px;
	height: 100%;
	border: 1px solid red;
}
</style>