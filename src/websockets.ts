import {io} from "./http";
import {generateBpm} from "./utils/generateBpm";
import {generateSpo} from "./utils/generateSpo";

io.on("connection", socket => {
	console.log("client connected:", socket.id);

	socket.on("disconnect", reason => {
		console.log(reason);
	});

	const tenSeconds = 10000;

	setInterval(() => {
		console.log(generateBpm("lowDeviceBpm"));

		const bpmType = {
			lowDevice: generateBpm("lowDeviceBpm"),
			mediumDevice: generateBpm("mediumDeviceBpm"),
			highDevice: generateBpm("highDeviceBpm"),
		};

		const spoType = {
			lowDevice: generateSpo("lowDeviceSpo"),
			mediumDevice: generateSpo("mediumDeviceSpo"),
			highDevice: generateSpo("highDeviceSpo"),
		};

		socket.emit("data", {
			bpm: {
				lowDevice: bpmType.lowDevice,
				mediumDevice: bpmType.mediumDevice,
				highDevice: bpmType.highDevice,
			},
			spo: {
				lowDevice: spoType.lowDevice,
				mediumDevice: spoType.mediumDevice,
				highDevice: spoType.highDevice,
			},
		});
	}, tenSeconds);
});
