import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { filter } from "lodash";

import RbRobotListComponent, { StateProps, DispatchProps} from "./robot-list";
import { robotFilters } from "../robot-filter/robot-filter.constants"
import * as robotStatusHelper from "../../helpers/robot-stage.helper";
import { getRobotsThunk } from "./redux/actions";
import RobotListItem from "./types";

const filterList = (state: any): RobotListItem[] => {
    let robots: RobotListItem[];
    switch(state.currentFilter) {
        case robotFilters.FACTORY_SECOND:
            robots = filter(state.robots, (robot: RobotListItem) => robotStatusHelper.isFactorySecond(robot) && !robot.isForShipping);
            break;
        case robotFilters.QA_PASSED:
            robots = filter(state.robots, (robot: RobotListItem) => robotStatusHelper.isQaPassed(robot) && !robot.isForShipping);
            break;
        default:
            robots = filter(state.robots, (robot: RobotListItem) => !robot.isForShipping);
    }
    
    return robots;
}

const mapStateToProps = (state: any) : StateProps => {
    return {
        robots: filterList(state)
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, void, AnyAction>): DispatchProps => (
    {
        getRobots: () => dispatch(getRobotsThunk())
    }
);
 
const RbRobotListContainer = connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(RbRobotListComponent)


export default RbRobotListContainer;