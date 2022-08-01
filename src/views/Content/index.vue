<template>
	<div class="content">
		<button @click="isShowCA = !isShowCA">Hide/Show Communication Approaches</button>
		<button @click="isShowPluginAndCustomVModel = !isShowPluginAndCustomVModel">Hide/Show Plugin Usage & Custom
			v-model</button>
		<button @click="showDirectiveVue = !showDirectiveVue">Show / Hide Directives</button>
		<button @click="showCustomHooks = !showCustomHooks">Hide/Show Custom Hooks</button>
		<button @click="isSHowCSSFeatures = !isSHowCSSFeatures">Hide/Show CSS New Features</button>

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
		<p>{{ $Filters.copyright('Do not touch') }}</p>
		<button @click="$loading.show">Show Dialog</button>
		<button @click="$loading.hide">Hide Dialog</button>
		<el-button type="primary">123</el-button>
		<el-input :rows="2" placeholder="" :maxlength="-1" :show-word-limit="false" :autosize="{ minRows: 2, maxRows: 4 }">
		</el-input>
		<div>
			<el-input v-model="greeting" class="cc-input ">
			</el-input>
		</div>
		<div>
			<el-button class="cc-btn">Make Order</el-button>
		</div>

		<p>{{ greeting }}</p>
		<CSSFeaturesVue></CSSFeaturesVue>
	</div>



</template>
	
<script setup lang='ts'>
import CSSFeaturesVue from './components/CSSFeatures/index.vue';
import CondoVue from './components/Condo/Condo.vue';
import HouseVue from './components/House/House.vue';
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
const MagicDialogTitle = ref<string>('Promenade of Condemned')
const MagicDialogVisibility = ref<boolean>(true)
const showDirectiveVue = ref<boolean>(false)
const showCustomHooks = ref<boolean>(false)
const greeting = ref<string>('Hello World')
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