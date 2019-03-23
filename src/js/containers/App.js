import DomElement from "../dom/DomElement"
import TodoList from "../components/TodoList"
import { mediumContainer } from "../../css/container.css"
import Header from "../ui/Header";
import InputForm from "../ui/InputForm"
import { EVENT_HANDLER } from "../controllers/Controller";
import { initController } from "../controllers/Controller"

export default class App extends DomElement {
    constructor() {
        super({
            elemType: "div",
            styleClass: mediumContainer
        });
    }

    addToDom(root) {
        root.appendChild(this.domElem);
        this.parent = {};
        this.parent.domElem = root;
    }

    render() {
        const header = new Header();
        header.addInnerHtml("Todo List");
        header.addToDom(this);

        const input = new InputForm();
        input.setOuterController(
            EVENT_HANDLER.INPUT_SUBMIT
        );
        input.addToDom(this);

        const todoList = new TodoList();
        todoList.addToDom(this);
        todoList.render();

        initController(todoList);
    }
}