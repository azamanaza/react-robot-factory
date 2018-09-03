
import { map, without } from "lodash";
import Robot from "./../../../robot.type";
import { AnyAction } from "redux";
import { GET_ROBOTS_SUCCESS } from "./action-types";
import { EXTINGUISH_ROBOTS_SUCCESS } from "./../../robot/redux/action-types";
import { robotStatuses } from "./../../../robot.type";

export default function robots(state: Robot[] = [], action: AnyAction): Robot[] {
    switch (action.type) {
        case GET_ROBOTS_SUCCESS:
            return action.payload.robots;
        case EXTINGUISH_ROBOTS_SUCCESS:
            return map(state, (robot: Robot) => {
                if (robot.robotId === action.payload.robotId) {
                    robot.statuses = without(robot.statuses, robotStatuses.ON_FIRE);
                }
                return robot;
            });
        default:
          return state
    }
}