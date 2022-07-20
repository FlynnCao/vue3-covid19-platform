<template>
	<div class="menu">
		<div>
			{{ title }}
		</div>
		<div>
			{{ data }}
		</div>
		<div>
			<button @click="clickTap">Distribute</button>
			<button @click="clickTouch">Set Off</button>
		</div>
	</div>
</template>
	
<script setup lang='ts'>
import { reactive } from 'vue'
type Props = {
	title: string
	data: number[]
}
// defineProps<Props>()
withDefaults(defineProps<Props>(), {
	title: 'Default Title',
	data: () => [0, 0, 0, 0]
})
const insideList: string[] = ['Java', 'C++', 'JavaScript']
const emitBody = defineEmits(['update', 'change'])
const clickTap = () => {
	emitBody('update', insideList, true)
}
const clickTouch = () => {
	emitBody('change')
}
const init = () => {
	console.log('Init child component.')
}
defineExpose({
	insideList,
	init
})
</script>

<style lang="scss" scoped>
.menu {
	width: 200px;
	height: 100%;
	border: 1px solid red;
}
</style>