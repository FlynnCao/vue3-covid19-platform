<template>
	<div class="dialog">
		<header class="header">
			<slot name="header"></slot>
		</header>
		<main class="main">
			<div v-for="(item, index) in data">
				<slot :data="item" :index="index"></slot>
			</div>
			<slot></slot>
		</main>
		<footer class="footer">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>
	
<script setup lang='ts'>
import { reactive } from 'vue';
type category = {
	name: string
	rate: number
}
const data = reactive<category[]>([
	{
		name: 'Java',
		rate: 3.2,
	},
	{
		name: 'JavaScript',
		rate: 4.1,
	},
	{
		name: 'C++',
		rate: 5.0,
	},
	{
		name: 'C#',
		rate: 2.1,
	}

])

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

	.header {
		height: 200px;
		background: red;
		color: #fff;
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