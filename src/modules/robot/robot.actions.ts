import Robot from "./robot";

export const createRobot = (params: any) => ({
    type: "CREATE_ROBOT",
    payload: {
        robot: new Robot(params)
    }
})

export const extinguishRobot = (robotId: number) => ({
    type: "CREATE_ROBOT",
    payload: {
        robotId: robotId
    }
})

export const recycleRobots = (robotIds: number[]) => {

}

export const shipRobots = (robotIds: number[]) => {

}