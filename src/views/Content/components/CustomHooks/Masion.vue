<template>
	<div class="mansion">
		<slot name="header"></slot>
		<slot name="default"></slot>
		<slot name="footer"></slot>

	</div>
</template>
	
<script setup lang='ts'>
import { useAttrs, useSlots } from 'vue';
import useBase64 from './Hooks'
const attrs = useAttrs()
const slots = useSlots()
console.log('attrs', attrs)
console.log('slots', slots)

</script>
	
<style lang="scss" scoped>
.mansion {
	width: 200px;
	height: auto;
	border: 1px solid #000;
}
</style>