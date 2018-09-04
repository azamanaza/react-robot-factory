import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store }  from "./app/modules/store";

import { App } from "./app/modules/app.component";



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);