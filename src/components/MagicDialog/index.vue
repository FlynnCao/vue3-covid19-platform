import type { UserModule from '~/types';
<template>
	<div class="dialog" v-if="modelValue">
		<header class="header">
			<h1 :class="{ healthy: isHealthy, underline: isUnderline }">{{ title }}</h1>
			<span class="close-icon" @click="close">×</span>
		</header>
		<main class="main">
			<button @click="resetTitle">Rest Title</button>
		</main>
		<footer class="footer">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>
	
<script setup lang='ts'>
type Props = {
	modelValue: boolean,
	title: string,
	modelModifiers?: {
		styledTitle: boolean
	},
	titleModifiers?: {
		underline: boolean
	}
}
const propsData = defineProps<Props>()

const emits = defineEmits(['update:modelValue', 'update:title'])
const isHealthy = ref(false)
const isUnderline = ref(false)

const close = () => {
	emits('update:modelValue', false)
}
const resetTitle = () => {
	emits('update:title', '......')
}

setTimeout(() => {
	console.log('propsData', propsData)
	console.log('propsData.modelModifiers.styledTitle>>', propsData?.modelModifiers?.styledTitle)
	isHealthy.value = propsData?.modelModifiers?.styledTitle || false
	isUnderline.value = propsData?.titleModifiers?.underline || false
})
</script>
	
<style lang="scss" scoped>
.dialog {
	position: absolute;
	z-index: 100;
	top: 50vh;
	width: 500px;
	left: 50vw;
	transform: translateX(-50%) translateY(-50%);
	box-shadow: 5px 5px 5px #ccc;
	border: 1px dotted black;

	.header {
		height: 50px;
		border-bottom: 1px solid #666;
		display: flex;
		box-sizing: border-box;
		padding-left: 10px;
		align-items: center;
		justify-content: space-between;

		.underline {
			text-decoration: underline;
		}

		.passion {
			color: red;
		}


		.healthy {
			color: green;
		}

		.dark {
			color: black;
		}

		.close-icon {
			padding: 5px 10px;
			cursor: pointer;
			border: 1px solid black;
			border-radius: 50%;

			&:hover {
				background-color: red;
				transition: .25s ease-in-out;
				color: white;
			}
		}
	}

	.main {
		height: 300px;
		background: green;
		color: #fff;
	}

	.footer {
		height: 300px;
		background: blue;
		color: #fff;
	}
}
</style>