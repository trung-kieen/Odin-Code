import { fetchWeatherObject } from "./weather.js";

test("Weather api call", () =>{
	fetchWeatherObject().then(data => {
		expect(data).toBeInstanceOf(Object)
	})

}
	);
