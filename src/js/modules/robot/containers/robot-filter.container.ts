import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { connect } from "react-redux";
import RbRobotFilterComponent, { StateProps, DispatchProps } from "./../components/robot-filter.component";
import { filterRobotList } from "./../reducers/current-filter/actions";

const mapStateToProps = (state: any): StateProps => ({
    currentFilter: state.currentFilter
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, void, AnyAction>): DispatchProps => ({
    clickHandler: (filter: string) => dispatch(filterRobotList(filter))
});

export default  connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(RbRobotFilterComponent);