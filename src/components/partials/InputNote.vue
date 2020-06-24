<template>
	<div>
		<a-textarea
			v-model="value"
			placeholder="Controlled autosize"
			:auto-size="{ minRows: 3, maxRows: 5 }"
		/>
	</div>
</template>

<script>
export default {
  data() {
	return {
		value: ""
	};
  }
};
</script>
