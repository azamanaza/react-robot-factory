import * as _ from "lodash";
import * as React from "react";
import Robot from "../../robot.type";
import RbRobotStatuses from "./robot-statuses.component";
import RbRobotConfigurations from "./robot-configurations.component";
import RobotActionsContainer from "./robot-actions.container";

export interface RobotComponentProp { 
    robot: Robot
}
export default class RbRobotComponent extends React.Component<RobotComponentProp, {}> {

    render() {
        let robot = this.props.robot;
        return <div className="robot">
            <RbRobotStatuses statuses={robot.statuses} />
            <div>ID: {robot.robotId}</div>
            <div>Name: {robot.name}</div>
            <RbRobotConfigurations configuration={robot.configuration} />
            <RobotActionsContainer robotId={robot.robotId} />
        </div>;
    }
}