import { combineReducers } from "redux";
import robots from "./components/robot-list/redux/reducer";
import Robot from "./robot.type";
import currentFilter from "./components/robot-filter/redux/reducer";

export interface RobotState {
    robots: Robot[];
    currentFilter: string;
};

export const robotState = combineReducers<RobotState>({
    robots: robots,
    currentFilter: currentFilter
});