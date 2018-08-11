import * as React from "react";
import Robot from "./robot";

export interface RobotComponentProp { robot: Robot }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class RbRobotComponent extends React.Component<RobotComponentProp, {}> {

    getRobotJson(): string {
        return JSON.stringify(this.props.robot, null, 2);
    }
    
    render() {
        return <div>{this.getRobotJson()}</div>;
    }
}