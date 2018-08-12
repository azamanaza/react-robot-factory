import { connect } from 'react-redux';
import * as _ from "lodash";
import Robot from "../robot";
import RbRobotListComponent from "../components/robot-list.component";

const getSentientRobots = (robots: Robot[]): Robot[] => {
    return _.filter(robots, (robot) => {
        return robot.configuration.hasSentience;
    });
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        robots: getSentientRobots(state.robots)
    };
}

const RbRobotListContainer = connect(
    mapStateToProps
)(RbRobotListComponent)

export default RbRobotListContainer;