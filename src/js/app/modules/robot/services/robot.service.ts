import { map, random } from "lodash";
import { Promise } from "es6-promise";
import axios, { AxiosPromise, AxiosInstance, AxiosResponse } from "axios";
import Robot from "../../../../common/models/robot";
import Axios from "axios";
export class RobotService {

    private connection: AxiosInstance;

    constructor(connection: AxiosInstance) {
        this.connection = connection
    }

    getRobots(): Promise<Robot[]> {
        return new Promise((resolve, reject) => {
            this.connection.get("/robots")
            .then((response: AxiosResponse) => {
                return resolve(map(response.data, (item: any) => {
                    return new Robot(item);
                }));
            }).catch((response: AxiosResponse) => {
                return reject(response.status);
            });
        })
    }

    extinguishRobot(robotId: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, random(.5,1)*1000, robotId);
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

export default new RobotService(axios.create());