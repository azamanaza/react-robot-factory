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
    LOOSE_SCREWS: "lose screws",
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