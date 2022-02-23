import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import PoemProvider from "./context/poemContext";

ReactDOM.render(
	<React.StrictMode>
		<PoemProvider>
			<App />
		</PoemProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
