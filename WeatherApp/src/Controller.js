import { Model } from "./Model.js";
import { View } from "./View.js";

export const Controller = async () => {
	const view = View();
	const model = await Model();

	const render = () => {
		view.render(model);
	};

	const handleBtnChangeUnit = () => {
		// handle need to change data
		model.unit.switchApiKey();
		render();
	};

	const init = () => {
		render();
		view.bindBtnChangeUnit(handleBtnChangeUnit);
	};
	init();

	return {
		render,
		handleBtnChangeUnit,
		view,
		model,
		init,
	};
};
