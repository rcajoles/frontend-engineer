<template>

  <a-form-model :layout="form.layout" :model="form" v-bind="formItemLayout" >

	<a-form-model-item label="Property Title:">
		<AutoComplete :data="titleData" @choosenData='choosenTitle' @submit="submitFilter"/>
	</a-form-model-item>

	<a-form-model-item label="Property ID:">
		<AutoComplete :data="propertyIdData" @choosenData='choosenPropertyId'/>
	</a-form-model-item>

	<a-form-model-item label="State:">
		<AutoComplete :data="stateData" @choosenData='choosenState'/>
	</a-form-model-item>

	<a-form-model-item label="Suburb:">
		<AutoComplete :data="suburbData" @choosenData='choosenSuburb'/>
	</a-form-model-item>

	<a-form-model-item label="Type:">
		<AutoComplete :data="typeData" @choosenData='choosenType'/>
	</a-form-model-item>

	<a-form-model-item label="Address:">
		<a-input v-model="form.fieldA" placeholder="ex. 238-240 Castlereagh St (Lot 1 DP187103)" />
	</a-form-model-item>

	<a-form-model-item label="Category:">
		<SelectDropDown :data='categoryData' @choosenData='choosenCategory'/>
	</a-form-model-item>

	<a-form-model-item label="Sub Category:">
		<SelectDropDown :data='subCategoryData' @choosenData='choosenSubCategory'/>
	</a-form-model-item>

	<a-form-model-item label="Ownership:">
		<SelectDropDown :data='ownershipData' @choosenData='choosenOwnership'/>
	</a-form-model-item>

	<a-form-model-item label="Stage:">
		<SelectDropDown :data='stageData' @choosenData='choosenStage'/>
	</a-form-model-item>

	<a-form-model-item label="Status:">
		<SelectDropDown :data='statusData' @choosenData='choosenStatus'/>
	</a-form-model-item>

	<a-form-model-item label="Search By Commence Date:">
		<DateRangePicker />
	</a-form-model-item>

	<a-form-model-item label="Search By Completed Date:">
		<DateRangePicker />
	</a-form-model-item>

	<a-form-model-item label="Search By Council:">
		<SelectDropDown :data='councilData' @choosenData='choosenCouncil'/>
	</a-form-model-item>

	<a-form-model-item label="Description:">
		<a-input v-model="form.fieldB" placeholder="description" />
	</a-form-model-item>


	<a-form-model-item label="Floor Area:">
		<div class="number-range-picker" >
			<div class="min-number-picker">
				<a-input-number id="min-floor-area" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>

			<div class="max-number-picker">
				<a-input-number id="max-floor-area" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Max"/>
			</div>
		</div>
	</a-form-model-item>

	<a-form-model-item label="Location Longitude:">
		<div class="number-range-picker" >
			<div class="min-number-picker">
				<a-input-number id="min-longitude" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
			<div class="max-number-picker">
				<a-input-number id="max-longitude" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
		</div>
	</a-form-model-item>


	<a-form-model-item label="Location Latitude:">
		<div class="number-range-picker" >
			<div class="min-number-picker">
				<a-input-number id="min-latitude" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
			<div class="max-number-picker">
				<a-input-number id="max-latitude" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
		</div>
	</a-form-model-item>


	<a-form-model-item label="Site Area:">
		<div class="number-range-picker" >
			<div class="min-number-picker">
				<a-input-number id="min-site-area" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
			<div class="max-number-picker">
				<a-input-number id="max-site-area" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
		</div>
	</a-form-model-item>


	<a-form-model-item label="Storeys:">
		<div class="number-range-picker" >
			<div class="min-number-picker">
				<a-input-number id="min-storey" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
			<div class="max-number-picker">
				<a-input-number id="max-storey" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
		</div>
	</a-form-model-item>


	<a-form-model-item label="Units:">
		<div class="number-range-picker" >
			<div class="min-number-picker">
				<a-input-number id="min-unit" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
			<div class="max-number-picker">
				<a-input-number id="max-unit" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
		</div>
	</a-form-model-item>


	<a-form-model-item label="Value:">
		<div class="number-range-picker" >
			<div class="min-number-picker">
				<a-input-number id="min-value" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
			<div class="max-number-picker">
				<a-input-number id="max-value" v-model="floorValue" :min="1" :max="10" @change="onChange" placeholder="Min"/>
			</div>
		</div>
	</a-form-model-item>


	<a-form-model-item label="Notes:">
		<InputNote />
	</a-form-model-item>

  </a-form-model>

</template>

<script>
import InputNote from "./partials/InputNote";
import AutoComplete from "./partials/AutoComplete";
import SelectDropDown from "./partials/SelectDropDown";
import DateRangePicker from "./partials/DateRangePicker";
import config from "../config/config";

export default {
	components: {
		AutoComplete,
		SelectDropDown,
		DateRangePicker,
		InputNote
	},
	data() {
		return {
			titleData: config.listOfProperty('Title'),
			propertyIdData: config.listOfProperty('Project ID'),
			stateData: config.listOfProperty('State'),
			suburbData: config.listOfProperty('Suburb'),
			typeData: config.listOfProperty('Type'),
			categoryData: config.listOfProperty('Category'),
			subCategoryData: config.listOfProperty('SubCategory'),
			ownershipData: config.listOfProperty('Ownership'),
			stageData: config.listOfProperty('Stage'),
			statusData: config.listOfProperty('Status'),
			councilData: config.listOfProperty('Council'),
			floorValue: null,
			form: {
				layout: "vertical",
				title: "",
				propertyId: "",
				state: "",
				suburb: "",
				type: "",
				category: "",
				subcategory: "",
				ownership: "",
				stage: "",
				status: "",
				council: "",
			},
			numberMin: 0,
		};
	},
	computed: {
		formItemLayout() {
			const { layout } = this.form;
			return layout === "horizontal" ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : {};
		},
		buttonItemLayout() {
			const { layout } = this.form;
			return layout === "horizontal" ? { wrapperCol: { span: 14, offset: 4 } } : {};
		}
	},
	methods: {
		submitFilter() {

		},
		onChange(value) {
			this.numberMin = value;
		},
		choosenTitle(value) {
			this.form.title = value;
		},
		choosenPropertyId(value) {
			this.form.propertyId = value;
		},
		choosenState(value) {
			this.form.state = value;
		},
		choosenSuburb(value) {
			this.form.suburb = value;
		},
		choosenType(value) {
			this.form.type = value;
		},
		choosenCategory(value) {
			this.form.category = value;
		},
		choosenSubCategory(value) {
			this.form.subcategory = value;
		},
		choosenOwnership(value) {
			this.form.ownership = value;
		},
		choosenStage(value) {
			this.form.stage = value;
		},
		choosenStatus(value) {
			this.form.status = value;
		},
		choosenCouncil(value) {
			this.form.council = value;
		},

	}
};
</script>

<style lang="scss" scoped>
.ant-form {
	&-vertical {
		padding: 20px;
	}

	.number-range-picker {
		display: inline-flex;

		.min-number-picker {
			padding-right: 10px;

			.ant-input-number {
				min-width: 130px;
			}

		}

		.max-number-picker {
			min-width: 120px !important;

			.ant-input-number {
				min-width: 130px;
			}
		}
	}

}
</style>