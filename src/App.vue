<script setup lang="ts">
import {ref} from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const msg:string = 'I am the true man';
const count:number = 0;
const isFool:boolean = true;
const slogon:string =  '1,2,3,4,5'
const msgEl:string = '<section>Diamond Fragment</section>'
const clickTap = ():void=>{
	console.log('触发了点击事件')
}
const clickParent = ():void=>{
		console.log('触发了父母的点击事件')
}
const clickForm = ():void=>{
		console.log('触发了表单提交')
}

type Style = {
	color:string;
	height: string;
}

type Cls = {
	a: boolean;
	b: boolean;
}

const cls:Cls = {
	a: true,
	b: false
}
const sty:Style = {
	color: 'red',
	height: '300px'
}

type Food = {
	id:number;
	value:string;
	label:string;
	price?: number;
}
const list:Food[] = [
	{id:1, value: '1231231232', label: 'Tofu'},
	{id:2, value: '12321312', label: 'Tart'},
	{id:3, value: '3441341', label: 'Cheese Burger', price: 32.23},
]

const title = ref("test")
</script>

<template>
	<h1 @click="clickParent" :style="sty">
		<div v-text="msg"></div>	
		<div v-html="msgEl">
		</div>	
		<button @click.stop="clickTap">ABC</button>
	</h1>
	<div :class="cls">
		I'm the new style.
	</div>
	<form action="">
		<button type="submit" @click.prevent="clickForm">提交</button>
	</form>
	<ul>
		<li v-for="item in list" :key="item.id">{{item.label}} ~ {{item.value}} <span v-if="item.price">${{item.price}}</span></li>
	</ul>
	<input type="text" v-model="title"/>
	<h2>{{title}}</h2>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.a{
	color:red;
}
.b{
	background:green;
}
</style>
