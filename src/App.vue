<template>
	<div>
		<input type="text" name="" id="" v-model="toy">Toy:{{ toy }} <br>
		<input type="text" name="" id="" v-model="instrument">Instrument:{{ instrument }} <br>
		<button @click="stopEffect">Stop Watch Effect</button>
		<input type="text" name="" id="" v-model="head">FirstName:{{ head }} <br>
		<input type="text" name="" id="" v-model="tail">LastName:{{ tail }} <br>
		<input type="text" name="" id="" v-model="skeleton.foo.bar.name"> {{ skeleton.foo.bar.name }}<br>
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
import { computed, ref, reactive, watch, watchEffect } from 'vue'
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


/**
 * Watch
 */
const head = ref('Hello')
const tail = ref('World')
const skeleton = reactive({
	foo: {
		bar: {
			name: 'Cannon'
		}
	}
})
watch(head, (newVal, oldVal) => {
	console.log('new:', newVal)
	console.log('old:', oldVal)
})
watch([head, tail], (newVal, oldVal) => {
	console.log('new:', newVal)
	console.log('old:', oldVal)
})

// watch(skeleton, (newVal, oldVal) => {
// 	console.log('new:', newVal)
// 	console.log('old:', oldVal)
// })

watch(() => skeleton.foo.bar.name, (newVal, oldVal) => {
	console.log('new:', newVal)
	console.log('old:', oldVal)
}, { immediate: true })
//, { deep: true }
// {immediate: true}

const toy = ref('Airplane')
const instrument = ref('Fiddle')

const stopEffect = watchEffect((onInvalidate) => {
	console.log('toy:', toy.value)
	console.log('instrument:', instrument.value)
	onInvalidate(() => {
		console.log('Before watch effect i want to do...')
	})
})


</script>


<style scoped>
</style>
