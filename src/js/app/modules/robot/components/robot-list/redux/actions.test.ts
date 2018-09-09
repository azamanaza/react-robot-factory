import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as moxios from "moxios";

import connection from "./../../../services/connection";
import * as robotListActionTypes from "./action-types";
import * as robotListActions from "./actions";
import { appLoading } from "./../../../redux/action";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Robot List Component Actions", () => {

    describe("getRobotsThunk async action", () => {

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
                    response: []
                });
            });

            let expectedActions: any[] = [
                appLoading(true),
                robotListActions.robotLoadSuccess([]),
                appLoading(false)
            ];

            const store = mockStore();
            await store.dispatch<any>(robotListActions.getRobotsThunk());
            const actions = store.getActions();

            expect(actions).toEqual(expectedActions);
        });
    });

    it("robotLoadSuccess action", () => {
        let expectedAction = {
            type: robotListActionTypes.GET_ROBOTS_SUCCESS,
            payload: {
                robots: []
            }
        };

        expect(robotListActions.robotLoadSuccess([])).toEqual(expectedAction);
    });

    it("robotLoadError action", () => {
        let expectedAction = {
            type: robotListActionTypes.GET_ROBOTS_ERROR,
            payload: {
                errorCode: 404
            }
        };

        expect(robotListActions.robotLoadError(404)).toEqual(expectedAction);
    });

    describe("shipRobotsThunk async action", () => {

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
                appLoading(true),
                robotListActions.robotShipSuccess([robotId]),
                appLoading(false)
            ];

            const store = mockStore();
            await store.dispatch<any>(robotListActions.shipRobotsThunk([robotId]));
            const actions = store.getActions();

            expect(actions).toEqual(expectedActions);
        });
    });

    it("robotShipSuccess action", () => {
        let robotId = 1;

        let expectedAction = {
            type: robotListActionTypes.SHIP_ROBOTS_SUCCESS,
            payload: {
                robotIds: [robotId]
            }
        };

        expect(robotListActions.robotShipSuccess([robotId])).toEqual(expectedAction);
    });
});