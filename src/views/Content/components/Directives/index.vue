<template>
	<div class="directives">
		<CubeVue v-move:main.straight="{ offsetX: 20, offsetY: 20 }"></CubeVue>
		<GlobeVue v-drive-func="{ offsetX: 10, offsetY: 20 }"></GlobeVue>
		<PanelVue v-leave></PanelVue>
	</div>
</template>
	
<script setup lang='ts'>
import { Directive, DirectiveBinding } from 'vue';
import CubeVue from './Cube.vue';
import GlobeVue from './Globe.vue'
import PanelVue from './Panel.vue'
/**
 * Ordinary Usage
 */
const myPos = ref<Pos>({ offsetX: 0, offsetY: 0 })
type Pos = {
	offsetX: number
	offsetY: number
}
const vMove: Directive = {
	created(...args: Array<any>) {
		console.log('==========>Created')
	},
	beforeMount(...args: Array<any>) {
		console.log('==========>beforeMount')
	},
	mounted(el: HTMLElement, payload: DirectiveBinding<Pos>) {
		console.log('==========>mounted')
		console.log('el', el)
		// -> <div class="box" data-v-9a152160 data-v-416c9d51></div>
		console.log('payload', payload)
		console.log('payload.value', payload.value)
		myPos.value = payload.value
		// -> {dir: {…}, instance: Proxy, value: {…}, oldValue: undefined, arg: 'main', …}
	},
	beforeUpdate() {
		console.log('==========>beforeUpdate')
	},
	updated() {
		console.log('==========>updated')
	},
	beforeUnmount() {
		console.log('==========>beforeUnmount')
	},
	unmounted() {
		console.log('==========>unmounted')
	}
}
/**
 * Functional Usage
 */
const vDriveFunc: Directive = (el: HTMLElement, binding: DirectiveBinding<Pos>) => {
	console.log('el', el)
	console.log('binding', binding)
}
/**
 * Demo Time!
 */
// Data Structure
interface Leaving {
	el: HTMLElement
	mouseStartX: number
	mouseStartY: number
	elStartX: number
	elStartY: number
}
class LeavingClass implements Leaving {
	el: HTMLElement
	mouseStartX: number
	mouseStartY: number
	elStartX: number
	elStartY: number
	constructor(myEL: HTMLElement, MSX: number, MSY: number, ESX: number, ESY: number) {
		this.el = myEL
		this.mouseStartX = MSX
		this.mouseStartY = MSY
		this.elStartX = ESX
		this.elStartY = ESY
	}
}
const vLeave: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {
	const moveElement = el.firstElementChild as HTMLElement // get Header dom
	const d = new LeavingClass(el, 0, 0, 0, 0)
	const onMouseDown = (e: MouseEvent) => {
		// Original position offset need to be subtracted
		const x = e.clientX - el.offsetLeft
		const y = e.clientY - el.offsetTop
		const onMove = (e: MouseEvent) => {
			// the moving object should be valid
			if (d.el === null) {
				return
			}
			// clientX may be positive or negative but the result offset must greater than 0 
			console.log('window.innerWidth - d.el.getBoundingClientRect().width', window.innerWidth - d.el.getBoundingClientRect().width)
			//window.innerWidth - d.el.getBoundingClientRect().width -> the Max value that element can move
			d.el.style.left = Math.min(
				Math.max(d.elStartX + e.clientX - d.mouseStartX, 0),
				window.innerWidth - d.el.getBoundingClientRect().width
			) + "px";
			d.el.style.top = Math.min(
				Math.max(d.elStartY + e.clientY - d.mouseStartY, 0),
				window.innerHeight - d.el.getBoundingClientRect().height
			) + "px";
		}
		d.el = el; // element which should be moved
		d.mouseStartX = e.clientX;
		d.mouseStartY = e.clientY;
		d.elStartX = d.el.getBoundingClientRect().left;
		d.elStartY = d.el.getBoundingClientRect().top;
		// Add the event handler when drag start
		document.addEventListener('mousemove', onMove)
		// Remove the event handler after dragging stop
		document.addEventListener('mouseup', () => {
			document.removeEventListener('mousemove', onMove)
		})
	}
	// A full event loop will triggered by Mouse Down
	moveElement.addEventListener('mousedown', onMouseDown)
}
</script>
	
<style lang="scss" scoped>
.directives {}
</style>