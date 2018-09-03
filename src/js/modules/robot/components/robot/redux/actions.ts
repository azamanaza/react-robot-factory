import { ActionCreator, AnyAction, Dispatch } from "redux";

import RobotService from "./../../../services/robot.service";
import { 
    EXTINGUISH_ROBOTS, 
    RECYCLE_ROBOTS, 
    SHIP_ROBOTS, 
    EXTINGUISH_ROBOTS_SUCCESS
} from "./action-types";
import { appLoading } from "./../../../redux/action";

const robotService = new RobotService();

export const recycleRobots = (robotIds: number[]) => {
    return {
        type: RECYCLE_ROBOTS,
        payload: {
            robotIds: robotIds
        }
    };
}

export const shipRobots = (robotIds: number[]) => {
    return {
        type: SHIP_ROBOTS,
        payload: {
            robotIds: robotIds
        }
    };
}

export const extinguishRobotThunk = (robotId: number) => (dispatch: Dispatch<any>) => {
    dispatch(appLoading(true));

    robotService.extinguishRobot(robotId)
            .then((robotId: number) => {
                // already faked as Robot[], will map again to keep ts happy.
                dispatch(robotExtinguishSuccess(robotId));
            })
            .catch(error => {
                // handle error
            }).finally(() => {
                dispatch(appLoading(false));
            });
}

export const robotExtinguishSuccess: ActionCreator<AnyAction> = (robotId: number) => {
    return {
        type: EXTINGUISH_ROBOTS_SUCCESS,
        payload: {
            robotId: robotId
        }
    }
}