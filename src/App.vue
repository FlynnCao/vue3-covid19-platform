<template>
	<div class="main">
		<div class="footer">awd</div>
	</div>
</template>
<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, ref, onUnmounted } from 'vue';
import fh from './components/forehead.vue'
const isShowForehead = ref(true)
</script>


<style scoped lang="scss">
.main {
	.footer {
		background-color: red;
	}
}
</style>
