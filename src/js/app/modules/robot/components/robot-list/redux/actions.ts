import { map } from "lodash";
import { AnyAction, ActionCreator, Dispatch } from "redux";

import Robot from "./../../../robot.type";
import robotService from "./../../../services/robot.service";
import { GET_ROBOTS_SUCCESS, GET_ROBOTS_ERROR, SHIP_ROBOTS_SUCCESS } from "./action-types";
import { appLoading } from "./../../../redux/action";
import RobotListItem from "./../types";

export const getRobotsThunk = () => (dispatch: Dispatch<any>) => {
    dispatch(appLoading(true));

    let responsePromise = robotService.getRobots();
    responsePromise.then(data => {
        dispatch(robotLoadSuccess(map(data, (robot: any) => new RobotListItem(robot))));
    }).catch(error => {
        // handle error
        dispatch(robotLoadError("An error has occurred."));
    }).finally(() => {
        dispatch(appLoading(false));
    });

    return responsePromise;
}

export const robotLoadSuccess: ActionCreator<AnyAction> = (robots: Robot[]) => {
    return {
        type: GET_ROBOTS_SUCCESS,
        payload: {
            robots: robots
        }
    }
}

export const robotLoadError: ActionCreator<AnyAction> = (errorCode: string | number) => {
    return {
        type: GET_ROBOTS_ERROR,
        payload: {
            errorCode: errorCode
        }
    }
}

export const shipRobotsThunk = (robotIds: number[]) => (dispatch: Dispatch<any>) => {
    dispatch(appLoading(true));

    return robotService.shipRobots(robotIds)
            .then(data => {
                dispatch(robotShipSuccess(data));
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