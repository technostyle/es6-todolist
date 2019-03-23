import DomElement from '../dom/DomElement';
import Button from '../ui/Button'
import { removeButton } from '../../css/RemoveButton.css'
import { todoItem } from '../../css/TodoItem.css';
import { EVENT_HANDLER } from '../controllers/Controller';

class TodoItem extends DomElement {
    constructor() {
        super({
            elemType: 'div',
            styleClass: todoItem
        });
    }

    render() {
        const rmBtn = new Button();
        rmBtn.addStyle(removeButton);
        rmBtn.addInnerHtml("&#9747");
        rmBtn.setOuterController(
            EVENT_HANDLER.REMOVE_PARENT
        );
        rmBtn.addToDom(this.domElem);
    }
}

export default TodoItem;