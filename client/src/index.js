import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";
import { StoreProvider } from "./store";

const reactContentRoot = document.getElementById("root");

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<App />
		</StoreProvider>
	</React.StrictMode>,
	reactContentRoot
);

registerServiceWorker();
