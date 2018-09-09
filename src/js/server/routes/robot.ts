import { Router } from "express";

import RobotController from "./../controllers/robot.controller";
const router = Router();

let robotController = new RobotController();

router.get("/", robotController.getRobots);

router.post("/:id/extinguish.json", robotController.extinguishRobot);

router.post("/recycle.json", robotController.recycleRobots);

router.put("/shipment/create", robotController.createShipment);
    
export default router;