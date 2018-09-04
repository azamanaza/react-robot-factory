import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as types from "./action-types";
import * as robotActions from "./actions";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Robot Component Actions", () => {
    it("robotExtinguishSuccess", () => {
        const robotId: number = 1;
        const expectedAction = {
        type: types.EXTINGUISH_ROBOTS_SUCCESS,
            payload: {
                robotId: robotId
            }
        }
        expect(robotActions.robotExtinguishSuccess(robotId)).toEqual(expectedAction)
    });

    it("addRobotToShipment", () => {
        const robotId: number = 1;
        const expectedAction = {
        type: types.ADD_ROBOT_SHIPMENT,
            payload: {
                robotId: robotId
            }
        }
        expect(robotActions.addRobotToShipment(robotId)).toEqual(expectedAction)
    });

    it("removeRobotFromShipment", () => {
        const robotId: number = 1;
        const expectedAction = {
        type: types.REMOVE_ROBOT_SHIPMENT,
            payload: {
                robotId: robotId
            }
        }
        expect(robotActions.removeRobotFromShipment(robotId)).toEqual(expectedAction)
    });

});