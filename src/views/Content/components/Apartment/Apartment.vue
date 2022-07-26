<template>
	<h2>Apartment</h2>
	<div class="apartment">
		<PrimaryRoom></PrimaryRoom>
		<SecondaryRoom></SecondaryRoom>
	</div>

</template>
	
<script setup lang='ts'>
import PrimaryRoom from './PrimaryRoom.vue'
import SecondaryRoom from './SecondaryRoom.vue'
</script>
	
<style lang="scss" scoped>
.apartment {
	.room {
		width: 200px;
		height: 200px;
		border: 1px solid #ccc;
		margin: 10px;
	}
}
</style>