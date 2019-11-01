import ScheduleModel from "../models/schedule";
import DB from "../infrastructure/db/handler";
import {
  Dictionary,
  Request as _Request,
  Response
} from "express-serve-static-core";
import { Schedule } from "../entity/schedule";

type Request = _Request<Dictionary<string>>;

export default class ScheduleController {
  private scheduleModel: ScheduleModel;

  constructor(db: DB) {
    this.scheduleModel = new ScheduleModel(db);
  }

  index = async (req: Request, res: Response) => {
    const year = Number(req.query.year as string);
    const month = Number(req.query.month as string);
    const schedules = await this.scheduleModel.findAll(month, year);

    res.json(schedules);
  };

  create = async (req: Request, res: Response) => {
    const schedule = req.body as Schedule;
    const newSchedule = await this.scheduleModel.store(schedule);

    res.send(newSchedule);
  };

  show = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const schedule = await this.scheduleModel.find(id);

    res.json(schedule);
  };
}
