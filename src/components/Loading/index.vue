<template>
	<div class="loading" v-if="isShow">
		<div class="loading-content">
			Loading...
		</div>
	</div>
</template>
	
<script setup lang='ts'>
const isShow = ref<boolean>(false)
const show = () => [
	isShow.value = true
]
const hide = () => {
	isShow.value = false
}
defineExpose({
	isShow,
	hide,
	show
})
</script>
	
<style lang="scss" scoped>
.loading {
	position: fixed;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 500px;
	left: 50vw;
	top: 50vh;
	transform: translateX(-50%) translateY(-50%);
	background-color: rgba($color: #000000, $alpha: 0.5);

	.loading-content {
		font-size: 50px;
		color: #fff;
	}
}
</style>