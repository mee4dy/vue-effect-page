<template>
	<div id="page">
		<h4>SECOND PAGE</h4>
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

<style scoped>
#page {
	background: #0091ea;
}
</style>