import { EVENT_TYPES } from "./Events";
// import { INPUT_DATA } from "./InputData"
import INPUT_DATA from "./InputData"

const EVENT_QUEUE = [];
EVENT_QUEUE.push = Array.prototype.unshift;
// EVENT_QUEUE.pop = Array.prototype.pop;

const COUNTER = (function(){
    let value = 0;
    const uniqeId = () => ++value;
    return {
        uniqeId: uniqeId
    };
})();

function createTodo({ title, description, status }) {
    return {
        id: COUNTER.uniqeId(),
        title: title,
        description: description,
        status: status,
        date: Date.now().to
    }
}

// String
function onTodoNameInputSubmit(todoName) {
    EVENT_QUEUE.push({
        type: EVENT_TYPES.INPUT_SUBMIT,
        payload: todoName
    });

    console.warn(EVENT_TYPES.INPUT_SUBMIT);
    dispatchEvent();
}

// DomElement class instance
function onTodoRemoveButtonClick(button) {
    EVENT_QUEUE.push({
        type: EVENT_TYPES.REMOVE_PARENT,
        payload: button
    });

    // console.warn(EVENT_TYPES.REMOVE_PARENT);
    console.profile(EVENT_TYPES.REMOVE_PARENT);
    // console.timeStamp(EVENT_TYPES.REMOVE_PARENT);
    // console.trace(EVENT_TYPES.REMOVE_PARENT);
    dispatchEvent();
}

export const EVENT_HANDLER = {
    INPUT_SUBMIT: onTodoNameInputSubmit,
    REMOVE_PARENT: onTodoRemoveButtonClick
}

let TODO_LIST_COMPONENT;
let TODO_LIST_DATA;
// TodoList Class instance
export function initController(todoList) {
    TODO_LIST_COMPONENT = todoList;
    // TODO_LIST_DATA = INPUT_DATA;
    INPUT_DATA.forEach(todoItem => 
        TODO_LIST_COMPONENT.addTodo(
            createTodo(todoItem)
        )
    );
}


function dispatchEvent() {
    const event = EVENT_QUEUE.pop();

    switch(event.type) {
        case EVENT_TYPES.INPUT_SUBMIT:
            TODO_LIST_COMPONENT.addTodo(
                createTodo({
                    title: event.payload
                })
            );
            break;
        
        case EVENT_TYPES.REMOVE_PARENT:
            const domElem = event.payload;
            const parent = domElem.parent;
            domElem.destroy(); 
            parent.destroy();
            break;        
    }
}