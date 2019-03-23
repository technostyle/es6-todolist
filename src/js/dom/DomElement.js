export default class DomElement {
	constructor(props) {
		const { elemType, styleClass} = props;

		this.domElem = document.createElement(elemType);
		if (styleClass) {
			this.domElem.classList.add(styleClass);
		}
	}

	destroy(){
		const parent = this.parent || this.domElem.parentElement;
		if (this.eventType && this.handler) {
			this.domElem.removeEventListener(this.eventType, this.handler);
		}
		parent.removeChild(this.domElem);
	}

	addToDom(parent){
		// const parentElem = parent.domElem;
		// parentElem.appendChild(this.domElem);
		parent.appendChild(this.domElem);
		this.parent = parent;
	}

	addStyle(styleClass) {
		this.domElem.classList.add(styleClass);
	}

	removeStyle(styleClass) {
		this.domElem.classList.remove(styleClass);
	}

	addInnerHtml(html) {
		this.domElem.innerHTML = html;
	}

	addHandler({ eventType, handler }) {
		this.eventType = eventType;
		this.handler = handler;
		this.domElem.addEventListener(
			this.eventType,
			this.handler
		);
	}
}