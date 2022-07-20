<template>
	<div class="content">
		Content Area
		<div :key="item" v-for="item in 100" class="content-item">
			hello new york city
		</div>
	</div>
</template>
	
<script setup lang='ts'>

</script>

<style lang="scss" scoped>
.content {
	width: calc(100% - 20px);
	height: calc(100% - 100px);
	background-color: lightcoral;
	flex: 1;
	margin: 20px;
	border: 1px solid #ccc;
	overflow: auto;

	.content-item {
		padding: 20px;
	}
}
</style>