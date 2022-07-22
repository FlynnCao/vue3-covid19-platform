<template>
	<div class="content">
		<button @click="switchCom">Switch</button>
		<keep-alive :include="['login']">
			<Login v-if="flag"></Login>
			<Register v-else></Register>
		</keep-alive>
	</div>
</template>
	
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import Login from '@/components/Login/index.vue'
import Register from '@/components/Register/index.vue'
const flag = ref(true)
const switchCom = () => {
	flag.value = !flag.value
}



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