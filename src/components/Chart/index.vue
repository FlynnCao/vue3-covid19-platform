<template>
	<div class="chart">
		<ul v-for="item in list">
			<li>name:{{ item.name }}</li>
			<li>nickname:{{ item.nickname }}}</li>
			<li>age:{{ item.age }}</li>
		</ul>
	</div>
</template>
	
<script setup lang='ts'>
import { axios } from '../../utils/server';


// can directly use await in setup script
const list = await axios('./data.json')
console.log('list :>> ', list);
</script>
	
<style lang="scss" scoped>
.chart {}
</style>