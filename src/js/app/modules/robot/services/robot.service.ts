import { map, random } from "lodash";
import { Promise } from "es6-promise";

import connection from "./connection";
import Robot from "../../../../common/models/robot";

export class RobotService {

    private connection: any;

    constructor(connection: any) {
        this.connection = connection
    }

    getRobots(): Promise<Robot[]> {
        return new Promise((resolve, reject) => {
            this.connection.get("/robots")
            .then((response: any) => {
                return resolve(map(response.data, (item: any) => {
                    return new Robot(item);
                }));
            }).catch((response: any) => {
                return reject(response.status);
            });
        });
    }

    extinguishRobot(robotId: number): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.get("/robots/" + robotId + "/extinguish.json")
            .then((response: any) => {
                return resolve(response.data);
            }).catch((response: any) => {
                return reject(response.status);
            });
        });
    }

    recycleRobots(robotIds: number[]): Promise<number[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, random(.5,1)*1000, robotIds);
        });
    }

    shipRobots(robotIds: number[]): Promise<number[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, random(.5,1)*1000, robotIds);
        });
    }
    
}

export default new RobotService(connection);