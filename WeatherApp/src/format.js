export const formatTemperature = (temp, unit) => {
	return `${temp} ${unit}`;
};

export const formatHumidity = (value) => {
	return `humidity ${value}%`;
};
export const formatIconUrl = (iconCode) => {
	return `https://openweathermap.org/img/wn/${iconCode}.png`;
};
export const formatWindSpeed = (value) => {
	return `wind speed ${value}`;
};
