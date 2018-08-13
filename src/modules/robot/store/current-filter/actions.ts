import { 
    FILTER_ROBOT_LIST 
} from "./action-types";
import { Action } from "redux";

export class FilterRobotListAction implements Action {
    type: string;
    payload: {
        filter: string
    };

    constructor(filter: string) {
        this.payload = {
            filter: filter
        }
    }
}

export const filterRobotList = (filter: string) => {
    console.log(filter);
    return {
        type: FILTER_ROBOT_LIST,
        payload: {
            "filter": filter
        }
    }
}