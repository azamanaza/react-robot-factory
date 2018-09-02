import { createTestRobots } from "./../helpers/create-random-bot";
import * as _ from "lodash";
import Robot from "./../robot.type";
import { Promise } from "es6-promise";

export default class RobotService {

    getRobots(): Promise<Robot[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, _.random(.5,1)*1000, createTestRobots(_.random(10, 30)));
        });
    }

    extinguishRobot(robotId: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, _.random(.5,1)*1000, robotId);
        });
    }

    recycleRobots(robotIds: number[]): Promise<number[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, _.random(.5,1)*1000, robotIds);
        });
    }

    shipRobots(robotIds: number[]): Promise<number[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, _.random(.5,1)*1000, robotIds);
        });
    }
    
}