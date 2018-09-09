import { Request, Response } from 'express';

import { createTestRobots } from "../../common/helpers/create-random-bot";

export default class RobotController {

    public getRobots(req: Request, res: Response) {
        res.json(createTestRobots());
    }

    public extinguishRobot(req: Request, res: Response) {
        res.json(createTestRobots());
    }

    public recycleRobots(req: Request, res: Response) {
        res.json(createTestRobots());
    }

    public  createShipment(req: Request, res: Response) {
        res.json(createTestRobots());
    }
    
}