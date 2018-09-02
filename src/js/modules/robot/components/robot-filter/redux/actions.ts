import {
    SET_ROBOT_LIST_FILTER
} from "./action-types";

export const setRobotListFilter = (filter: string) => {
    return {
        type: SET_ROBOT_LIST_FILTER,
        payload: {
            filter: filter
        }
    }
}