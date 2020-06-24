import data from '../assets/testBlob.json'

export default {
    data,
    listOfProperty: (prop) => {
        let list = [];

		data.features.forEach(element => {

			if (!(window._.includes(list, element.properties.project[prop]))) {
				list.push(element.properties.project[prop]);
			}

        });

        return list;
    },

}