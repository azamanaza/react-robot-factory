import * as _ from "lodash";
import * as React from "react";
import Robot, { robotStatuses } from "../robot";

export interface RobotComponentProp { 
    robot: Robot
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class RbRobotComponent extends React.Component<RobotComponentProp, {}> {

    getRobotJson(): string {
        return JSON.stringify(this.props.robot, null, 2);
    }

    getStatusClasses(): string[] {
        return _.map(this.props.robot.getStatuses(), status => _.replace(status, " ", "-"));
    }

    onActionButtonClick(actionName: string): void {
        console.log(actionName);
    }

    render() {

        return <div className="robot">
            <div className="status">
                {this.renderStatuses()}
            </div>
            <div className="actions">
                {this.renderExtinguishButton()}
            </div>
            <pre>{this.getRobotJson()}</pre>
        </div>;
    }

    renderStatuses() {
        return _.map(this.getStatusClasses(), (status, index) => {
            return <div key={index} className={status}> </div>;
        })
    }

    renderExtinguishButton() {
        let button;

        if (this.props.robot.isOnfire()) {
            button = <button onClick={() => this.onActionButtonClick("extinguish")}> Extinguish </button>
        }
           
        return button;
    }
}