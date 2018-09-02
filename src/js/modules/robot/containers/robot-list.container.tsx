import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { ThunkDispatch, ThunkAction } from "redux-thunk";

import * as _ from "lodash";

import Robot from "./../robot";
import RbRobotListComponent, { StateProps, DispatchProps} from "./../components/robot-list";
import { robotFilters } from "../robot"
import * as robotStatusHelper from "./../helpers/robot-stage.helper";
import { getRobotsThunk } from "./../reducers/robot/thunks";

const filterList = (state: any): Robot[] => {
    console.log(state);
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