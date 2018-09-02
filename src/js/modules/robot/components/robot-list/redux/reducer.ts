
import Robot from "./../../../robot.type";
import { AnyAction } from "redux";
import { GET_ROBOTS_SUCCESS } from "./action-types";

export default function robots(state: Robot[] = [], action: AnyAction): Robot[] {
    console.log(action, state);
    switch (action.type) {
        case GET_ROBOTS_SUCCESS:
            return action.payload.robots;
        default:
          return state
    }
}