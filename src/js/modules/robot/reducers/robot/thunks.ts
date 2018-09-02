import * as _ from "lodash";
import { Action, AnyAction, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import Robot from "./../../robot";
import RobotService from "./../../services/robot.service";
import { GET_ROBOTS_SUCCESS } from "./action-types";
import { robotsLoading } from "./actions";


const robotService = new RobotService();

export const getRobotsThunk = () => (dispatch: Dispatch<any>) => {
    dispatch(robotsLoading(true));

    robotService.getRobots()
            .then(data => {
                dispatch(robotsLoading(false));
                // already faked as Robot[], will map again to keep ts happy.
                dispatch(robotLoadSuccess(data));
            })
            .catch(error => {
                // handle error
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