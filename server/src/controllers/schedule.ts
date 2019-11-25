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

  /**
   * 予定を取得するためのコントローラー
   * `month`と`year`の指定がマスト
   */
  index = async (req: Request, res: Response) => {
    const year = Number(req.query.year as string);
    const month = Number(req.query.month as string);

    // queryの指定がなかったら400 Bad Request
    const isValid = year > 0 && month > 0 && month <= 12;
    if (!isValid) {
      res.sendStatus(400);
      return;
    }

    const schedules = await this.scheduleModel.findAll(month, year);

    res.json(schedules);
  };

  /**
   * 新しい予定を作成するコントローラー
   */
  create = async (req: Request, res: Response) => {
    const schedule = req.body as Schedule;
    const newSchedule = await this.scheduleModel.store(schedule);

    res.json(newSchedule);
  };

  /**
   * 5つのテストデータを追加するためのコントローラー
   */
  createTestData = async (_req: Request, res: Response) => {
    const schedules = await this.scheduleModel.createTestData();

    res.json(schedules);
  };

  /**
   * 予定を一件だけ返すコントローラー
   */
  show = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!id) {
      res.sendStatus(400);
      return;
    }

    const schedule = await this.scheduleModel.find(id);

    res.json(schedule);
  };

  /**
   * 予定を一件だけ消すコントローラー
   */
  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!id) {
      res.sendStatus(400);
      return;
    }

    await this.scheduleModel.delete(id);

    res.sendStatus(204);
  };
}
