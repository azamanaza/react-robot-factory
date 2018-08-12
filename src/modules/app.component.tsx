import * as React from "react";
import RbRobotComponent from "./robot/components/robot.component";
import Robot from "./robot/robot";

export interface AppComponentProp { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppComponentProp, {}> {

    getTestBot(): Robot {
        return new Robot({
            robotId: 1,
            name: "Johnny 1",
            robotConfigurations: {
                hasSentience: true,
                hasWheels: true,
                hasTracks: true,
                numberOfRotors: 5,
                color: "Blue"
            },
            statuses: []
        });
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