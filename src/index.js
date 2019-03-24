import App from "./js/containers/App";

const app = new App();
const root = document.getElementById("app");
app.addToDom(root);
app.render();
