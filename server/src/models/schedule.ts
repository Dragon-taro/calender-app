import BaseModel from "./base";
import DB from "../infrastructure/db/handler";

export default class ScheduleModel extends BaseModel {
  constructor(db: DB) {
    super(db);
  }

  getScedule() {}
}
