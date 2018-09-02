
import { robotFilters } from "../../robot";
import { FilterRobotListAction } from "./actions";
import { FILTER_ROBOT_LIST } from "./action-types";

let initialState: string = robotFilters.SHOW_ALL;

export default function currentFilter(state: string = initialState, action: FilterRobotListAction): string {
    switch (action.type) {
        case FILTER_ROBOT_LIST:
            return action.payload.filter;
        default:
            return state;
    }
}