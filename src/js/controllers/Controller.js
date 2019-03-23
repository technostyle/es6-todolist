import { EVENT_TYPES } from "./Events";

const STATE = {};
const EVENT_QUEUE = [];
EVENT_QUEUE.push = Array.prototype.unshift;
// EVENT_QUEUE.pop = Array.prototype.pop;

const STATUSES = {
    TODO: "todo",
    DONE: "done"
};

const COUNTER = (function(){
    let value = 0;
    const uniqeId = () => ++value;
    return {
        uniqeId: uniqeId
    };
})();

function createTodo(todoName) {
    return {
        id: COUNTER.uniqeId(),
        name: todoName,
        date: Date.now()
    }
}

// String
function onTodoNameInputSubmit(todoName) {
    EVENT_QUEUE.push({
        type: EVENT_TYPES.INPUT_SUBMIT,
        payload: todoName
    });

    console.log(EVENT_QUEUE);
    dispatchEvent();
}

// DomElement class instance
function onTodoRemoveButtonClick(button) {
    EVENT_QUEUE.push({
        type: EVENT_TYPES.REMOVE_PARENT,
        payload: button
    });

    console.log(EVENT_QUEUE);
    dispatchEvent();
}

export const EVENT_HANDLER = {
    INPUT_SUBMIT: onTodoNameInputSubmit,
    REMOVE_PARENT: onTodoRemoveButtonClick
}

let TODO_LIST;
// TodoList Class instance
export function initController(todoList) {
    TODO_LIST = todoList;
}

function dispatchEvent() {
    const event = EVENT_QUEUE.pop();

    switch(event.type) {
        case EVENT_TYPES.INPUT_SUBMIT:
            TODO_LIST.addTodo(
                createTodo(event.payload)
            );
            break;
        
        case EVENT_TYPES.REMOVE_PARENT:
            const domElem = event.payload;
            const parent = domElem.parent;
            domElem.destroy(); 
            // parent.destroy();
            break;        
    }
}