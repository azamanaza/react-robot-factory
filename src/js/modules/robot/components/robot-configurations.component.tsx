import * as _ from "lodash";
import * as React from "react";
import { RobotConfig } from "./../robot";

export interface RbRobotConfigurationsProp { 
    configuration: RobotConfig
}

const configDisplayMap: _.Dictionary<any> = {
    hasSentience: {
        className: "fa-brain",
        label: "Sentient"
    },
    hasWheels: {
        className: "fa-compact-disc",
        label: "Has wheels"
    },
    hasTracks: {
        className: "fa-life-ring",
        label: "Has tracks"
    },
    numberOfRotors: {
        className: "fa-cog",
        label: "Number of rotors"
    },
    color: {
        className: "fa-brush",
        label: "Color"
    }
}
export default class RbRobotConfigurations extends React.Component<RbRobotConfigurationsProp, {}> {

    renderConfigIcon(configKey: string): JSX.Element {
        let classNames: string[] = ["fas"]
        classNames.push(configDisplayMap[configKey].className);
        
        if (_.isBoolean(this.props.configuration[configKey]) && this.props.configuration[configKey] === false ) {
            classNames.push("disabled");
        }

        return <i className={_.join(classNames, " ")}></i>
    }

    getConfigDisplay(configKey: string): any {
        let display: any = undefined;
        if (configKey === "numberOfRotors") {
            display = configDisplayMap[configKey].label + ": " + this.props.configuration[configKey];
        } else if(configKey === "color") {
            display = <span className="robot-color" style={{backgroundColor: this.props.configuration[configKey]}}></span>
        } else {
            display = configDisplayMap[configKey].label;
        }
        return display;
    }

    render() {
        return <ul className="robot-configurations">
            {_.map(_.keys(this.props.configuration), (configKey: string, index: number) => {
                return <li key={index} className={_.kebabCase(configKey) + " row align-left"}>
                    <div className="col">
                        <div className="config-icon va-mid-wrapper">{this.renderConfigIcon(configKey)}</div>
                    </div>
                    <div className="col">
                        <div className="config-value">
                            {this.getConfigDisplay(configKey)}
                        </div>
                    </div>
                </li>
            })}
        </ul>;
    }
}