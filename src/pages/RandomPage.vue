<template>
	<div id="page">
		<h4>RANDOM EFFECT</h4>
		<div v-if="$effectPage.current" id="current-effect-info">
			<div>
				<b>NAME: </b> <span>{{ $effectPage.current.name }}</span>
			</div>
			<div>
				<b>CODE: </b> <span>{{ $effectPage.current.code }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
}
</script>

<style scoped>
#page {
	background: #0091ea;
}

#current-effect-info {
	margin-top: 10px;
	padding: 10px;
	background: #fff;
	border-radius: 2px;
	color: #000;
}
</style>