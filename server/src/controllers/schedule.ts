import ScheduleModel from "../models/schedule";
import DB from "../infrastructure/db/handler";
import { Dictionary, Request, Response } from "express-serve-static-core";

export default class ScheduleController {
  private scedule: ScheduleModel;

  constructor(db: DB) {
    this.scedule = new ScheduleModel(db);
  }

  index(req: Request<Dictionary<string>>, res: Response) {
    res.send("schedule!");
  }
}
