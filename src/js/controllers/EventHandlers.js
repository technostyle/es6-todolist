import { 
    addTodo, 
    removeTodo,
    setFilter,
    toggleTodo,
} from "./TodoList"

const HANDLERS = {
    INPUT_SUBMIT: addTodo,
    MARK_COMPLETE: toggleTodo,
    REMOVE_PARENT: removeTodo,
    SET_FILTER: setFilter
}

export default HANDLERS;