import DomElement from "../dom/DomElement";

class Button extends DomElement{
	constructor() {
		super({
			elemType: "button",
		});

		this.addHandler({
			eventType: "click",
			handler: () => console.log(this)
		});
	}
}

export default Button;