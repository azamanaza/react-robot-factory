import robotFilterReducer from "./reducer";
import { robotFilters } from "./../robot-filter.constants";
import { setRobotListFilter } from "./actions";

describe("RobotFilter Reducer Tests", () => {

    it("Test default state regardless of action type.", () => {
        expect(robotFilterReducer(undefined, {type: "foo"})).toEqual(robotFilters.SHOW_ALL);
    });

    it("Test takes parameter.", () => {

        expect(
            robotFilterReducer(undefined, setRobotListFilter(robotFilters.SHOW_ALL))
        ).toEqual(robotFilters.SHOW_ALL);

        expect(
            robotFilterReducer(undefined, setRobotListFilter(robotFilters.FACTORY_SECOND)
        )).toEqual(robotFilters.FACTORY_SECOND);

        expect(
            robotFilterReducer(undefined, setRobotListFilter(robotFilters.QA_PASSED)
        )).toEqual(robotFilters.QA_PASSED);

    });
    
})