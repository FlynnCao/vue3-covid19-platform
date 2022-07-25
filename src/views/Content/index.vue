<template>
	<button @click="isGroup = !isGroup">Switch to {{ isGroup ? 'Transition Group' : 'Transition' }}</button>
	<div class="content" v-if="isGroup">
		<h1>Transition</h1>
		<h2>Ordinary</h2>
		<TransitionDemo></TransitionDemo>
		<h2>With Animate.css</h2>
		<TransitionWithAnimateVue></TransitionWithAnimateVue>
		<h2>Appear</h2>
		<TransitionSimpleVue></TransitionSimpleVue>
	</div>
	<div class="content" v-if="!isGroup">
		<h1>Transition Group</h1>
		<TransitionGroupVue></TransitionGroupVue>
		<TransitionComplexVue></TransitionComplexVue>
		<TransitionStateVue></TransitionStateVue>
	</div>
</template>
	
<script setup lang='ts'>
import { ref } from 'vue';
import TransitionStateVue from './components/TransitionState.vue';
import TransitionDemo from '@/views/Content/components/TransitionDemo.vue'
import TransitionWithAnimateVue from './components/TransitionWithAnimate.vue';
import TransitionSimpleVue from './components/TransitionSimple.vue';
import TransitionGroupVue from './components/TransitionGroup.vue';
import TransitionComplexVue from './components/TransitionComplex.vue';
const isGroup = ref(true)
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

.tele {
	position: absolute;
	right: 50px;
	top: 50px;
	background-color: red;
	padding: 10px;
	color: white;
}
</style>