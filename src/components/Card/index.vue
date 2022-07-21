<template>
	<div class="card">
		<div class="card-header">
			<h1>{{ title }}</h1>
			<div>
				{{ subTitle }}
			</div>
		</div>
		<div class="card-content">
			{{ content }}
		</div>
	</div>
</template>
	
<script setup lang='ts'>
type Props = {
	content?: string
	title: string
	subTitle?: string
}
withDefaults(defineProps<Props>(), {
	title: 'hello world'
})

</script>
	
<style lang="scss" scoped>
$border: red;

.card {
	border: 1px solid $border;

	.card-header {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		border-bottom: 1px solid $border;
	}

	.card-content {
		padding: 10px;

	}

}
</style>