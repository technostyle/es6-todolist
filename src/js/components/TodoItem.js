import DomElement from '../dom/DomElement';
import Button from '../ui/Button'
import InputForm from '../ui/InputForm'
import LittleHeader from '../ui/LittleHeader'
import { completeButton, removeButton } from '../../css/Button.css'
import { todoItem, done, todo } from '../../css/TodoItem.css';
import { visible, invisible } from '../../css/Invisible.css';
import HANDLERS from '../controllers/EventHandlers';
import { Description } from '../ui/Description';
import STATUCES from '../share/Statuces.js'
import DateInfo from '../ui/DateInfo';

class TodoItem extends DomElement {
    constructor(props) {
        super({
            elemType: 'div',
            styleClass: todoItem
        });

        this.props = props;
        this.addRemoveButton = this.addRemoveButton.bind(this);
        this.addCompleteButton = this.addCompleteButton.bind(this);
        this.addDescriptionInput = this.addDescriptionInput.bind(this);
        this.addTitle = this.addTitle.bind(this);
        this.addDate = this.addDate.bind(this);
        this.addDescription = this.addDescription.bind(this);
        this.setTodoStatus = this.setTodoStatus.bind(this);
        this.toggleTodoStatus = this.toggleTodoStatus.bind(this);
        this.renderTodoStatus = this.renderTodoStatus.bind(this);
        this.setVisibility = this.setVisibility.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.renderVisibility = this.renderVisibility.bind(this);
    }

    addCompleteButton() {
        const cmplBtn = new Button();
        cmplBtn.addStyle(completeButton);
        cmplBtn.addInnerHtml("&#10003");
        cmplBtn.setOuterController(
            HANDLERS.MARK_COMPLETE
        );
        cmplBtn.addToDom(this);
    }

    addRemoveButton() {
        const rmBtn = new Button();
        rmBtn.addStyle(removeButton);
        rmBtn.addInnerHtml("&#9747");
        rmBtn.setOuterController(
            HANDLERS.REMOVE_PARENT
        );
        rmBtn.addToDom(this);
    }

    addDate(date) {
        const dateInfo = new DateInfo();
        dateInfo.setDate(date);
        dateInfo.addToDom(this);
    }

    addDescriptionInput() {
        const input = new InputForm();
        input.setOuterController(
            HANDLERS.TODO_DESCR_SUBMIT
        );
        input.addToDom(this);
    }

    addTitle(title) {
        const header = new LittleHeader();
        header.addInnerHtml(title);
        header.addToDom(this);
    }

    addDescription(description) {

        if (this.descriptionComponent) {
            this.descriptionComponent.addInnerHtml(description || "");
            return;
        }
        const descr = new Description();
        descr.addInnerHtml(description || "");
        descr.addToDom(this);
        this.descriptionComponent = descr;
    }


    setTodoStatus(status) {
        this.done = status === STATUCES.DONE;
    }

    renderTodoStatus() {
        if (this.done) {
            this.removeStyle(todo);
            this.addStyle(done);
        } else {
            this.removeStyle(done);
            this.addStyle(todo);
        }
    }

    toggleTodoStatus() {
        this.done = !this.done;
        this.renderTodoStatus();
    }

    setVisibility(visible) {
        this.visible = !!visible;
    }

    toggleVisibility() {
        this.visibile = !this.visibile;
        this.renderVisibility();
    }

    renderVisibility() {
        if (this.visible) {
            this.removeStyle(invisible);
            this.addStyle(visible)
        } else {
            this.removeStyle(visible);
            this.addStyle(invisible);
        }
    }

    render() {
        const { 
            title, 
            description, 
            status, 
            date
        } = this.props;

        this.addTitle(title);
        this.addDate(date);
        this.addDescription(description);
        this.setTodoStatus(status);
        this.renderTodoStatus();
        this.setVisibility(true);
        this.renderVisibility();

        this.addCompleteButton();
        this.addRemoveButton();
        this.addDescriptionInput();
    }
}

export default TodoItem;