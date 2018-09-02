import { combineReducers } from "redux";
import robots from "./reducers/robot/reducer";
import Robot from "./robot";
import currentFilter from "./reducers/current-filter/reducer";

export interface RobotState {
    robots: Robot[];
    currentFilter: string;
};

export const robotState = combineReducers<RobotState>({
    robots: robots,
    currentFilter: currentFilter
});