import * as robotStageHelper from "./robot-stage.helper";
import Robot, { robotStatuses } from "./../robot.type";
import { map, cloneDeep } from "lodash";

let sampleRobot = new Robot({
    robotId: 1,
    name: "test 1",
    configuration: {
        hasSentience: true,
        hasWheels: true,
        hasTracks: true,
        numberOfRotors: 1,
        color: "Blue"
    },
    statuses: map(robotStatuses, (status: string) => status)
});

describe("Tests for Robot stage helper functions.", () => {
    it("Any robot that has sentience and is on fire should be extinguished.", () => {
        let clonedBot = cloneDeep(sampleRobot);
        expect(robotStageHelper.shouldExtinguish(clonedBot)).toBe(true);

        clonedBot = cloneDeep(sampleRobot);
        clonedBot.configuration.hasSentience = false;
        expect(robotStageHelper.shouldExtinguish(clonedBot)).toBe(false);

        clonedBot = cloneDeep(sampleRobot);
        clonedBot.statuses = [];
        expect(robotStageHelper.shouldExtinguish(clonedBot)).toBe(false);
    });

    describe("Any robot meeting any of the following conditions should be recycled:", () => {
        let notARecyclableRobot = cloneDeep(sampleRobot);
        notARecyclableRobot.configuration.numberOfRotors = 4;
        notARecyclableRobot.configuration.color = "Red";
        notARecyclableRobot.configuration.hasTracks = false;
        notARecyclableRobot.configuration.hasWheels = false;
        notARecyclableRobot.statuses = [];
    
        describe("Has fewer than 3 or greater than 8 rotors.", () => {
            it("Has greater than 2 but less than 9 rotors.", () => {
                expect(robotStageHelper.shouldRecycle(notARecyclableRobot)).toBe(false);
            });
    
            it("Has less than 3 rotors.", () => {
                let robotClone = cloneDeep(notARecyclableRobot);
                robotClone.configuration.numberOfRotors = 2;
                expect(robotStageHelper.shouldRecycle(robotClone)).toBe(true);
            });
    
            it("Has more than 8 rotors", () => {
                let robotClone = cloneDeep(notARecyclableRobot);
                robotClone = cloneDeep(notARecyclableRobot);
                robotClone.configuration.numberOfRotors = 9;
                expect(robotStageHelper.shouldRecycle(robotClone)).toBe(true);
            });
    
            it("Has 3 rotors.", () => {
                let robotClone = cloneDeep(notARecyclableRobot);
                robotClone = cloneDeep(notARecyclableRobot);
                robotClone.configuration.numberOfRotors = 3;
                expect(robotStageHelper.shouldRecycle(robotClone)).toBe(false);
            });

            it("Has 8 rotors.", () => {
                let robotClone = cloneDeep(notARecyclableRobot);
                robotClone = cloneDeep(notARecyclableRobot);
                robotClone.configuration.numberOfRotors = 8;
                expect(robotStageHelper.shouldRecycle(robotClone)).toBe(false);
            });

        });
    
        it("Colored blue", () => {
            let robotClone = cloneDeep(notARecyclableRobot);
            robotClone.configuration.color = "Blue";
            expect(robotStageHelper.shouldRecycle(robotClone)).toBe(true);
        });

        it("Has tracks and wheels.", () => {
            let robotClone = cloneDeep(notARecyclableRobot);
            robotClone.configuration.hasTracks = true;
            robotClone.configuration.hasWheels = true;
            expect(robotStageHelper.shouldRecycle(robotClone)).toBe(true);
        });

        it("Sentient and has loose screws.", () => {
            let robotClone = cloneDeep(notARecyclableRobot);
            robotClone.configuration.hasSentience = true;
            robotClone.statuses = [robotStatuses.LOOSE_SCREWS];
            expect(robotStageHelper.shouldRecycle(robotClone)).toBe(true);
        });

        it("Is on fire.", () => {
            let robotClone = cloneDeep(notARecyclableRobot);
            robotClone.statuses = [robotStatuses.ON_FIRE];
            expect(robotStageHelper.shouldRecycle(robotClone)).toBe(true);
        });
    });

    describe("Any robot not burning and are not for recyclicng.", () => {
        let clearedRobot = cloneDeep(sampleRobot);
        clearedRobot.configuration.numberOfRotors = 4;
        clearedRobot.configuration.color = "Red";
        clearedRobot.configuration.hasSentience = false;
        clearedRobot.configuration.hasTracks = true;
        clearedRobot.configuration.hasWheels = false;
        clearedRobot.statuses = [];

        describe("Robots that are for factory second.", () => {
            it("Rusty, loose screws, paint scratched robots.", () => {
                let clonedClearRobot = cloneDeep(clearedRobot);
                clonedClearRobot.statuses = [robotStatuses.LOOSE_SCREWS, robotStatuses.RUSTY, robotStatuses.PAINT_SCRATCHED];
                expect(robotStageHelper.isFactorySecond(clonedClearRobot)).toBe(true);
            });
        });

        describe("QA Passed robots that.", () => {
            let clearedRobot = cloneDeep(sampleRobot);
            clearedRobot.configuration.numberOfRotors = 4;
            clearedRobot.configuration.color = "Red";
            clearedRobot.configuration.hasSentience = false;
            clearedRobot.configuration.hasTracks = true;
            clearedRobot.configuration.hasWheels = false;
            clearedRobot.statuses = [];

            it("Red robot with 4 rotors on tracks with no status.", () => {
                expect(robotStageHelper.isQaPassed(clearedRobot)).toBe(true);
            });
        });
    });
});
