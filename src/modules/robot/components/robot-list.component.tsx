import * as React from "react";
import * as _ from "lodash";
import Robot from "../robot";
import RbRobotComponent from "./robot.component";

export interface RobotListComponentProp { robots: Robot[] }

export class RbRobotListComponent extends React.Component<RobotListComponentProp, {}> {
    getRobots(): Robot[] {
        return this.props.robots;
    }

    render() {
        return <ul>
            {
               _.map(this.getRobots(), (robot, index) => {
                    return <li key={ index }><RbRobotComponent robot={robot} /></li>;
                })
            }
        </ul>;
    }
}