export default {
    layers: [
        {
            // point description
            type: "symbol",
            layout: {
                "text-field": ["get", "Title", ["get", "project"]],
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top",
                "icon-size": 0.8,
                "text-size": 12,
            },
            paint: {
                "text-color": ["get", "color"],
                "text-halo-blur": 1,
            },
        },
        {
            // for adding a colored dot
            type: "circle",
            layout: {},
            paint: {
                "circle-color": ["get", "color"],
            },
        },
    ],
};
