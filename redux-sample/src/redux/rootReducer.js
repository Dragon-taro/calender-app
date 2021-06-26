// reduxのcreateStoreメソッドでstoreを作成するのだが、これの引数には全てのreducerを渡す必要がある
// そこで、このファイルで全てのreducerを一つにまとめる
// それを簡単に実現するのが、combineReducer関数

import { combineReducers } from "redux";
import { count } from "./count/reducer";

const rootReducer = combineReducers({ count });

// export default... は、そのファイルの一番重要な関数や変数をexportするときに使う
export default rootReducer;