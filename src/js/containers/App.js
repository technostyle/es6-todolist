import DomElement from "../dom/DomElement"
import TodoList from "../components/TodoList"
import { mediumContainer } from "../../css/container.css"
import Header from "../ui/Header";
import InputForm from "../ui/InputForm"

export default class App extends DomElement {
    constructor() {
        super({
            elemType: "div",
            styleClass: mediumContainer
        });
    }

    render() {
        const header = new Header();
        header.addInnerHtml("Todo List");
        header.addToDom(this.domElem);

        const input = new InputForm();
        input.addToDom(this.domElem);

        const todoList = new TodoList();
        todoList.addToDom(this.domElem);
        todoList.render();
    }
}