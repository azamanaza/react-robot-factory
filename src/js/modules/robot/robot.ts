import { get, includes } from "lodash";

export default class Robot {
    constructor(params: any) {
        this.robotId = params.robotId;
        this.name = params.name;
        this.configuration = params.configuration;
        this.statuses = params.statuses;
    }
    robotId: number
    name: string 
    configuration: RobotConfig
    statuses: string[]

    getStatuses(): string[] {
        return get(this, "statuses", []);
    }

    isOnfire(): boolean {
        return includes(this.statuses, robotStatuses.ON_FIRE);
    }

    isRusty(): boolean {
        return includes(this.statuses, robotStatuses.RUSTY);
    }

    hasLooseScrews(): boolean {
        return includes(this.statuses, robotStatuses.LOOSE_SCREWS);
    }

    isPaintScratched(): boolean {
        return includes(this.statuses, robotStatuses.PAINT_SCRATCHED);
    }
}

export class RobotConfig {
    hasSentience: boolean
    hasWheels: boolean
    hasTracks: boolean
    numberOfRotors: number
    color: string
}

export const robotStatuses = {
    ON_FIRE: "on fire",
    RUSTY: "rusty",
    LOOSE_SCREWS: "loose screws",
    PAINT_SCRATCHED: "paint scratched"
};

export const factorySecondStatuses = [
    robotStatuses.RUSTY,
    robotStatuses.LOOSE_SCREWS,
    robotStatuses.PAINT_SCRATCHED
];

export const robotFilters = {
    SHOW_ALL: "all",
    FACTORY_SECOND: "factory-second",
    QA_PASSED: "qa-passed"
}