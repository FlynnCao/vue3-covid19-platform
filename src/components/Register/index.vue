<template>
	<div>
		<h2>Register</h2>
		<table>
			<tr>
				<td>Username</td>
				<td><input type="text" v-model="form.username"></td>
			</tr>
			<tr>
				<td>Password</td>
				<td><input type="password" v-model="form.password"></td>
			</tr>
			<tr>
				<td>Verification Code</td>
				<td>
					<input type="text" v-model="form.code">
				</td>
			</tr>
		</table>
		<button>Register</button>
	</div>
</template>
	
<script setup lang='ts'>
import { reactive, onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';
import Register from '@/components/Register/index.vue';
const form = reactive({
	password: '',
	username: '',
	code: ''
})


onMounted(() => {
	console.log('register onMounted')
})

onUnmounted(() => {
	console.log('register onUnmounted')
})

onActivated(() => {
	console.log('register onActivate')
})

onDeactivated(() => {
	console.log('register onDeactivate')
})
</script>
	
<style>
</style>