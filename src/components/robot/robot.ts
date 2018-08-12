export default class Robot {
    id: number
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

export const RobotStatuses = {
    ON_FIRE: "on fire",
    RUSTY: "rusty",
    LOOSE_SCREWS: "lose screws",
    PAINT_SCRATCHED: "paint scratched"
};
