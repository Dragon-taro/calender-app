import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

import BaseModel from "./base";
import DB from "../infrastructure/db/handler";
import { Schedule } from "../entity/schedule";

export default class ScheduleModel extends BaseModel {
  constructor(db: DB) {
    super(db);
  }

  async findAll(month: number, year: number) {
    const targetMonth = dayjs(`${year}-${month}-1`);
    const firstDay = targetMonth.startOf("month").toISOString();
    const lastDay = targetMonth.endOf("month").toISOString();

    return await this.db.query<Schedule[]>(
      "select * from schedules where startAt between ? and ? or endAt between ? and ?;",
      [firstDay, lastDay, firstDay, lastDay]
    );
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

  async delete(id: number) {
    await this.db.query<Schedule[]>("delete from schedules where id = ?", [id]);

    return;
  }
}
