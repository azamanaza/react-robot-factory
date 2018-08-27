import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import robotReducers from "./modules/robot/reducers";

import { App } from "./modules/app.component";

const store = createStore(robotReducers)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);