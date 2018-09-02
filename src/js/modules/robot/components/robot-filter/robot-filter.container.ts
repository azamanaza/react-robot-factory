import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { connect } from "react-redux";
import RbRobotFilterComponent, { StateProps, DispatchProps } from "./robot-filter.component";
import { setRobotListFilter } from "./redux/actions";

const mapStateToProps = (state: any): StateProps => ({
    currentFilter: state.currentFilter
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, void, AnyAction>): DispatchProps => ({
    setFilter: (filter: string) => dispatch(setRobotListFilter(filter))
});

export default  connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(RbRobotFilterComponent);