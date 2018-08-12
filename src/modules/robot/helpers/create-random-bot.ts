import * as _ from "lodash";
import Robot, { robotStatuses, RobotConfig } from "../robot";

export default function createRandomRobot() {
    let randomId = _.random(1, 10000);
    let robotConfig = {
        hasSentience: _.random(0, 1) ? true : false,
        hasWheels: _.random(0, 1) ? true : false,
        hasTracks: _.random(0, 1) ? true : false,
        numberOfRotors: _.random(0, 10),
        color: _.sample(["Red", "Green", "Blue", "Yellow"])
    } as RobotConfig;
    let statuses = _.sampleSize(_.valuesIn(robotStatuses), _.random(0, _.size(robotStatuses)));

    return new Robot({
        robotId: randomId,
        name: "Johnny " + randomId,
        configuration: robotConfig,
        statuses: statuses
    })
}