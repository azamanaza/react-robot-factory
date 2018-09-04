
import { AnyAction } from "redux";
import { robotFilters } from "./../robot-filter.constants";
import { SET_ROBOT_LIST_FILTER } from "./action-types";

let initialState: string = robotFilters.SHOW_ALL;

export default function currentFilter(state: string = initialState, action: AnyAction): string {
    switch (action.type) {
        case SET_ROBOT_LIST_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
}