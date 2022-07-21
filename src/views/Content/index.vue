<template>
	<div class="content">
		Content Area
		<div :key="index" v-for="(item, index) in dataList" class="content-item">
			<Card :title="item.label" :content="`$${item.price}`"></Card>
		</div>
	</div>
</template>
	
<script setup lang='ts'>
type Product = {
	label: string
	des?: string
	price: number
	domestic?: boolean,
}
const dataList: Product[] = [
	{ label: 'Bread', des: 'wadawdawdwadwadwdwad', price: 32.3 },
	{ label: 'Gin', des: 'qweqweqweqweadadwddawdwa', price: 12.3, domestic: true },
]
</script>

<style lang="scss" scoped>
.content {
	width: calc(100% - 20px);
	height: calc(100% - 100px);
	flex: 1;
	margin: 20px;
	border: 1px solid #ccc;
	overflow: auto;

	.content-item {
		padding: 20px;
	}
}
</style>