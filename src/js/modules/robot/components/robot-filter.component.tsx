import * as React from "react";
import { robotFilters } from "./../robot";

export interface StateProps {
    currentFilter: string;
}

export interface DispatchProps {
    clickHandler: (filter: string) => void;
}

export type RbRobotListComponentProps = StateProps & DispatchProps;
export default class RbRobotListComponent extends React.Component<RbRobotListComponentProps, {}> {

    setFilter(filter: string): void {
        if (this.props.clickHandler) {
            this.props.clickHandler(filter);
        }
    }

    getClassName(filter: string): string {
        return this.props.currentFilter === filter ? " active" : "";
    }

    renderButton(filterValue: string, filterLabel: string): JSX.Element {
        return <div className={"btn" + this.getClassName(filterValue)} onClick={() => this.setFilter(filterValue)}> {filterLabel} </div>
    }

    render() {
        return (
            <div className="robot-filters row align-left">
                <div className="col">
                    { this.renderButton(robotFilters.SHOW_ALL, "All") }
                    { this.renderButton(robotFilters.FACTORY_SECOND, "Factory Second") }
                    { this.renderButton(robotFilters.QA_PASSED, "Qa Passed") }
                </div>
            </div>
        );
    }
}