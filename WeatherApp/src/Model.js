import { getWeather } from "./fetch/weather.js";
import { measurement } from "./Model/measurement.js";

export const Model = async () => {
	const unit = measurement();
	let weatherSettings = {
		units: unit.getCurrentApiKey(),
		lat: 21.0245,
		lon: 105.8412,
		appid: "04d4d495e39f2311c4acd1148b6e2130",
	};
	const weather = await getWeather(weatherSettings);

	return {
		weather,
		unit,
	};
};
