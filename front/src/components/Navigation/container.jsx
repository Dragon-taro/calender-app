import Navigation from './presentation';
import { connect } from 'react-redux';

// Named Exportをimportする場合には中括弧を使う必要あり
import { getNextMonth, getPreviousMonth, getMonth, formatMonth, getFirstDayOfMonth } from '../../services/calendar';
import { calendarSetMonth } from '../../redux/calendar/actions';

import { asyncSchedulesFetchItem } from '../../redux/schedules/effects';

// state = { calendar: { year: 2021, month: 3 } } = const init(reducer)
const mapStateToProps = state => ({ calendar: state.calendar });

// Providerによりstoreが渡されたため `dispatch()` が使用できる?
const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    dispatch(calendarSetMonth(month));
  },
  fetchItem: (month) => { // month = { month: 5, year: 2021 }
    dispatch(asyncSchedulesFetchItem(month));
  }
});

// stateProps = mapStateToProps, dispathProps = mapDispatchToProps
// mapStateToPropsの状態が変わるたびに、mergePropsは実行される
const mergeProps = (stateProps, dispatchProps) => ({
  firstDayOfMonth: getFirstDayOfMonth(stateProps.calendar), // dayjsインスタンス
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar); // { month: 4, year: 2021 }
    dispatchProps.setMonth(nextMonth);
    dispatchProps.fetchItem(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
    dispatchProps.fetchItem(previousMonth);
  },
  setMonth: (dayObj) => {
    // 実行時に選択された日付のdayjsインスタンスがくる
    const month = formatMonth(dayObj); // { year: 2021, month: 4 }のような形式にする
    dispatchProps.setMonth(month);
    dispatchProps.fetchItem(month);
  }
});

// Navigation(presentation)に実際に渡されるのはmergePropsのみ
  // mapStateToProps, mapDispatchToPropsは渡っていない
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation);
