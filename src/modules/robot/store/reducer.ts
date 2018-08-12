

import * as _ from "lodash";

import * as robotActions from "./action-types";
import Robot from "./../robot";
import createRandomBot from "./../helpers/create-random-bot";
import { Action } from "redux";

interface RobotState {
    filter: string,
    robotList: Robot[]
}

let initialTestRobots: Robot[] = _.map(new Array(_.random(10)), () =>  createRandomBot());

const initialState = {
    robotList: initialTestRobots,
} as RobotState;
​
export default function robotListReducer(state: RobotState = initialState, action: Action): RobotState {
    let newState = {} as RobotState;
    switch (action.type) {
        case robotActions.FILTER_ROBOT_LIST:
            // filter list
        default:
            newState = state;
            break;
    }

    return newState;
}