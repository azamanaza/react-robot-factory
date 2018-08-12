import * as React from "react";
import Robot from "./robot/robot";
import { RbRobotListComponent } from "./robot/robot-list.component";

export interface AppComponentProp { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppComponentProp, {}> {

    getTestBot(): Robot {
        return {
            id: 1,
            name: "Johnny 1",
            configuration: {
                hasSentience: true,
                hasWheels: true,
                hasTracks: true,
                numberOfRotors: 1,
                color: "Black"
            },
            statuses: []
        } as Robot;
    }

    getRobots(): Robot[] {
        return [this.getTestBot()];
    }

    getCompiler(): string {
        return this.props.compiler;
    }

    getFramework(): string  {
        return this.props.framework;
    }

    render() {
        return <div>
            <h1>Hello from {this.getCompiler()} and {this.getFramework()}!</h1>
            <RbRobotListComponent robots={this.getRobots()} />
        </div>;
    }
}