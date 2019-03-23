import DomElement from "../dom/DomElement";

class Button extends DomElement{
	constructor() {
		super({
			elemType: "button",
		});
	}

	setOuterController(controller) {
		this.addHandler({
			eventType: "click",
			handler: () => controller(this)
		});
	}

}

export default Button;