<template>
	<MglMap
		:accessToken="accessToken"
		:mapStyle.sync="mapStyle"
		:center="coordinates"
		:zoom="zoom"
		@load="onMapLoaded"
	>

		<MglGeojsonLayer
			:sourceId="layerSource.id"
			:source="layerSource.source"
			layerId="iconLayer"
			:layer="layerIconConfig"
			ref="mapLayer"
		/>

		<MglGeojsonLayer
			:sourceId="layerSource.id"
			:source="layerSource.source"
			layerId="descriptionLayer"
			:layer="layerDescriptionConfig"
			ref="mapLayerDescription"
		/>
	</MglMap>
</template>

<script>
import testBlob from "../assets/testBlob.json";
import Mapbox from "mapbox-gl";
import Layer from "../config/layer";
import { MglMap, MglGeojsonLayer   } from "vue-mapbox";

export default {
	components: {
		MglMap,
		MglGeojsonLayer
	},
	created() {
		// We need to set mapbox-gl library here in order to use it in template
		this.mapbox = Mapbox;

	},
	data() {
		return {
			mapStyle: "mapbox://styles/mapbox/satellite-v9",
			accessToken: "pk.eyJ1IjoicnVzc2VsZGF3biIsImEiOiJja2J0M3FmdXQwNjl3MnJtaW1qNGt0ZnlsIn0.vrnldCA_w4s0BOwynScsFw", // your access token. Needed if you using Mapbox maps
			coordinates: [151.209152, -33.875305],
			zoom: 14,
			layerSource: {
				id: 'sourceId1',
				source: {
					type: 'geojson',
					data: JSON.parse(JSON.stringify(testBlob)),
				}
			},
			layerDescriptionConfig: Layer.layers[0],
			layerIconConfig: Layer.layers[1]

		};
	},
	methods: {
		onMapLoaded(event) {
			// in component
			this.map = event.map;

			this.mapInstance = event.map
			// this.mapInstance.panTo([151.209152, -33.875305]);
		},
	}
};
</script>