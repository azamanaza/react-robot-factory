
import { filter, includes, map, without } from "lodash";
import Robot from "./../../../robot.type";
import { AnyAction } from "redux";
import { GET_ROBOTS_SUCCESS } from "./action-types";
import { EXTINGUISH_ROBOTS_SUCCESS, RECYCLE_ROBOTS_SUCCESS, ADD_ROBOT_SHIPMENT, REMOVE_ROBOT_SHIPMENT } from "./../../robot/redux/action-types";
import { robotStatuses } from "./../../../robot.type";
import RobotListItem from "../types";

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
        case RECYCLE_ROBOTS_SUCCESS:
            return filter(state, (robot: Robot) => {
                return !includes(action.payload.robotIds, robot.robotId);
            });
        case ADD_ROBOT_SHIPMENT:
            console.log(action, state);
            return map(state, (robot: RobotListItem) => {
                if (robot.robotId === action.payload.robotId) {
                    robot.isForShipping = true;
                }
                return robot; 
            });
        case REMOVE_ROBOT_SHIPMENT:
            return map(state, (robot: RobotListItem) => {
                if (robot.robotId === action.payload.robotId) {
                    robot.isForShipping = false;
                }
                return robot; 
            });
        default:
          return state
    }
}