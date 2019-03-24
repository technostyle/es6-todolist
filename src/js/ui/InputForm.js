import DomElement from "../dom/DomElement";
import style from "../../css/InputForm.css";

class InputForm extends DomElement{
	constructor() {
		super({
			elemType: "input",
			styleClass: style["input-form"]
		});

		this.addHandler({
			eventType: "keydown",
			handler: this.inputHandler.bind(this)
		});
	}

	setValue(value) {
		this.value = value;
		this.domElem.value = value;
	}

	getValue() {
		return this.value;
	}

	inputHandler(event) {
		
		if (
			event.keyCode != 13 || 
			!event.target.value.trim()
		) {
			return;
		}

		if (this.outerController) {
			this.outerController(event.target.value, this);
		}

		event.target.value = "";
	}

	setOuterController(fn) {
		this.outerController = fn;
	}
}

export default InputForm;