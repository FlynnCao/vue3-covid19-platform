<template>
	<div class="layout">
		<div>
			<Menu ref="el" title="ShakeSpare" :data="list" @update="handleUpdate" @change="handleChange"></Menu>
		</div>
		<div class="layout-right">
			<Header></Header>
			<Content></Content>
		</div>
	</div>
</template>
	
<script setup lang='ts'>
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import { reactive, ref, onMounted } from 'vue';
const list = reactive<number[]>([1, 2, 3])
const el = ref<null>(null)
onMounted(() => {
	const elDOM: any = el.value
})
const handleUpdate = (data: string[], flag: boolean) => {
	console.log('catch children update')
	console.log('children data :>> ', data);
	console.log('children mark :>> ', flag);
}
const handleChange = (() => {
	console.log('catch children change')
})
</script>
	
<style lang="scss" scoped>
.layout {
	display: flex;
	height: 100%;
	overflow: hidden;

	.layout-right {
		width: calc(100% - 200px);
	}
}
</style>