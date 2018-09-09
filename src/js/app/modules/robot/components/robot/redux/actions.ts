import { ActionCreator, AnyAction, Dispatch } from "redux";
import robotService from "./../../../services/robot.service";
import { 
    ROBOT_LOADING,
    EXTINGUISH_ROBOTS_SUCCESS,
    RECYCLE_ROBOTS_SUCCESS,
    ADD_ROBOT_SHIPMENT,
    REMOVE_ROBOT_SHIPMENT
} from "./action-types";

export const extinguishRobotThunk = (robotId: number) => (dispatch: Dispatch<any>): Promise<void> => {
    dispatch(robotLoading(true));

    return robotService.extinguishRobot(robotId)
            .then((robotId: number) => {
                // already faked as Robot[], will map again to keep ts happy.
                dispatch(robotExtinguishSuccess(robotId));
            })
            .catch(error => {
                // handle error
            }).finally(() => {
                dispatch(robotLoading(false));
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
    dispatch(robotLoading(true));

    return robotService.recycleRobots([robotId])
            .then((robotIds: number[]) => {
                // already faked as Robot[], will map again to keep ts happy.
                dispatch(recycleRobotsSuccess(robotIds));
            })
            .catch(error => {
                // handle error
            }).finally(() => {
                dispatch(robotLoading(false));
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

export const addRobotToShipment: ActionCreator<AnyAction> = (robotId: number) => {
    return {
        type: ADD_ROBOT_SHIPMENT,
        payload: {
            robotId: robotId
        }
    }
}

export const removeRobotFromShipment: ActionCreator<AnyAction> = (robotId: number) => {
    return {
        type: REMOVE_ROBOT_SHIPMENT,
        payload: {
            robotId: robotId
        }
    }
}

export const robotLoading: ActionCreator<AnyAction> = (state: boolean) => ({
    type: ROBOT_LOADING,
    payload: {
        state: state
    }
})