import BaseModel from "./base";
import DB from "../infrastructure/db/handler";
import { Schedule } from "../entity/schedule";

export default class ScheduleModel extends BaseModel {
  constructor(db: DB) {
    super(db);
  }

  async findAll() {
    return await this.db.query<Schedule[]>("select * from schedules;");
  }

  async find(id: number) {
    const schedules = await this.db.query<Schedule[]>(
      "select * from schedules where id = ?",
      [id]
    );
    return schedules[0];
  }

  async store(schedule: Schedule) {
    const result = await this.db.query<{ insertId: number }>(
      "insert into schedules (title, description, startAt, endAt) values (?, ?, ?, ?);",
      [
        schedule.title,
        schedule.description,
        new Date(schedule.startAt),
        new Date(schedule.endAt)
      ]
    );

    const newSchedule = await this.find(result.insertId);

    return newSchedule;
  }
}
