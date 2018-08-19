import { connect } from 'react-redux';
import * as _ from "lodash";
import Robot from "../robot";
import RbRobotListComponent from "../components/robot-list.component";
import { factorySecondStatuses, robotFilters } from "../robot"

const filterList = (state: any): Robot[] => {
    let robots: Robot[];
    switch(state.currentFilter) {
        case robotFilters.FACTORY_SECOND:
            robots = _.filter(state.robots, (robot: Robot) => !hasPassedQa(robot));
            break;
        case robotFilters.QA_PASSED:
            robots = _.filter(state.robots, (robot: Robot) => hasPassedQa(robot));
            break;
        default:
            robots = state.robots;
    }
    
    return robots;
}

const hasPassedQa = (robot: Robot) => {
    return _.size(_.intersection(
        robot.statuses, 
        factorySecondStatuses
    )) == 3;
}

const mapStateToProps = (state: any) => {
    return {
        robots: filterList(state)
    };
}

const RbRobotListContainer = connect(
    mapStateToProps
)(RbRobotListComponent)

export default RbRobotListContainer;