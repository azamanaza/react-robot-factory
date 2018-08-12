import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import robotReducer from "./root.reducer";

import { App } from "./modules/app.component";

const store = createStore(robotReducer)

ReactDOM.render(
    <Provider store={store}>
        <App compiler="TypeScript" framework="React" />
    </Provider>,
    document.getElementById("root")
);