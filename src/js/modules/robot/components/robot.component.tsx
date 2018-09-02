import * as _ from "lodash";
import * as React from "react";
import Robot, { robotStatuses } from "./../robot.type";
import RbRobotStatuses from "./robot-statuses.component";
import RbRobotConfigurations from "./robot-configurations.component";

export interface RobotComponentProp { 
    robot: Robot
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class RbRobotComponent extends React.Component<RobotComponentProp, {}> {

    onActionButtonClick(actionName: string): void {
        console.log(actionName);
    }

    render() {
        let robot = this.props.robot;
        return <div className="robot">
            <RbRobotStatuses statuses={robot.statuses} />
            <div>ID: {robot.robotId}</div>
            <div>Name: {robot.name}</div>
            <div></div>
            <RbRobotConfigurations configuration={robot.configuration} />
            <div className="actions">
                {this.renderExtinguishButton()}
            </div>
        </div>;
    }

    renderExtinguishButton() {
        let button;

        if (this.props.robot.isOnfire()) {
            button = <button onClick={() => this.onActionButtonClick("extinguish")}> Extinguish </button>
        }
           
        return button;
    }
}