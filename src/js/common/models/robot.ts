import { Dictionary } from "lodash";

export default class Robot implements RobotInterface {
    constructor(params: RobotInterface) {
        this.robotId = params.robotId;
        this.name = params.name;
        this.configuration = params.configuration;
        this.statuses = params.statuses;
    }
    robotId: number;
    name: string;
    configuration: RobotConfig;
    statuses: string[];
}

export interface RobotInterface {
    robotId: number;
    name: string;
    configuration: RobotConfig;
    statuses: string[];
}

export interface RobotConfig {
    hasSentience: boolean
    hasWheels: boolean
    hasTracks: boolean
    numberOfRotors: number
    color: string
}

export const robotStatuses: Dictionary<string> = {
    ON_FIRE: "on fire",
    RUSTY: "rusty",
    LOOSE_SCREWS: "loose screws",
    PAINT_SCRATCHED: "paint scratched"
};