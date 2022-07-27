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
	<PluginTest></PluginTest>
	<p>
		MagicDialogVisibility:{{ MagicDialogVisibility }}
	</p>
	<p>
		MagicDialogTitle:{{ MagicDialogTitle }}
	</p>

	<button @click="MagicDialogVisibility = !MagicDialogVisibility">Show/Hide Magic Dialog</button>
	<MagicDialogVue v-model:title.underline="MagicDialogTitle" v-model.styledTitle="MagicDialogVisibility">
	</MagicDialogVue>
</template>
	
<script setup lang='ts'>
import CondoVue from './components/Condo/Condo.vue';
import HouseVue from './components/House/House.vue';
import ApartmentVue from './components/Apartment/Apartment.vue'
import YardVue from './components/Yard/Yard.vue';
import PluginTest from './components/PluginTest/index.vue'
import MagicDialogVue from '@/components/MagicDialog/index.vue'
const isShowPI = ref(false)
const isShowBus1 = ref(false)
const isShowBus2 = ref(false)
const isShowBus3 = ref(false)
const isShowCA = ref(false)
const MagicDialogTitle = ref<string>('Promenade of Condemned')
const MagicDialogVisibility = ref<boolean>(true)
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