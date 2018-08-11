import * as React from "react";
import { RbRobotComponent } from "./robot/robot.component";
import Robot from "./robot/robot";

export interface AppComponentProp { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppComponentProp, {}> {

    getTestBot(): Robot {
        return {
            name: "test",
            gearCount: 1,
            burningState: false
        } as Robot;
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
            <RbRobotComponent robot={this.getTestBot()} />
        </div>;
    }
}