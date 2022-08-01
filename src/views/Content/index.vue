<template>
	<div class="content">
		<el-button @click="isShowCA = !isShowCA">Hide/Show Communication Approaches</el-button>
		<el-button @click="isShowPluginAndCustomVModel = !isShowPluginAndCustomVModel">Hide/Show Plugin Usage & Custom
			v-model</el-button>
		<el-button @click="showDirectiveVue = !showDirectiveVue">Show / Hide Directives</el-button>
		<el-button @click="showCustomHooks = !showCustomHooks">Hide/Show Custom Hooks</el-button>
		<el-button @click="isSHowCSSFeatures = !isSHowCSSFeatures">Hide/Show CSS New Features</el-button>

		<div v-if="isShowCA">
			<el-button @click="isShowPI = !isShowPI">Hide/Show Provide & Inject</el-button>
			<el-button @click="isShowBus1 = !isShowBus1">Hide/Show Parent Bus Communication</el-button>
			<el-button @click="isShowBus2 = !isShowBus2">Hide/Show Custom Bus Communication</el-button>
			<el-button @click="isShowBus3 = !isShowBus3">Hide/Show Mitt </el-button>
			<CondoVue v-if="isShowPI"></CondoVue>
			<HouseVue v-if="isShowBus1"></HouseVue>
			<ApartmentVue v-if="isShowBus2"></ApartmentVue>
			<YardVue v-if="isShowBus3"></YardVue>
		</div>
		<div v-if="isShowPluginAndCustomVModel">
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
		</div>
		<DirectivesVue v-if="showDirectiveVue"></DirectivesVue>
		<CustomHooksVue v-if="showCustomHooks"></CustomHooksVue>
		<TailWindVue v-if="isShowTailWind"></TailWindVue>
	</div>

</template>
	
<script setup lang='ts'>
import TailWindVue from './components/Tailwind/index.vue'
import CondoVue from './components/Condo/Condo.vue';
import ApartmentVue from './components/Apartment/Apartment.vue'
import YardVue from './components/Yard/Yard.vue';
import PluginTest from './components/PluginTest/index.vue'
import MagicDialogVue from '@/components/MagicDialog/index.vue'
import DirectivesVue from './components/Directives/index.vue'
import CustomHooksVue from './components/CustomHooks/index.vue'
const isShowPI = ref(false)
const isShowBus1 = ref(false)
const isShowBus2 = ref(false)
const isShowBus3 = ref(false)
const isShowCA = ref(false)
const isShowPluginAndCustomVModel = ref(false)
const isSHowCSSFeatures = ref(true)
const isShowTailWind = ref<boolean>(true)
const MagicDialogTitle = ref<string>('Promenade of Condemned')
const MagicDialogVisibility = ref<boolean>(true)
const showDirectiveVue = ref<boolean>(false)
const showCustomHooks = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.content {
	width: calc(100% - 20px);
	height: calc(100% - 100px);
	flex: 1;
	margin: 20px;
	border: 1px solid #ccc;
	overflow: auto;

	.cc-input {
		width: 200px;
	}

	.cc-input:deep(.el-input__inner) {
		background: red;
		color: green;
	}

	.cc-btn :deep(span) {
		color: red;
	}
}
</style>