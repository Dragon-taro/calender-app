import DB from "../infrastructure/db/handler";

export default class BaseModel {
  protected db: DB;

  constructor(db: DB) {
    this.db = db;
  }
}
