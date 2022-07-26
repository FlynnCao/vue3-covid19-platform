<template>
	<JsxApp title="JSX Tutorial" @onChange="handleJSXChange"></JsxApp>
</template>
<script setup lang="ts">
import Main from './views/index.vue'
import JsxApp from './App'
const handleJSXChange = (data: number) => {
	console.log('data from JSX:', data)
}
</script>


<style  lang="scss">
html,
body,
#app {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
</style>
