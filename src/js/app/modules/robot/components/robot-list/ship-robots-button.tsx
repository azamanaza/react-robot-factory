import * as React from "react";
import { map } from "lodash";
import RobotListItem from "./types";

export interface StateProps {
    robots: RobotListItem[]
}
       
export interface DispatchProps {
    shipRobots: (robotIds: number[]) => any
}

type ShipRobotsButtonProps = StateProps & DispatchProps;

export default class ShipRobotsButtonComponent extends React.Component<ShipRobotsButtonProps, {}> {

    getRobotIds() {
        return map(this.props.robots, (robot: RobotListItem) => robot.robotId);
    }

    render() {
        let button;
        if (this.props.robots.length > 0) {
            button = <button className="ship-robots" onClick={() => this.props.shipRobots(this.getRobotIds())}>Ship Robots</button>
        } else {
            button = "";
        }
        return button;
    }
}