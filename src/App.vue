<template>
	<span>foo:{{ foo }}</span><br>
	<span>bar:{{ bar }}</span><br>
	<span>origin:{{ obj }}</span><br>
	<span>reference:{{ state }}</span><br>
	<button @click="change">Change</button>
</template>
<script setup lang="ts">
import { toRef, triggerRef, reactive, toRefs, toRaw } from 'vue';
const obj = {
	foo: 'Hello World',
	bar: 1
}
const obj_reactive = reactive({
	foo: 'Hello World',
	bar: 1
})
console.log('obj_reactive', obj_reactive)
const state = toRef(obj_reactive, 'bar')

const obj_raw = toRaw(obj_reactive)
console.log('obj_raw', obj_raw) // -> obj_raw {foo: 'Hello World', bar: 1}
const { foo, bar } = toRefs(obj_reactive)
const change = () => {
	state.value++
	foo.value = 'Hello JavaScript'
	console.log('origin->', obj)
	console.log('reference->', state)
}
</script>


<style scoped>
</style>
