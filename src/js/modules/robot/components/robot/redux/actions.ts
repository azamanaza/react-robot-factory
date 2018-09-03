import { ActionCreator, AnyAction, Dispatch } from "redux";

import RobotService from "./../../../services/robot.service";
import { 
    EXTINGUISH_ROBOTS_SUCCESS,
    RECYCLE_ROBOTS_SUCCESS
} from "./action-types";
import { appLoading } from "./../../../redux/action";

const robotService = new RobotService();

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

export const recycleRobotThunk = (robotId: number) => (dispatch: Dispatch<any>) => {
    dispatch(appLoading(true));

    robotService.recycleRobots([robotId])
            .then((robotIds: number[]) => {
                // already faked as Robot[], will map again to keep ts happy.
                dispatch(recycleRobotsSuccess(robotIds));
            })
            .catch(error => {
                // handle error
            }).finally(() => {
                dispatch(appLoading(false));
            });
}

export const recycleRobotsSuccess: ActionCreator<AnyAction> = (robotIds: number[]) => {
    return {
        type: RECYCLE_ROBOTS_SUCCESS,
        payload: {
            robotIds: robotIds
        }
    }
}