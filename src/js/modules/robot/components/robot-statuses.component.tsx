import * as _ from "lodash";
import * as React from "react";

export interface RbRobotStatusesProp { 
    statuses: string[]
}

const statusToIconMap: _.Dictionary<string> = {
    onFire: "fa-fire color--red",
    rusty: "fa-brush color--orange",
    looseScrews: "fa-cog",
    paintScratched: "fa-brush"
}

export default class RbRobotStatuses extends React.Component<RbRobotStatusesProp, {}> {
    render() {
        return <ul className="robot-statuses row align-left">
            {_.map(this.props.statuses, (status: string, index: number) => {
                return <li className="col" key={index}>{status}</li>
            })}
        </ul>;
    }
}