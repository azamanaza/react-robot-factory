import { setRobotListFilter } from "./actions";
import { SET_ROBOT_LIST_FILTER } from "./action-types";
import { robotFilters } from "./../robot-filter.constants";

describe("RobotFilter Tests", () => {

    it("Test setRobotListFilter action.", () => {
        let expectedAction = {
            type: SET_ROBOT_LIST_FILTER,
            payload: {
                filter: robotFilters.SHOW_ALL
            }
        }

        expect(setRobotListFilter(robotFilters.SHOW_ALL)).toEqual(expectedAction);
    });
});