import { create } from "./create";

module.exports = {
	rules: {
		"color-hex-validation": {
			meta: {
				type: "suggestion",
				fixable: "code",
				messages: {
					alert: "CSS HEX value should be in uppercase.",
				},
			},
			create,
		},
	},
};
