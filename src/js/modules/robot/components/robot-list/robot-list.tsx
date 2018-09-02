import * as React from "react";
import * as _ from "lodash";
import Robot from "./../../robot.type";
import RbRobotComponent from "./../robot.component";

export interface StateProps {
    robots: Robot[]
}
       
export interface DispatchProps {
    getRobots: () => any
}

type RobotListComponentProp = StateProps & DispatchProps;

export default class RbRobotListComponent extends React.Component<RobotListComponentProp, {}> {

    componentDidMount() {
        this.props.getRobots();
    }

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