import * as React from "react";
import RbRobotFilterContainer from "./robot/components/robot-filter/robot-filter.container";
import RbRobotListContainer from "./robot/components/robot-list/robot-list.container";
import RobotShipmentListContainer from "./robot/components/robot-list/robot-shipment-list.container";
import ShipRobotsButtonContainer from "./robot/components/robot-list/ship-robots-container";

export interface AppComponentProp { compiler: string; framework: string; }

export class App extends React.Component {
    render() {
        return <div>
            <h1>Robot Factory</h1>
            <RbRobotFilterContainer />
            <div className="robot-lists row align-left">
                <div className="col">
                    <h1>QA List</h1>
                    <RbRobotListContainer />
                </div>
                <div className="col">
                    <h1 className="inline-block">Shipment List</h1>
                    <ShipRobotsButtonContainer />
                    <RobotShipmentListContainer />
                </div>
            </div>
        </div>;
    }
}