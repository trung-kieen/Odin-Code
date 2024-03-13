// const app_id = "04d4d495e39f2311c4acd1148b6e2130";
const fetchWeather = async (settings) => {
	// let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${app_id}`;
	let url = new URL(`https://api.openweathermap.org/data/2.5/onecall`);
	let params = new URLSearchParams(url.search);

	for (const [key, value] of Object.entries(settings)) {
		url.searchParams.append(key, value);
	}

	console.log(url.toString());
	const response = await fetch(
		url.toString(),
		{
			credentials: "omit",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Accept-Language": "en-US,en;q=0.5",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "cross-site",
			},
			referrer: "https://eager-hamilton-724cee.netlify.app/",
			method: "GET",
			mode: "cors",
		}
	);
	const result = await response.json();
	return result;
};
export const getWeather = async (weatherSettings) => {
	const result = await fetchWeather(weatherSettings);
	return result;
};
