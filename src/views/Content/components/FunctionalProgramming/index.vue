<template>
	<div id="fp">
		FP
		<myBtn title="Make Observation" @onChange="handleOnChange"></myBtn>
	</div>
</template>
	
<script setup lang='ts'>
import { createVNode, render, nextTick, h } from 'vue';
const box = createVNode('div',
	{ id: 312, name: 'Tony Stark', age: 32 },
	'Bonjour')
console.log('box', box)
nextTick(() => {
	const wrapper = document.querySelector('#fp') as HTMLElement
	console.log('wrapper', wrapper)
	render(box, wrapper)
})

type Props = {
	title: string
}
const myBtn = (props: Props, ctx: any) => {
	return h('div', {
		class: ['btn--primary'],
		onClick: () => {
			ctx.emit('onChange', 'On Change Btn State.')
		}
	},
		props.title
	)
}
const handleOnChange = (msg: string) => {
	console.log('msg', msg)
}
</script>
	
<style lang="scss">
.btn--primary {
	color: aliceblue;
	background-color: #38f;
	width: 200px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	border: 1px solid black;
	border-radius: 5px;

	&:hover {
		background-color: lightblue;
		color: #666;
		cursor: pointer;
		transition: .25s;

	}
}

.fp {}
</style>