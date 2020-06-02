import { connect } from "react-redux";
import CurrentScheduleDialog from "./presentation";

import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";

const mapStateToProps = (state) => ({ schedule: state.currentSchedule });

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(currentScheduleCloseDialog());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentScheduleDialog);