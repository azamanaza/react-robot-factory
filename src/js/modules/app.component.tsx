import * as React from "react";
import RbRobotFilterContainer from "./robot/components/robot-filter/robot-filter.container";
import RbRobotListContainer from "./robot/components/robot-list/robot-list.container";
import RobotShipmentListContainer from "./robot/components/robot-list/robot-shipment-list.container";

export interface AppComponentProp { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
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
                    <h1>Shipment List</h1>
                    <RobotShipmentListContainer />
                </div>
            </div>
        </div>;
    }
}