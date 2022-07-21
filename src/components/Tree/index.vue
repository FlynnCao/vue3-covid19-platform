<template>
	<div style="margin-left:20px;">
		<div v-for="(item, index) in data" :key="index" @click.stop="clickTreeItem">
			{{ item?.name }}
			<TreeItem v-if="item?.children?.length" :data="item.children"></TreeItem>
		</div>
	</div>

</template>
	
<script setup lang='ts'>
import TreeItem from './index.vue'
import { TreeElement } from '../Types/tree';
type Props = {
	data?: TreeElement[]
}
defineProps<Props>()

const clickTreeItem = (item: TreeElement): MouseEvent => {
	console.log('item>>>>', item)
}
</script>



	
<style>
</style>