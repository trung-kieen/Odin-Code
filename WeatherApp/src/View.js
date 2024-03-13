import { $ } from "jquery";
import {
	formatTemperature,
	formatHumidity,
	formatIconUrl,
	formatWindSpeed,
} from "./format";

export const View = () => {
	const temperatureElement = document.querySelector("#details>.temperature");
	const humidityElement = document.querySelector("#details>.humidity");
	const windSpeedElement = document.querySelector("#details>.wind-speed");
	const descriptionElement = document.querySelector("#description");
	const todayIconElement = document.querySelector(
		"#today-weather>.weather-icon"
	);
	const changeUnitBtn = document.querySelector("#change-unit");

	const render = (model) => {
		const currentWeather = model.weather.current;
		const unit = model.unit;

		temperatureElement.textContent = formatTemperature(
			currentWeather.temp,
			unit.getCurrentSymbol()
		);
		humidityElement.textContent = formatHumidity(currentWeather.humidity);
		todayIconElement.src = formatIconUrl(currentWeather.todayIcon);
		descriptionElement.textContent = currentWeather.description;
		windSpeedElement.textContent = formatWindSpeed(currentWeather.wind_speed);

		renderChangeUnitBtn(model.unit);
	};

	const bindBtnChangeUnit = (handleFunction) => {
		// Bind function get handler function as parameter
		// Bind function change view after handler data
		changeUnitBtn.addEventListener("click", () => {
			handleFunction();
		});
	};

	const renderChangeUnitBtn = (unit) => {
		changeUnitBtn.textContent = "Use " + unit.getOppositeSymbol();
	};

	return {
		temperatureElement,
		humidityElement,
		windSpeedElement,
		descriptionElement,
		todayIconElement,
		changeUnitBtn,
		render,
		bindBtnChangeUnit,
		renderChangeUnitBtn,
	};
};
