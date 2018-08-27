import * as _ from "lodash";
import * as React from "react";
import { RobotConfig } from "./../robot";

export interface RbRobotConfigurationsProp { 
    configuration: RobotConfig
}

const configToIconMap: _.Dictionary<string> = {
    hasSentience: "fa-brain",
    hasWheels: "fa-compact-disc",
    hasTracks: "fa-life-ring",
    numberOfRotors: "fa-cog",
    color: "fa-brush"
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class RbRobotConfigurations extends React.Component<RbRobotConfigurationsProp, {}> {

    renderConfigIcon(configKey: string): JSX.Element {
        let classNames: string[] = ["fas"]
        classNames.push(configToIconMap[configKey]);
        
        if (_.isBoolean(this.props.configuration[configKey]) && this.props.configuration[configKey] === false ) {
            classNames.push("disabled");
        }

        return <i className={_.join(classNames, " ")}></i>
    }

    render() {
        return <ul className="robot-configurations">
            {_.map(_.keys(this.props.configuration), (configKey: string, index: number) => {
                return <li key={index} className={_.kebabCase(configKey)}>
                    {this.renderConfigIcon(configKey)}
                </li>
            })}
        </ul>;
    }
}