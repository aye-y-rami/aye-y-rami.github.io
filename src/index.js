import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
		<BrowserRouter basename="/nosotros">
			<App />
		</BrowserRouter>,
	document.getElementById("root")
);
