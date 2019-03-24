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
        // this.addInnerHtml("date");

        // const date = miliseconds.toLocaleDateString('ru-Ru', {  
        //     day : 'numeric',
        //     month : 'short',
        //     year : 'numeric'
        // })
        
        // this.addInnerHtml(date);
        // const date = new Date().toLocaleDateString('en-GB', {  
        //     day : 'numeric',
        //     month : 'short',
        //     year : 'numeric'
        // })

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