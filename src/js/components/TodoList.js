import DomElement from "../dom/DomElement";
import { largeContainer } from "../../css/container.css"
import TodoItem from "./TodoItem";

class TodoList extends DomElement {
    constructor() {
        super({
            elemType: "div",
            styleClass: largeContainer
        });
    }

    render() {
        for (let i = 0; i < 5; i++) {
            const todoItem = new TodoItem();
            todoItem.addToDom(this.domElem);
            todoItem.addInnerHtml(`item ${i + 10} added`);
            todoItem.render();
        }
    }
}

export default TodoList;