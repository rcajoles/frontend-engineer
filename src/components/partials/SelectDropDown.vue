<template>
	<a-select
		show-search
		placeholder="Select a value"
		option-filter-prop="children"
		:filter-option="filterOption"
		@focus="handleFocus"
		@blur="handleBlur"
		@change="handleChange"
		:loading="loading"
	>
		<template v-for="item in dataSource">
			<a-select-option :value="item" :key="item">
				{{ item }}
			</a-select-option>
		</template>

	</a-select>
</template>

<script>
export default {
	props: [
		'data'
	],
	beforeMount() {
		this.dataSource = this.data;
	},
	data() {
		return {
			loading: false,
			newTitle: '',
			dataSource: [],
		};
	},
	methods: {
		handleChange(value) {
			this.loading = false;
			this.$emit('choosenData', value);
		},
		handleBlur() {
			this.loading = false;
		},
		handleFocus() {
			this.loading = true;
		},
		filterOption(input, option) {
			return (
				option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
			);
		},
	},
};
</script>

<style lang="scss" scoped>
.ant-select {
	width: 100%;
}
</style>