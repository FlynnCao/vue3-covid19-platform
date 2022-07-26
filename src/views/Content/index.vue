<template>
	<button @click="isShowCA = !isShowCA">Hide/Show Communication Approaches</button>
	<div v-if="isShowCA">
		<button @click="isShowPI = !isShowPI">Hide/Show Provide & Inject</button>
		<button @click="isShowBus1 = !isShowBus1">Hide/Show Parent Bus Communication</button>
		<button @click="isShowBus2 = !isShowBus2">Hide/Show Custom Bus Communication</button>
		<button @click="isShowBus3 = !isShowBus3">Hide/Show Mitt </button>
		<CondoVue v-if="isShowPI"></CondoVue>
		<HouseVue v-if="isShowBus1"></HouseVue>
		<ApartmentVue v-if="isShowBus2"></ApartmentVue>
		<YardVue v-if="isShowBus3"></YardVue>
	</div>



</template>
	
<script setup lang='ts'>
import { ref } from 'vue';
import CondoVue from './components/Condo/Condo.vue';
import HouseVue from './components/House/House.vue';
import ApartmentVue from './components/Apartment/Apartment.vue'
import YardVue from './components/Yard/Yard.vue';
const isShowPI = ref(false)
const isShowBus1 = ref(false)
const isShowBus2 = ref(false)
const isShowBus3 = ref(false)
const isShowCA = ref(false)


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