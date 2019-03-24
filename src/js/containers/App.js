import DomElement from "../dom/DomElement"
import TodoList from "../components/TodoList"
import { mediumContainer } from "../../css/container.css"
import Header from "../ui/Header";
import InputForm from "../ui/InputForm"
import HANDLERS from "../controllers/EventHandlers";
import { init } from "../controllers/TodoList"
import FilterPanel from "../components/Filter"

export default class App extends DomElement {
    constructor() {
        super({
            elemType: "div",
            styleClass: mediumContainer
        });
        this.addToDom = this.addToDom.bind(this);
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
            HANDLERS.INPUT_SUBMIT
        );
        input.addToDom(this);
        input.domElem.focus();

        const panel = new FilterPanel();
        panel.addToDom(this);
        panel.render();

        const todoList = new TodoList();
        todoList.addToDom(this);
        todoList.render();
        init(todoList);
    }
}