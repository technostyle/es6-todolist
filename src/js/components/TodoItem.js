import DomElement from '../dom/DomElement';
import Button from '../ui/Button'
import LittleHeader from '../ui/LittleHeader'
import { removeButton } from '../../css/RemoveButton.css'
import { todoItem } from '../../css/TodoItem.css';
import { EVENT_HANDLER } from '../controllers/Controller';
import { Description } from '../ui/Description';

class TodoItem extends DomElement {
    constructor(props) {
        super({
            elemType: 'div',
            styleClass: todoItem
        });

        this.props = props;
        this.addRemoveButton = this.addRemoveButton.bind(this);
        this.addTitle = this.addTitle.bind(this);
        this.addDescription = this.addDescription.bind(this);
    }

    addRemoveButton() {
        const rmBtn = new Button();
        rmBtn.addStyle(removeButton);
        rmBtn.addInnerHtml("&#9747");
        rmBtn.setOuterController(
            EVENT_HANDLER.REMOVE_PARENT
        );
        rmBtn.addToDom(this);
    }

    addTitle(title) {
        const header = new LittleHeader();
        header.addInnerHtml(title);
        header.addToDom(this);
    }

    addDescription(description) {
        const descr = new Description();
        descr.addInnerHtml(description);
        descr.addToDom(this);
    }

    render() {
        const { title, description, status, date} = this.props;
        this.addTitle(title);
        this.addDescription(description);

        this.addRemoveButton();
    }
}

export default TodoItem;