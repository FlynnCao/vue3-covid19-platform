<template>
	<div class="trove">
		<slot></slot>
	</div>
</template>
	
<script setup lang='ts'>

</script>
	
<style lang="scss" scoped>
.trove {
	:slotted(.trove-1) {
		color: orange;
	}

}
</style>