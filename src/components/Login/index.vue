<template>
	<div>
		<h2>Login</h2>
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
		<button>Log In</button>
	</div>
</template>
	
<script setup lang='ts'>
import { reactive, onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';
import Login from '@/components/Login/index.vue';
const form = reactive({
	password: '',
	username: '',
	code: ''
})

onMounted(() => {
	console.log('login onMounted')
})

onUnmounted(() => {
	console.log('login onUnmounted')
})

onActivated(() => {
	console.log('login onActivate')
})

onDeactivated(() => {
	console.log('login onDeactivate')
})

</script>

<script lang="ts">
export default {
	name: 'login'
}
</script>
	
<style>
</style>