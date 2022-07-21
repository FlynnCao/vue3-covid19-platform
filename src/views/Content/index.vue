<template>
	<div class="content">
		<h2>Dynamic Data</h2>
		<div class="tab">
			<div @click="switchCom(item)" :key="item.name" v-for="item in data" class="tab-item">
				{{ item.name }}
			</div>
		</div>
		<component :is="currentComponent.comName"></component>
		<h2>Static Data</h2>
		<div :key="index" v-for="(item, index) in dataList" class="content-item">
			<Card :title="item.label" :content="`$${item.price}`"></Card>
		</div>
		<DynamicDialog>
			<template #[slotName]>
				<div>
					Where is me?
				</div>
			</template>
		</DynamicDialog>

	</div>

	<Dialog>
		<template #header>
			<div>
				I am the top part insertion.
			</div>
		</template>
		<template #default="{ data, index }">
			<div>
				<div> {{ index }} -- {{ data?.name }} -- {{ data?.rate }}</div>
			</div>
		</template>
		<template #footer>
			<div>
				I am the bottom part insertion.
			</div>
		</template>
	</Dialog>
</template>
	
<script setup lang='ts'>
import Apple from '@/components/Dynamics/Apple.vue'
import Butter from '@/components/Dynamics/Butter.vue'
import Cat from '@/components/Dynamics/Cat.vue'
import Dialog from '@/components/Dialog/index.vue'
import DynamicDialog from '@/components/DynamicDialog/index.vue'
import { reactive, markRaw, shallowReactive, ref } from 'vue';
const slotName = ref('center')
type Tabs = {
	name: string
	comName: any
}
const data = reactive<Tabs[]>([
	{
		name: '苹果',
		comName: markRaw(Apple)
	},
	{
		name: '黄油',
		comName: markRaw(Butter)
	},
	{
		name: '猫',
		comName: markRaw(Cat)
	}
])
type Com = Pick<Tabs, 'comName'>
const currentComponent = reactive<Com>({
	comName: data[0].comName
})

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

const switchCom = (item: Tabs) => {
	console.log('item', item)
	currentComponent.comName = item.comName
}

</script>

<style lang="scss" scoped>
.tab {
	display: flex;

	.tab-item {
		margin: 10px;
		border: 1px solid #666;
		padding: 5px;
	}
}

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