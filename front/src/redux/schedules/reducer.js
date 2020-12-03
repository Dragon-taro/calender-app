import { SCHEDULES_ADD_ITEM } from "./actions";

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
    // isLoadingはSCHEDULES_ADD_ITEMの時には無関係なので前回のstateと同じものを返します
    // itemsは前回のitemsにpayloadとして渡ってきた式の予定を追加した配列を返しています
      return {
        ...state,
        items: [...state.items, {...payload, id: state.items.length + 1}]
      };
    default:
      return state;
  }
}

export default schedulesReducer;
