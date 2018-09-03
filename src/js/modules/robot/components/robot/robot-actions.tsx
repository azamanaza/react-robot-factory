import * as _ from "lodash";
import * as React from "react";
import Robot from "./../../robot.type";
import { shouldExtinguish, shouldRecycle, isQaPassed } from "./../../helpers/robot-stage.helper";

export interface StateProp { 
    robot: Robot
}

export interface DispatchProp {
    onActionButtonClick: (actionName: string, robotId: number) => any
}

type RobotActionsProps = StateProp & DispatchProp;

export default class RobotActions extends React.Component<RobotActionsProps, {}> {

    onActionButtonClick(actionName: string): void {
        this.props.onActionButtonClick(actionName, this.props.robot.robotId);
    }

    render() {
        return <div className="robot-actions">
            { this.renderExtinguishButton() }
            { this.renderRecycleRobotButton() }
            { this.renderAddToReadyToShipButton() }
        </div>;
    }

    renderExtinguishButton() {
        let button;

        if (shouldExtinguish(this.props.robot)) {
            button = <button onClick={() => this.onActionButtonClick("extinguish")}> Extinguish </button>
        }
           
        return button;
    }

    renderRecycleRobotButton() {
        let button;

        if (shouldRecycle(this.props.robot)) {
            button = <button onClick={() => this.onActionButtonClick("recycle")}> Recycle </button>
        }
           
        return button;
    }

    renderAddToReadyToShipButton() {
        let button;

        if (isQaPassed(this.props.robot)) {
            button = <button onClick={() => this.onActionButtonClick("add-to-shipment")}> Add to Shipment </button>
        }
           
        return button;
    }
}