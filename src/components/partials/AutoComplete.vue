<template>
  <div class="certain-category-search-wrapper">

	<a-auto-complete
		:data-source="dataSource"
		:filter-option="filterOption"
		:dropdown-style="{ width: '300px' }"
		style="width: 100%"
		placeholder="Type a keywords here"
		@change="handleChange"
		v-model="termSearched"
		@keyup.enter="submit"
	/>

  </div>
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
			termSearched: '',
			dataSource: [],
		};
	},
	methods: {
		submit() {
			this.$emit('submitFilter');
		},
		filterOption(input, option) {
			return (
				option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
			);
		},
		handleChange(value) {
			this.$emit('choosenData', value);
		},
	}
};
</script>

<style>
.certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title {
  color: #666;
  font-weight: bold;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item-group {
  border-bottom: 1px solid #f6f6f6;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item {
  padding-left: 16px;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all {
  text-align: center;
  cursor: default;
}

.certain-category-search-dropdown .ant-select-dropdown-menu {
  max-height: 300px;
}
</style>

<style scoped>
.certain-category-search-wrapper
  >>> .certain-category-search.ant-select-auto-complete
  .ant-input-affix-wrapper
  .ant-input-suffix {
  right: 12px;
}
.certain-category-search-wrapper >>> .certain-search-item-count {
  position: absolute;
  color: #999;
  right: 16px;
}
.certain-category-search-wrapper
  >>> .certain-category-search.ant-select-focused
  .certain-category-icon {
  color: #108ee9;
}
.certain-category-search-wrapper >>> .certain-category-icon {
  color: #6e6e6e;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-size: 16px;
}
</style>
