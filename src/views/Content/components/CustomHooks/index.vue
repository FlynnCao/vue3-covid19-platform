<template>
	<div class="CustomHooks">
		<img src="@/assets/img/typescript.png" alt="" width="100" height="100" id="TS">
		<MasionVue title="JavaScript No1" score="100">
			<template #header>
				<h2>Beauty of Earth</h2>
			</template>
			<template #default>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro sint perferendis est? E
					rror ut id itaque dignissimos velit perferendis nisi r
					eiciendis, quo, odit iure quaerat commodi perspiciatis repellat! Minima!
				</div>
			</template>
		</MasionVue>
	</div>
</template>
	
<script setup lang='ts'>
import MasionVue from './Masion.vue';
import useBase64 from './Hooks'
useBase64({
	el: '#TS'
}).then(res => {
	console.log('res:', res)
})
</script>
	
<style lang="scss" scoped>
.CustomHooks {}
</style>