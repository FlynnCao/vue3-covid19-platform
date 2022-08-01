<template>
	<div>
		<h1>
			CSS Features
		</h1>
		<TroveVue>
			<p class="trove-1">Pearl on Your Heart</p>
		</TroveVue>
		<div class="dynamic">
			Hello World
		</div>
		<div class="dynamic2">
			Hello Vue
		</div>
		<div :class="[$style.primaryFont, $style.successBg]">
			Hello SCSS
		</div>
	</div>
</template>
	
<script setup lang='ts'>
import theme from './theme.scss';
import TroveVue from './Trove.vue';
const myStyle = ref('lightblue')
const myStyleObj = reactive({
	color: 'red',
	fontWeight: 'bold',
	background: 'lightgreen'
})
</script>
	
<style lang="scss" scoped>
.dynamic {
	color: v-bind(myStyle)
}

.dynamic2 {
	font: v-bind('myStyleObj.fontWeight');
	color: v-bind('myStyleObj.color');
	background-color: v-bind('myStyleObj.background');
}
</style>

<style module>
.primaryFont {
	color: #38f;
}

.successBg {
	background-color: lightcoral;
}
</style>