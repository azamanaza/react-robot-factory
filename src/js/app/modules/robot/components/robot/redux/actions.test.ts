import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as moxios from "moxios";

import connection from "./../../../services/connection";
import { appLoading } from "./../../../redux/action";
import * as types from "./action-types";
import * as robotActions from "./actions";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Robot Component Actions", () => {

    describe("extinguishRobotThunk thunk action", () => {

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
                appLoading(true),
                robotActions.robotExtinguishSuccess(robotId),
                appLoading(false)
            ];

            const store = mockStore();
            await store.dispatch<any>(robotActions.extinguishRobotThunk(robotId));
            const actions = store.getActions();

            expect(actions).toEqual(expectedActions);
        });
    });
});