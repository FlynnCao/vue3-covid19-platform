<template>
	<Main></Main>

</template>
<script setup lang="ts">
import Main from './views/index.vue'
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

<style lang="scss" scoped>
.testapp {
	.cc-me:deep(.el-input__inner) {
		background-color: red;
	}
}
</style>
