import DomElement from "../dom/DomElement";
import { largeContainer } from "../../css/container.css"
import TodoItem from "./TodoItem";
import FILTERS from "../share/Filters"

class TodoList extends DomElement {
    constructor() {
        super({
            elemType: "div",
            styleClass: largeContainer
        });

        this.todos = [];
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    addTodo(todo) {
        const todoItem = new TodoItem(todo);
        todoItem.addToDom(this);
        todoItem.render();
        this.todos.push(todoItem);
    }

    removeTodo(todo) {
        this.todos = this.todos.filter(item => item !== todo);
        todo.destroy();
    }

    setFilter(filter) {
        if (filter in FILTERS) {
            this.filter = filter;
        } else {
            this.filter = FILTERS.ALL;
        }

        this.handleFilter();
    }

    handleFilter() {
        this.todos.forEach(
            todo => {
                const visible = 
                    (this.filter === FILTERS.ALL) || (
                        (this.filter === FILTERS.DONE) 
                        === 
                        (todo.done)
                    );

                todo.setVisibility(visible);
                todo.renderVisibility();
            }
        );
    }

    render() {

    }
}

export default TodoList;