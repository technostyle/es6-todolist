import DomElement from "../dom/DomElement";
import { dateInfoOnTop } from "../../css/DateInfo.css"

class DateInfo extends DomElement {
    constructor() {
        super({
            elemType: 'div',
            styleClass: dateInfoOnTop
        });
    }

    setDate(miliseconds) {        
        const date = new Date(miliseconds).toLocaleString(undefined, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });

        this.addInnerHtml(date);
    }
}

export default DateInfo;