import Navigation from './presentation';
import { connect } from 'react-redux';

// Named Exportをimportする場合には中括弧を使う必要あり
import { getNextMonth, getPreviousMonth } from '../../services/calendar';
import { calendarSetMonth } from '../../redux/calendar/actions';

// state = { calendar: { year: 2021, month: 3 } } = const init(reducer)
const mapStateToProps = state => ({ calendar: state.calendar });

// Providerによりstoreが渡されたため `dispatch()` が使用できる?
const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    dispatch(calendarSetMonth(month));
  }
});

// stateProps = mapStateToProps, dispathProps = mapDispatchToProps
const mergeProps = (stateProps, dispatchProps) => ({
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar); // { month: 4, year: 2021 }
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
  }
});

// Navigation(presentation)に実際に渡されるのはmergePropsのみ
  // mapStateToProps, mapDispatchToPropsは渡っていない
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
