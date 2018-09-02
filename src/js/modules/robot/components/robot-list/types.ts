import Robot from "./../../robot.type";

export default class RobotListItem extends Robot {
    isForShipping: boolean = false

    setForShipping(flag: boolean): void {
        this.isForShipping = flag;
    }
}