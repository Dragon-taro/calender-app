// reduxのcreateStoreと言うメソッドを使ってstoreを作成。これの引数には全てのresucerを渡す必要がある
// 全てのreducerを一つにまとめる
import { combineReducers } from "redux";
import { count } from "./count/reducer";

const rootReducer = combineReducers({count});

export default rootReducer;
