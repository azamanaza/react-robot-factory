import { cloneDeep, find } from "lodash";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import RobotActions, { StateProp, DispatchProp } from "./robot-actions";
import { extinguishRobotThunk, recycleRobotThunk, addRobotToShipment, removeRobotFromShipment } from "./redux/actions";
import { EXTINGUISH_ROBOTS, RECYCLE_ROBOTS, ADD_ROBOT_SHIPMENT, REMOVE_ROBOT_SHIPMENT } from "./redux/action-types";
import RobotListItem from "../robot-list/types";

interface OwnProps {
    robotId: number
}
const mapStateToProps = (state: any, ownProps: OwnProps): StateProp => ({
    robot: cloneDeep(find(state.robots, (robot: RobotListItem) => {
        return robot.robotId === ownProps.robotId;
    }))
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, void, AnyAction>): DispatchProp => ({
    onActionButtonClick: (robotAction: string, robotId: number) => {
        switch(robotAction) {
            case EXTINGUISH_ROBOTS:
                return dispatch(extinguishRobotThunk(robotId));
            case RECYCLE_ROBOTS:
                return dispatch(recycleRobotThunk(robotId));
            case ADD_ROBOT_SHIPMENT:
                return dispatch(addRobotToShipment(robotId));
            case REMOVE_ROBOT_SHIPMENT:
                return dispatch(removeRobotFromShipment(robotId));
            default:
                break;
        }
    }
});

export default  connect<StateProp, DispatchProp, OwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(RobotActions);