import { 
    EXTINGUISH_ROBOTS, 
    RECYCLE_ROBOTS, 
    SHIP_ROBOTS,
    FILTER_ROBOT_LIST 
} from "./action-types";

export const extinguishRobot = (robotId: number) => {
    return {
        type: EXTINGUISH_ROBOTS,
        payload: {
            robotId: robotId
        }
    };
}

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

export const filterRobotList = (filter: string) => {
    return {
        type: FILTER_ROBOT_LIST,
        payload: {
            filter: filter
        }
    }
}

