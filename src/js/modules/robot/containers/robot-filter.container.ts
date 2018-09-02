import { connect } from "react-redux";
import RbRobotFilterComponent from "./../components/robot-filter.component";
import { filterRobotList } from "./../reducers/current-filter/actions";

const mapDispatchToProps = (dispatch: any) => ({
    clickHandler: (filter: string) => dispatch(filterRobotList(filter))
})

export default connect(
    null,
    mapDispatchToProps
)(RbRobotFilterComponent);