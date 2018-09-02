import * as _ from "lodash";
import { AnyAction, ActionCreator, Dispatch } from "redux";

import Robot from "./../../../robot.type";
import RobotService from "../../../services/robot.service";
import { GET_ROBOTS_SUCCESS, GET_ROBOTS_ERROR } from "./action-types";
import { appLoading } from "../../../redux/action";


const robotService = new RobotService();

export const getRobotsThunk = () => (dispatch: Dispatch<any>) => {
    dispatch(appLoading(true));

    robotService.getRobots()
            .then(data => {
                // already faked as Robot[], will map again to keep ts happy.
                dispatch(robotLoadSuccess(data));
            })
            .catch(error => {
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