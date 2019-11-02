import DB from "../infrastructure/db/handler";

/**
 * modelのベースとなるクラス
 * DBインスタンスをセットする
 */
export default class BaseModel {
  protected db: DB;

  constructor(db: DB) {
    this.db = db;
  }
}
