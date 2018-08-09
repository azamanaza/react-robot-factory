import * as React from "react";

export interface RobotComponentProp { robot: Robot }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Robot extends React.Component<RobotComponentProp, {}> {
    render() {
        return <div></div>;
    }
}