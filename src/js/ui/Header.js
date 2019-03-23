import DomElement from "../dom/DomElement"
import style from "../../css/Header.css"

class Header extends DomElement {
    constructor() {
        super({
            elemType: "h3",
            styleClass: style["header"]
        });
    }
}

export default Header;