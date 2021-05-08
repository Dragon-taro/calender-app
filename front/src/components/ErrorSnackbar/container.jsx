import { connect } from 'react-redux';
import ErrorSnackbar from './presentation';
import { schedulesResetError } from '../../redux/schedules/actions';

// 🚨state.shedulesが変更された時のみmapStateToPropsが再実行される?
const mapStateToProps = (state) => ({ error: state.schedules.error });

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(schedulesResetError());
  }
});

/* connect
  It provides its connected component with the pieces of the data it needs from the store,
  and the functions it can use to dispatch actions to the store.
*/
export default connect(mapStateToProps, mapDispatchToProps)(ErrorSnackbar);
