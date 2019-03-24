import INPUT_DATA from "./InputData"

const COUNTER = (function(){
    let value = 0;
    const uniqeId = () => ++value;
    return {
        uniqeId: uniqeId
    };
})();

function createTodo(title) {
    return {
        id: COUNTER.uniqeId(),
        title: title,
        description: "",
        status: 'todo',
        date: Date.now()
    }
}

let TODO_LIST_VIEW;

// TodoList Class instance
export function init(todoList) {
    TODO_LIST_VIEW = todoList;
    INPUT_DATA.forEach(todoItem => 
        TODO_LIST_VIEW.addTodo(todoItem)
    );
    TODO_LIST_VIEW.setFilter();
}

export function addTodo(title) {

    TODO_LIST_VIEW.addTodo(
        createTodo(title)
    );
}

export function toggleTodo(button) {
    const todoItem = button.parent;
    todoItem.toggleTodoStatus();
    TODO_LIST_VIEW.handleFilter();
}

export function removeTodo(button) {
    const todo = button.parent;
    button.destroy(); 
    TODO_LIST_VIEW.removeTodo(todo);
}

export function setFilter(filter) {
    TODO_LIST_VIEW.setFilter(filter);
    TODO_LIST_VIEW.handleFilter();
}

export function setDescription(description, inputForm) {
    const todo = inputForm.parent;
    todo.addDescription(description);
}