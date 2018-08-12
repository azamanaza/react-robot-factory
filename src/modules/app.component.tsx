import * as React from "react";
import RbRobotListContainer from "./robot/containers/robot-list.container";

export interface AppComponentProp { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppComponentProp, {}> {

    getCompiler(): string {
        return this.props.compiler;
    }

    getFramework(): string  {
        return this.props.framework;
    }

    render() {
        return <div>
            <h1>Hello from {this.getCompiler()} and {this.getFramework()}!</h1>
            <RbRobotListContainer />
        </div>;
    }
}