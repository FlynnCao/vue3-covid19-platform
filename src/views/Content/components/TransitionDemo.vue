<template>
	<button @click="showBox = !showBox">Switch State</button>
	<transition name="fade" @before-enter="handleBeforeEnter" @enter="handleEnter" @after-enter="handleAfterEnter"
		@enter-cancelled="handleEnterCancel" @before-leave="handleBeforeLeave" @leave="handleLeave"
		@after-leave="handleAfterLeave" @leave-cancelled="handleLeaveCancel">
		<div class="box" v-if="showBox"></div>
	</transition>
</template>
	
<script setup lang='ts'>
import { reactive, ref } from 'vue'
const showBox = ref(true)
const handleBeforeEnter = (el: Element) => {
	console.log('transition enter from')
}
const handleEnter = (el: Element, done: any) => {
	console.log('transition enter active')
	setTimeout(() => {
		done()
	}, 3000)
}
const handleAfterEnter = (el: Element) => {
	console.log('transition enter done')
}
const handleEnterCancel = (el: Element) => {
	console.log('transition enter cancel')
}
const handleBeforeLeave = (el: Element) => {
	console.log('transition leave from')
}

const handleLeave = (el: Element) => {
	console.log('transition leave active')
}
const handleAfterLeave = (el: Element) => {
	console.log('transition leave done')
}
const handleLeaveCancel = (el: Element) => {
	console.log('transition leave cancel')
}
</script>
	
<style lang="scss" scoped>
.box {
	width: 100px;
	height: 100px;
	background: red;
}


.fade-enter-from {
	width: 0;
	height: 0;
	transform: rotate(365deg);
}

/**
	 usually remains empty ( same to original style)
*/
.fade-enter-to {}

.fade-enter-active {
	transition: all .25s ease;
	background-color: red;
}

.fade-leave-active {
	transition: all .25s ease;
	background-color: green;
}

/**
	 usually remains empty ( same to original style)
*/
.fade-leave-from {}

.fade-leave-to {
	width: 200px;
	height: 200px;
	transform: rotate(365deg);
}
</style>