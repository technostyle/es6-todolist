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

    addTodo(todo) {
        const todoItem = new TodoItem(todo);
        todoItem.addToDom(this);
        todoItem.render();
    }

    render() {
    }
}

export default TodoList;