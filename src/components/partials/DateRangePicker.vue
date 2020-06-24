<template>
	<div class="cascade-date-pickers">
		<div class="commence-date-picker">
				<!-- format="MM/DD/YYYY" -->
			<a-date-picker
				v-model="startValue"
				:disabled-date="disabledStartDate"
				format="MM/DD/YYYY"
				placeholder="Start"
				@openChange="handleStartOpenChange"
			/>

		</div>

		<div class="completion-date-picker">
			<a-date-picker
				v-model="endValue"
				:disabled-date="disabledEndDate"
				format="MM/DD/YYYY"
				placeholder="End"
				:open="endOpen"
				@openChange="handleEndOpenChange"
			/>
		</div>

	</div>
</template>

<script>

export default {
data() {
	return {
		startValue: null,
		endValue: null,
		endOpen: false
	};
},
watch: {
	startValue(val) {
		console.log("startValue", val);
	},
	endValue(val) {
		console.log("endValue", val);
	}
},
methods: {
	disabledStartDate(startValue) {
		const endValue = this.endValue;
		if (!startValue || !endValue) {
			return false;
		}
		return startValue.valueOf() > endValue.valueOf();
	},
	disabledEndDate(endValue) {
		const startValue = this.startValue;
		if (!endValue || !startValue) {
			return false;
		}
		return startValue.valueOf() >= endValue.valueOf();
	},
	handleStartOpenChange(open) {
		if (!open) {
			this.endOpen = true;
		}
	},
	handleEndOpenChange(open) {
		this.endOpen = open;
	}
}
};
</script>

<style lang="scss" scoped>
.cascade-date-pickers {
	display: inline-flex;

	.commence-date-picker {
		padding-right: 10px;


	}

	.ant-calendar-picker {
		min-width: 120px !important;
	}
}

</style>
