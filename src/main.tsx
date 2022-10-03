import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "./styles/rainbow.css";
import changeColor from "./changeColor";

changeColor();
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);