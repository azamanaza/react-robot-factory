import * as _ from "lodash";
import * as React from "react";
import Robot from "../robot";

export interface RobotComponentProp { robot: Robot }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class RbRobotComponent extends React.Component<RobotComponentProp, {}> {

    getRobotJson(): string {
        return JSON.stringify(this.props.robot, null, 2);
    }

    getStatusClasses(): string {
        let statuses = _.map(_.get(this.props, "robot.statuses", []), status => _.replace(status, " ", "-"));
        statuses.push("robot-status");
        return _.join(statuses, " ");
    }

    render() {
        return <div className="robot">
            <div className={this.getStatusClasses()} ></div>
            <pre>{this.getRobotJson()}</pre>
        </div>;
    }
}