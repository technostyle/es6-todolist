import { 
    addTodo, 
    removeTodo,
    setFilter,
    setDescription,
    toggleTodo,
} from "./TodoList"

const HANDLERS = {
    INPUT_SUBMIT: addTodo,
    MARK_COMPLETE: toggleTodo,
    REMOVE_PARENT: removeTodo,
    SET_FILTER: setFilter,
    TODO_DESCR_SUBMIT: setDescription
}

export default HANDLERS;