<template>
	<div class="panel">
		<div class="panel-title">
			Cabinet Information
		</div>
		<div class="panel-content">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sit voluptates vero, temporibus repe
			llat dolorem explicabo saepe vel consequuntur. Culpa sit eligendi hic
			libero, fugit sed deserunt! Quidem, dicta tenetur!
		</div>
		<div class="panel-footer">
			<small>CopyRight@2022</small>
		</div>
	</div>
</template>
	
<script setup lang='ts'>

</script>
	
<style lang="scss" scoped>
.panel {
	width: 500px;
	border: 1px solid black;
	background-color: #eee;
	position: absolute;
	left: 20vw;
	top: 10vh;

	.panel-title {
		height: 50px;
		line-height: 50px;
		background-color: #000;
		color: #fff;
		padding-left: 10px;
	}

	.panel-content {
		padding-left: 10px;
	}

	.panel-footer {
		height: 50px;
		padding-left: 10px;
	}

}
</style>