import { Store, createStore, compose, applyMiddleware } from "redux";
import reduxThunk  from "redux-thunk";
import { RobotState, robotState} from "./robot/root-reducer";

export const store: Store<RobotState> = createStore(
    robotState,
    compose(
        applyMiddleware(reduxThunk),
    )
);