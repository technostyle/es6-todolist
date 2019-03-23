import { description } from "../../css/Description.css";
import DomElement from "../dom/DomElement";

export class Description extends DomElement {
    constructor() {
        super({
            elemType: "div",
            styleClass: description
        });
    }
}