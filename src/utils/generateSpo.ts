import {betweenValues} from "./betweenValues";

type lowDeviceSpo = number[];
type mediumDeviceSpo = number[];
type highDeviceSpo = number[];

var lowDeviceData: lowDeviceSpo = [];
var mediumDeviceData: mediumDeviceSpo = [];
var highDeviceData: highDeviceSpo = [];

function generateSpo(spoType: string) {
	switch (spoType) {
		case "lowDeviceSpo":
			const generateValuesLowDevice = betweenValues(90, 100);

			if (lowDeviceData.length > 9) {
				lowDeviceData.splice(0, 1);
				lowDeviceData.push(generateValuesLowDevice);
			} else {
				lowDeviceData.push(generateValuesLowDevice);
			}

			return lowDeviceData;

		case "mediumDeviceSpo":
			const generateValuesMediumDevice = betweenValues(20, 30);

			if (mediumDeviceData.length > 9) {
				mediumDeviceData.splice(0, 1);
				mediumDeviceData.push(generateValuesMediumDevice);
			} else {
				mediumDeviceData.push(generateValuesMediumDevice);
			}

			return mediumDeviceData;

		case "highDeviceSpo":
			const generateValuesHighDevice = betweenValues(40, 60);

			if (highDeviceData.length > 9) {
				highDeviceData.splice(0, 1);
				highDeviceData.push(generateValuesHighDevice);
			} else {
				highDeviceData.push(generateValuesHighDevice);
			}

			return highDeviceData;
	}
}

export {generateSpo};
