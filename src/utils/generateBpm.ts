import {betweenValues} from "./betweenValues";

type lowDeviceBpm = number[];
type mediumDeviceBpm = number[];
type highDeviceBpm = number[];

var lowDeviceData: lowDeviceBpm = [];
var mediumDeviceData: mediumDeviceBpm = [];
var highDeviceData: highDeviceBpm = [];

function generateBpm(bpmType: string) {
	switch (bpmType) {
		case "lowDeviceBpm":
			const generateValuesLowDevice = betweenValues(61, 69);

			if (lowDeviceData.length > 9) {
				lowDeviceData.splice(0, 1);
				lowDeviceData.push(generateValuesLowDevice);
			} else {
				lowDeviceData.push(generateValuesLowDevice);
			}

			return lowDeviceData;

		case "mediumDeviceBpm":
			const generateValuesMediumDevice = betweenValues(80, 5);

			if (mediumDeviceData.length > 9) {
				mediumDeviceData.splice(0, 1);
				mediumDeviceData.push(generateValuesMediumDevice);
			} else {
				mediumDeviceData.push(generateValuesMediumDevice);
			}

			return mediumDeviceData;

		case "highDeviceBpm":
			const generateValuesHighDevice = betweenValues(112, 120);

			if (highDeviceData.length > 9) {
				highDeviceData.splice(0, 1);
				highDeviceData.push(generateValuesHighDevice);
			} else {
				highDeviceData.push(generateValuesHighDevice);
			}

			return highDeviceData;
	}
}

export {generateBpm};
