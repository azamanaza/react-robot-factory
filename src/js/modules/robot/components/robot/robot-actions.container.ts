import { cloneDeep, find } from "lodash";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import RobotActions, { StateProp, DispatchProp } from "./robot-actions";
import { extinguishRobotThunk, recycleRobotThunk } from "./redux/actions";

import Robot from "./../../robot.type";

interface OwnProps {
    robotId: number
}
const mapStateToProps = (state: any, ownProps: OwnProps): StateProp => ({
    robot: cloneDeep(find(state.robots, (robot: Robot) => {
        return robot.robotId === ownProps.robotId;
    }))
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, void, AnyAction>): DispatchProp => ({
    onActionButtonClick: (robotAction: string, robotId: number) => {
        switch(robotAction) {
            case "extinguish":
                return dispatch(extinguishRobotThunk(robotId));
            case "recycle":
                return dispatch(recycleRobotThunk(robotId));
            default:
                break;
        }
    }
});

export default  connect<StateProp, DispatchProp, OwnProps>(
    mapStateToProps,
    mapDispatchToProps,
)(RobotActions);