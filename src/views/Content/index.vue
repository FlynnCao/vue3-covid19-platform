<template>
	<div class="content" style="background-color: lightblue;">
		<teleport to='.modal'>
			<div class="tele">
				Where should I be placed?
			</div>
		</teleport>
	</div>
</template>
	
<script setup lang='ts'>
import { reactive, ref } from 'vue'


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