import * as _ from "lodash";
import * as React from "react";
import { EXTINGUISH_ROBOTS, RECYCLE_ROBOTS, ADD_ROBOT_SHIPMENT, REMOVE_ROBOT_SHIPMENT } from "./redux/action-types";
import { shouldExtinguish, shouldRecycle, isQaPassed } from "./../../helpers/robot-stage.helper";
import RobotListItem from "../robot-list/types";

export interface StateProp { 
    robot: RobotListItem
}

export interface DispatchProp {
    onActionButtonClick: (actionName: string, robotId: number) => any
}

type RobotActionsProps = StateProp & DispatchProp;

export default class RobotActions extends React.Component<RobotActionsProps, {}> {

    onActionButtonClick(actionName: string): void {
        console.log(actionName);
        this.props.onActionButtonClick(actionName, this.props.robot.robotId);
    }

    render() {
        return <div className="robot-actions">
            { this.renderExtinguishButton() }
            { this.renderRecycleRobotButton() }
            { this.renderAddRemoveReadyToShipButton() }
        </div>;
    }

    renderExtinguishButton() {
        let button;

        if (shouldExtinguish(this.props.robot)) {
            button = <button onClick={() => this.onActionButtonClick(EXTINGUISH_ROBOTS)}> Extinguish </button>
        }
           
        return button;
    }

    renderRecycleRobotButton() {
        let button;

        if (shouldRecycle(this.props.robot)) {
            button = <button onClick={() => this.onActionButtonClick(RECYCLE_ROBOTS)}> Recycle </button>
        }
           
        return button;
    }

    renderAddRemoveReadyToShipButton() {
        let button;

        if (isQaPassed(this.props.robot) && !this.props.robot.isForShipping) {
            button = <button onClick={() => this.onActionButtonClick(ADD_ROBOT_SHIPMENT)}> Add to Shipment </button>
        }
          
        if (isQaPassed(this.props.robot) && this.props.robot.isForShipping) {
            button = <button onClick={() => this.onActionButtonClick(REMOVE_ROBOT_SHIPMENT)}> Remove from Shipment </button>
        }

        return button;
    }

}