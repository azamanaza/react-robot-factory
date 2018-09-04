import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { filter } from "lodash";

import RbRobotListComponent, { StateProps, DispatchProps} from "./robot-list";
import RobotListItem from "./types";

const mapStateToProps = (state: any) : StateProps => {
    return {
        robots: filter(state.robots, (robot: RobotListItem) => robot.isForShipping)
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, void, AnyAction>): DispatchProps => (
    {
        getRobots: () => {}
    }
);
 
const RobotShipmentListContainer = connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(RbRobotListComponent)


export default RobotShipmentListContainer;