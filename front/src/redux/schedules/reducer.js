import {
  SCHEDULES_ADD_ITEM,
  SCHEDULES_FETCH_ITEM,
  SCHEDULES_SET_LOADING
} from "./actions";
import dayjs from "dayjs";

// 初期化
const init = {
  // schedule.formのデータ構造を配列でもつ必要があるためitem:[]とする
  items: [],
  // 今後サーバーからデータを取得するのでisLoadingと言うload中かどうかを判定するフラグを持たせる
  isLoading: false
}

const schedulesReducer = (state = init, action) => {
  const { type, payload} = action;

  switch (type) {
    case SCHEDULES_ADD_ITEM:
    // itemsは前回のitemsにpayloadとして渡ってきた式の予定を追加した配列を返しています
      return {
        ...state,
        items: [...state.items, {...payload, id: state.items.length + 1}]
      };
    case SCHEDULES_SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SCHEDULES_FETCH_ITEM:
      return {
        ...state,
        isLoading: false,
        items: payload
      }
    default:
      return state;
  }
}

export default schedulesReducer;
