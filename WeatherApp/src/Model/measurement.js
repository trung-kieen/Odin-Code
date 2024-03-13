export const measurement = () => {
	const unitApiName = {
		Celsius: "Metric",
		Kelvin: "Standard",
		Fahrenheit: "Imperial",
	};
	const storageKey = "unit";
	const defaultUnit = unitApiName.Fahrenheit;
	const init = () => {
		if (!localStorage.getItem(storageKey)) {
			localStorage.setItem(storageKey, defaultUnit);
		}
	};

	const getCurrentApiKey = () => localStorage.getItem(storageKey);

	const switchApiKey = () => {
		localStorage.setItem(storageKey, getOppositeApiKey());
	};

	const getCurrentUnit = () => {
		for (const key in unitApiName) {
			if (getCurrentApiKey() == unitApiName[key]) {
				return key;
			}
		}
	};

	const getOppositeApiKey = () =>
		getCurrentApiKey() == unitApiName.Fahrenheit
			? unitApiName.Celsius
			: unitApiName.Fahrenheit;

	const getOppositeUnit = () => {
		for (const key in unitApiName) {
			if (getOppositeApiKey() == unitApiName[key]) {
				return key;
			}
		}
	};

	const getCurrentSymbol = () => {
		let unit = getCurrentUnit();
		if (!unit) {
			return "";
		}

		return "°" + unit[0];
	};
	const getOppositeSymbol = () => {
		let unit = getOppositleUnit();
		if (!unit) {
			return "";
		}

		return "°" + unit[0];
	};

	init();
	return {
		getCurrentUnit,
		getCurrentApiKey,
		switchApiKey,
		getOppositeUnit,
		getOppositeApiKey,
		getCurrentSymbol,
		getOppositeSymbol,
	};
};
