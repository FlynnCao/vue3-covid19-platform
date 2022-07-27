<template>
	<div class="PluginTest">
		<h1 v-show="showTitle">Hello Unplugin-Auto-Import</h1>
		<button @click="showTitle = !showTitle">Hide / Show</button>
	</div>
</template>
	
<script setup lang='ts'>
const showTitle = ref(false)
</script>
	
<style lang="scss" scoped>
.PluginTest {
	background-color: #ccc;
}
</style>