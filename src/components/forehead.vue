<template>
	<h2>I am the forehead.</h2>
	<div id="box">I am the sole box.</div>
	<h1>{{ count }}</h1>
	<button @click="addCount">+</button>
</template>
	
<script setup lang='ts'>
import { onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, ref, onUnmounted } from 'vue';

const count = ref(0)
const addCount = () => {
	count.value++
}
onBeforeMount(() => {
	console.log('>>>> onBeforeMount')
	const box: HTMLDivElement = document.querySelector('#box') as HTMLDivElement
	console.log('box:', box) // box: null
})

onBeforeUpdate(() => {
	console.log('>>>> onBeforeUpdate')
})

onUpdated(() => {
	console.log('>>>> onUpdated')
})

onBeforeUnmount(() => {
	console.log('>>>> onBeforeUnmount')
})

onUnmounted(() => {
	console.log('>>>> onUnmounted')
})
</script>
	
<style>
</style>