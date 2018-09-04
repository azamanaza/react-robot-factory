import { includes, intersection, isEmpty } from "lodash";
import Robot, { robotStatuses } from "./../robot.type";

export const shouldExtinguish = (robot: Robot): boolean => {
    return robot.configuration.hasSentience 
        && includes(robot.statuses, robotStatuses.ON_FIRE);
}

export const shouldRecycle = (robot: Robot): boolean => {
    return (robot.configuration.numberOfRotors < 3 || robot.configuration.numberOfRotors > 8)
        || robot.configuration.color === "Blue"
        || (robot.configuration.hasTracks && robot.configuration.hasWheels)
        || (robot.configuration.hasWheels && includes(robot.statuses, robotStatuses.RUSTY))
        || (robot.configuration.hasSentience && includes(robot.statuses, robotStatuses.LOOSE_SCREWS))
        || includes(robot.statuses, robotStatuses.ON_FIRE);
}

export const isFactorySecond = (robot: Robot): boolean => {
    return !shouldExtinguish(robot) && !shouldRecycle(robot)
        && intersection(robot.statuses, [robotStatuses.LOOSE_SCREWS, robotStatuses.PAINT_SCRATCHED, robotStatuses.RUSTY]).length > 0;
}

export const isQaPassed = (robot: Robot): boolean => {
    return !shouldExtinguish(robot) 
        && !shouldRecycle(robot)
        && isEmpty(robot.statuses);
}