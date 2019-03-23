import DomElement from '../dom/DomElement';
import Button from '../ui/Button'
import { removeButton } from '../../css/RemoveButton.css'
import { todoItem } from '../../css/TodoItem.css';

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
        rmBtn.addToDom(this.domElem);
    }
}

export default TodoItem;