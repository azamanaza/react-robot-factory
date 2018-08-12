
import Robot from "../../robot";
import { createTestRobots } from "../../helpers/create-random-bot";
import { Action } from "redux";

let initialTestRobots: Robot[] = createTestRobots();

export default function robots(state: Robot[] = initialTestRobots, action: Action): Robot[] {
    console.log(state, action);
    switch (action.type) {
        default:
          return state
      }
}