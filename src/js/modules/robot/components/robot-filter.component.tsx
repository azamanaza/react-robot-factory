import * as React from "react";
import { robotFilters } from "./../robot";

export interface RobotFilterComponentProps {
    clickHandler: (filter: string) => void;
}

export default class RbRobotListComponent extends React.Component<RobotFilterComponentProps, {}> {
    setFilter(filter: string): void {
        if (this.props.clickHandler) {
            this.props.clickHandler(filter);
        }
    }

    render() {
        return (
            <div className="robot-filters row align-left">
                <div className="col">
                    <div className="btn" onClick={() => this.setFilter(robotFilters.SHOW_ALL)}> ALL </div>
                    <div className="btn" onClick={() => this.setFilter(robotFilters.FACTORY_SECOND)}> Factory Second </div>
                    <div className="btn" onClick={() => this.setFilter(robotFilters.QA_PASSED)}> Qa Passed </div>
                </div>
            </div>
        );
    }
}