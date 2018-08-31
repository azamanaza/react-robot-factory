import { connect } from 'react-redux';
import * as _ from "lodash";
import Robot from "../robot";
import RbRobotListComponent from "../components/robot-list.component";
import { robotFilters } from "../robot"
import * as robotStatusHelper from "./../helpers/robot-stage.helper";

const filterList = (state: any): Robot[] => {
    let robots: Robot[];
    switch(state.currentFilter) {
        case robotFilters.FACTORY_SECOND:
            robots = _.filter(state.robots, (robot: Robot) => robotStatusHelper.isFactorySecond(robot));
            break;
        case robotFilters.QA_PASSED:
            robots = _.filter(state.robots, (robot: Robot) => robotStatusHelper.isQaPassed(robot));
            break;
        default:
            robots = state.robots;
    }
    
    return robots;
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