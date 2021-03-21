/* 下記2点をpropsとして提供するためのコンポーネント
  1: reduxのstore
  2: reduxにdispatchする関数*/

import { connect } from 'react-redux';
import CalendarBoard from './presentation';
import { createCalendar } from '../../services/calendar'

// state = { calendar: {year: 2021, month: 3} } = store.getState()?
// 上記値が引数として自動で渡ってくる?
// storeの状態が変わると、mapStateToPropsが実行される
const mapStateToProps = state => ({ calendar: state.calendar });

// stateProps = { calendar: {year: 2021, month: 3} } = mapStateToPropsで生成された値
// mapStateToProps, mapDispatchToPropsで生成された値を引数として使用する
// mapStateToPropsが変更された時のみ(state.calendarが変更された時のみ)、mergePropsが実行される
const mergeProps = stateProps => ({
  calendar: createCalendar(stateProps.calendar),
});


// CalendarBoard(presentational)にmapStateToPropsを渡す
export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
