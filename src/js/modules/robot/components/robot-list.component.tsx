import * as React from "react";
import * as _ from "lodash";
import Robot from "../robot";
import RbRobotComponent from "./robot.component";

interface RobotListComponentProp { robots: Robot[] }

export default class RbRobotListComponent extends React.Component<RobotListComponentProp, {}> {
    getRobots(): Robot[] {
        console.log(this.props.robots);
        return this.props.robots;
    }

    render() {
        return <div className="row">
            {
               _.map(this.getRobots(), (robot) => {
                    return <div className="col" key={robot.robotId} > 
                        <div className="card"><RbRobotComponent robot={robot} /></div>
                    </div>;
                })
            }
        </div>;
    }
}