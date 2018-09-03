import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { filter, map } from "lodash";

import ShipRobotsButtonComponent, { StateProps, DispatchProps} from "./ship-robots-button";
import RobotListItem from "./types";
import { shipRobotsThunk } from "./redux/actions";

const mapStateToProps = (state: any) : StateProps => {
    return {
        robots: filter(state.robots, (robot: RobotListItem) => robot.isForShipping)
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, void, AnyAction>): DispatchProps => (
    {
        shipRobots: (robotIs) => dispatch(shipRobotsThunk(robotIs))
    }
);
 
const ShipRobotsButtonContainer = connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(ShipRobotsButtonComponent)


export default ShipRobotsButtonContainer;