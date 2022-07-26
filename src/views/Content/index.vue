<template>
	<button @click="isShowPI = !isShowPI">Hide/Show Provide & Inject</button>
	<button @click="isShowBus1 = !isShowBus1">Hide/Show Parent Bus Communication</button>
	<button @click="isShowBus2 = !isShowBus2">Hide/Show Custom Bus Communication</button>
	<CondoVue v-if="isShowPI"></CondoVue>
	<HouseVue v-if="isShowBus1"></HouseVue>
	<ApartmentVue v-if="isShowBus2"></ApartmentVue>
</template>
	
<script setup lang='ts'>
import { ref } from 'vue';
import CondoVue from './components/Condo.vue';
import HouseVue from './components/House.vue';
import ApartmentVue from '@/views/Content/components/Apartment.vue'
const isShowPI = ref(false)
const isShowBus1 = ref(true)
const isShowBus2 = ref(true)

</script>

<style lang="scss" scoped>
.content {
	width: calc(100% - 20px);
	height: calc(100% - 100px);
	flex: 1;
	margin: 20px;
	border: 1px solid #ccc;
	overflow: auto;
}
</style>