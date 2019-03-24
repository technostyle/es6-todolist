import DomElement from "../dom/DomElement";
import Button from "../ui/Button";
import { filterPanel } from "../../css/FilterPanel.css"
import { filterButton } from "../../css/FilterButton.css"
import FILTERS from "../../js/share/Filters"
import HANDLERS from "../controllers/EventHandlers"

class FilterPanel extends DomElement {
    constructor() {
        super({
            elemType: 'div',
            styleClass: filterPanel
        });

        this.addFilterButton = this.addFilterButton.bind(this);
    }

    addFilterButton(filter) {
        const btn = new Button();
        btn.addInnerHtml(filter);
        btn.addStyle(filterButton);
        btn.addToDom(this);
        btn.setOuterController(
            () => HANDLERS.SET_FILTER(filter)
        );
    }

    render() {
        this.addFilterButton(FILTERS.ALL);
        this.addFilterButton(FILTERS.TODO);
        this.addFilterButton(FILTERS.DONE);
    }
}

export default FilterPanel;