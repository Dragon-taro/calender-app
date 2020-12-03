// スケジュールを追加
// 大きく分けてフォームのデータとdialogが開いているかどうかの2つの状態が必要
// それぞれのアクションに応じて状態の更新を行う処理を記述

import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_CLOSE_DIALOG,
  ADD_SCHEDULE_OPEN_DIALOG
} from "./actions";

const init = {
  form: {
    title: "",
    description: "",
    date: null,
    location: ""
  },
  isDialogOpen: false
}

const addScheduleReducer = (state = init, action) => {
  const {type, payload} = action;

  switch (type) {
    // 現状のstateの中に新しいformを追加しつつformの中でも現在のformに対して新しいデータを展開して追加
    case ADD_SCHEDULE_SET_VALUE:
      return { ...state, from: { ...state.form, ...payload}};
    case ADD_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true};
    case ADD_SCHEDULE_CLOSE_DIALOG:
     return init;
    default:
      return state;
  }
}

export default addScheduleReducer;
