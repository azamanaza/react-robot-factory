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
            <div>
                <button onClick={() => this.setFilter(robotFilters.SHOW_ALL)}> ALL </button>
                <button onClick={() => this.setFilter(robotFilters.FACTORY_SECOND)}> Factory Second </button>
                <button onClick={() => this.setFilter(robotFilters.QA_PASSED)}> Qa Passed </button>
            </div>
        );
    }
}