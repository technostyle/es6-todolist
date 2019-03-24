import DomElement from "../dom/DomElement"
import { littleHeader } from "../../css/LittleHeader.css"

class Header extends DomElement {
    constructor() {
        super({
            elemType: "h4",
            styleClass: littleHeader
        });
    }
}

export default Header;