import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as moxios from "moxios";

import connection from "./../../../services/connection";
import * as types from "./action-types";
import * as robotActions from "./actions";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Robot Component Actions", () => {

    describe("extinguishRobotThunk async action", () => {

        beforeEach(function () {
            moxios.install(connection);
        });
       
        afterEach(function () {
            moxios.uninstall(connection);
        });

        it("Dispatches the correct actions.", async () => {

            let robotId = 1;

            moxios.wait(() => {
                let request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: robotId
                });
            });

            let expectedActions: any[] = [
                robotActions.robotLoading(true),
                robotActions.robotExtinguishSuccess(robotId),
                robotActions.robotLoading(false)
            ];

            const store = mockStore();
            await store.dispatch<any>(robotActions.extinguishRobotThunk(robotId));
            const actions = store.getActions();

            expect(actions).toEqual(expectedActions);
        });
    });

    it("Test robotExtinguishSuccess generated action.", () => {
        let robotId = 1;
        let expectedAction = {
            type: types.EXTINGUISH_ROBOTS_SUCCESS,
            payload: {
                robotId: robotId
            }
        };

        expect(robotActions.robotExtinguishSuccess(robotId)).toEqual(expectedAction)
    });

    describe("recycleRobotThunk async action", () => {

        beforeEach(function () {
            moxios.install(connection);
        });
       
        afterEach(function () {
            moxios.uninstall(connection);
        });

        it("Dispatches the correct actions.", async () => {

            let robotId = 1;

            moxios.wait(() => {
                let request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: [robotId]
                });
            });

            let expectedActions: any[] = [
                robotActions.robotLoading(true),
                robotActions.recycleRobotsSuccess([robotId]),
                robotActions.robotLoading(false)
            ];

            const store = mockStore();
            await store.dispatch<any>(robotActions.recycleRobotThunk(robotId));
            const actions = store.getActions();

            expect(actions).toEqual(expectedActions);
        });
    });

    it("Test recycleRobotsSuccess generated action.", () => {
        let robotId = 1;
        let expectedAction = {
            type: types.RECYCLE_ROBOTS_SUCCESS,
            payload: {
                robotIds: [robotId]
            }
        };

        expect(robotActions.recycleRobotsSuccess([robotId])).toEqual(expectedAction)
    });
});