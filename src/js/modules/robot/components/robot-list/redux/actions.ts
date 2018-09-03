import { map } from "lodash";
import { AnyAction, ActionCreator, Dispatch } from "redux";

import Robot from "./../../../robot.type";
import RobotService from "./../../../services/robot.service";
import { GET_ROBOTS_SUCCESS, GET_ROBOTS_ERROR, SHIP_ROBOTS, SHIP_ROBOTS_SUCCESS } from "./action-types";
import { appLoading } from "./../../../redux/action";
import RobotListItem from "./../types";


const robotService = new RobotService();

export const getRobotsThunk = () => (dispatch: Dispatch<any>) => {
    dispatch(appLoading(true));

    robotService.getRobots()
            .then(data => {
                dispatch(robotLoadSuccess(map(data, (robot: Robot) => new RobotListItem(robot))));
            }).catch(error => {
                // handle error
            }).finally(() => {
                dispatch(appLoading(false));
            });
}

export const robotLoadSuccess: ActionCreator<AnyAction> = (robots: Robot[]) => {
    return {
        type: GET_ROBOTS_SUCCESS,
        payload: {
            robots: robots
        }
    }
}

export const robotLoadError: ActionCreator<AnyAction> = (errorMessage: string) => {
    return {
        type: GET_ROBOTS_ERROR,
        payload: {
            errorMessage: errorMessage
        }
    }
}

export const shipRobotsThunk = (robotIds: number[]) => (dispatch: Dispatch<any>) => {
    dispatch(appLoading(true));

    robotService.shipRobots(robotIds)
            .then(data => {
                dispatch(robotLoadSuccess(data));
            }).catch(error => {
                // handle error
            }).finally(() => {
                dispatch(appLoading(false));
            });
}

export const robotShipSuccess: ActionCreator<AnyAction> = (robotIds: number[]) => {
    return {
        type: SHIP_ROBOTS_SUCCESS,
        payload: {
            robotIds: robotIds
        }
    }
}