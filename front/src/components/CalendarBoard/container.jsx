/* 下記2点をpropsとして提供するためのコンポーネント
  1: reduxのstore
  2: reduxにdispatchする関数*/

import { connect } from 'react-redux';
import CalendarBoard from './presentation';
import { createCalendar } from '../../services/calendar'
import { addScheduleOpenDialog } from '../../redux/addSchedule/actions';

// state = { calendar: { year: 2021, month: 3 } } = store.getState() = const init
// 上記値が引数として自動で渡ってくる?
// storeの状態が変わると、mapStateToPropsが実行される
// カレンダーの「>」ボタン押下後 => state = { calendar: { year: 2021, month: 4 }}
const mapStateToProps = state => ({ calendar: state.calendar });

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: () => {
    dispatch(addScheduleOpenDialog());
  }
});

// stateProps = { calendar: { year: 2021, month: 3 } } = mapStateToPropsで生成された値
// mapStateToProps, mapDispatchToPropsで生成された値を引数として使用する
// mapStateToPropsが変更された時のみ(state.calendarが変更された時のみ)、mergePropsが実行される
const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  yearMonth: stateProps.calendar, // { year: 2021, month: 4 }
  calendar: createCalendar(stateProps.calendar) // [28, 29, 30, 31, 1, ...]
});


// CalendarBoard(presentational)にmergePropsを渡す
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);
