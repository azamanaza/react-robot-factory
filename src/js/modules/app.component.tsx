import * as React from "react";
import RbRobotFilterContainer from "./robot/components/robot-filter/robot-filter.container";
import RbRobotListContainer from "./robot/components/robot-list/robot-list.container";

export interface AppComponentProp { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component {
    render() {
        return <div>
            <h1>Robot Factory</h1>
            <RbRobotFilterContainer />
            <RbRobotListContainer />
        </div>;
    }
}