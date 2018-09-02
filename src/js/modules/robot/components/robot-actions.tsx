import * as _ from "lodash";
import * as React from "react";
import Robot, { robotStatuses } from "./../robot.type";
import RbRobotStatuses from "./robot-statuses.component";
import RbRobotConfigurations from "./robot-configurations.component";

export interface StateProp { 
    robot: Robot
}

export interface DispatchProp {
    onActionButtonClick: (action: string) => any
}

type RobotActionsProps = StateProp & DispatchProp;

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class RobotActions extends React.Component<RobotActionsProps, {}> {

    getRobotJson(): string {
        return JSON.stringify(this.props.robot, null, 2);
    }

    onActionButtonClick(actionName: string): void {
        console.log(actionName);
        this.props.onActionButtonClick(actionName);
    }

    render() {
        let robot = this.props.robot;
        return <div className="robot-actions">
            { this.renderExtinguishButton() }
            { this.renderRecycleRobotButton() }
            { this.renderAddToReadyToShipButton() }
        </div>;
    }

    renderExtinguishButton() {
        let button;

        if (this.props.robot.isOnfire()) {
            button = <button onClick={() => this.onActionButtonClick("extinguish")}> Extinguish </button>
        }
           
        return button;
    }

    renderRecycleRobotButton() {
        let button;

        if (this.props.robot.isOnfire()) {
            button = <button onClick={() => this.onActionButtonClick("recycle")}> Recycle </button>
        }
           
        return button;
    }

    renderAddToReadyToShipButton() {
        let button;

        if (this.props.robot.isOnfire()) {
            button = <button onClick={() => this.onActionButtonClick("add-to-shipment")}> Add to Shipment </button>
        }
           
        return button;
    }
}