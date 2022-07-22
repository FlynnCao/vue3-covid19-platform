<template>
	<div class="content">
		<Suspense>
			<template #default>
				<div>
					<Chart></Chart>
				</div>
			</template>
			<template #fallback>
				<div>
					Loading...
				</div>
			</template>
		</Suspense>
	</div>

</template>
	
<script setup lang='ts'>
import { defineAsyncComponent, reactive, ref } from 'vue'
//import Chart from '@/components/Chart/index.vue'
const Chart = defineAsyncComponent(() =>
	import('@/components/Chart/index.vue')
)

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