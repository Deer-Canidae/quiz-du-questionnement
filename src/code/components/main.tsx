import * as ReactDOM from "react-dom/client";
import App from "./App";
import "../styles/main.scss";
import "../styles/rainbow.css";
import changeColor from "../functions/changeColor";

// Initializes background color
changeColor();
// React Init
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
