import * as React from "react";
import * as ReactDOM from "react-dom";
import { Store, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk  from "redux-thunk";
import { RobotState, robotState} from "./modules/robot/reducers";

import { App } from "./modules/app.component";

export const store: Store<RobotState> = createStore(
    robotState,
    compose(
        applyMiddleware(reduxThunk),
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);