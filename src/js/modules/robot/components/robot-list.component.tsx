import * as React from "react";
import * as _ from "lodash";
import Robot from "../robot";
import RbRobotComponent from "./robot.component";

interface RobotListComponentProp { robots: Robot[] }

export default class RbRobotListComponent extends React.Component<RobotListComponentProp, {}> {
    render() {
        return <div className="row align-left">
            {
               _.map(this.props.robots, (robot) => {
                    return <div className="col" key={robot.robotId} > 
                        <div className="card"><RbRobotComponent robot={robot} /></div>
                    </div>;
                })
            }
        </div>;
    }
}