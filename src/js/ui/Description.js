import style from "./Description.css";

export class Description {
    constructor() {
        this.domElem = document.createElement("div");
        this.domElem.classList.add(style["description"]);
    }

}