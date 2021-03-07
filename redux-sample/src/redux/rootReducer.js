import { combineReducers } from 'redux';
import { count } from './count/reducer';


// 全てのreducersを大元のreducerで1つにするのが一般的
// 1つのファイルで全てのreducerを定義すると肥大化するため、分割して最後に1つにまとめる
// 引数はハッシュで受け取る必要あり
const rootReducer = combineReducers({ count });

export default rootReducer;
