<template>
	<div>
		<input type="text" name="" id="" v-model="firstName">FirstName:{{ firstName }} <br>
		<input type="text" name="" id="" v-model="lastName">LastName:{{ lastName }} <br>

		<h2>Hello, {{ fullName }}</h2>

		<h2>Bojour, {{ fullNameCapital }}</h2>

		<table border="1">
			<thead>
				<th>Title</th>
				<th>Quantity</th>
				<th>Price</th>
				<th>Operation</th>
			</thead>
			<tbody>
				<tr :key="index" v-for="(item, index) in data">
					<td align="center">{{ item.name }}</td>
					<td align="center"><button @click="addAndSub(item, false)">-</button>{{ item.num }}<button
							@click="addAndSub(item, true)">+</button></td>
					<td align="center">{{ item.price }}</td>
					<td align="center"><button @click="del(index)">Delete</button></td>
				</tr>
			</tbody>
			<tfoot>
				<td>Total Price: {{ total_price }}</td>
			</tfoot>
		</table>
	</div>
</template>
<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
const firstName = ref('')
const lastName = ref('')

const fullName = computed(() => {
	return firstName.value + ' ' + lastName.value
})
const fullNameCapital = computed({
	get() {
		return (firstName.value + ' ' + lastName.value).toUpperCase()
	},
	set() {
		lastName.value + lastName.value
	}
})
type Product = {
	name: string
	num: number
	price: number
}
const data = reactive<Product[]>([
	{ name: 'KiKi Li', num: 1, price: 322.3 },
	{ name: 'CoCo Fit', num: 3, price: 14.8 },
	{ name: 'Jubilee Lee', num: 2, price: 42.3 },
])

let total_price = ref(0)

const addAndSub = (item: Product, type: boolean): void => {
	if (item.num > 1 && !type) {
		item.num--
	}
	if (item.num < 10 && type) {
		item.num++
	}
	//calcTotal()
}


const del = (index: number) => {
	data.splice(index, 1)
	//calcTotal()
}
const calcTotal = () => {
	total_price.value = data.reduce((prev, next) => {
		return prev + next.num * next.price
	}, 0)
}
total_price = computed<number>(() => {
	return total_price.value = data.reduce((prev, next) => {
		return prev + next.num * next.price
	}, 0)
})
//calcTotal()
</script>


<style scoped>
</style>
