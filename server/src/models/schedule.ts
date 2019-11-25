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

  /**
   * `year`年`month`月の予定を取得
   * @param month 月の指定
   * @param year 年の指定
   */
  async findAll(month: number, year: number) {
    const targetMonth = dayjs(`${year}-${month}-1`);
    const firstDay = targetMonth.startOf("month").toISOString();
    const lastDay = targetMonth.endOf("month").toISOString();

    return await this.db.query<Schedule[]>(
      "select * from schedules where date between ? and ?;",
      [firstDay, lastDay]
    );
  }

  /**
   * 指定されたidの予定を取得
   * @param id 追加したいデータのid
   */
  async find(id: number) {
    const schedules = await this.db.query<Schedule[]>(
      "select * from schedules where id = ?",
      [id]
    );
    return schedules[0];
  }

  /**
   * 予定の追加
   * @param schedule 追加したい予定のデータ
   */
  async store(schedule: Schedule) {
    const result = await this.db.query<{ insertId: number }>(
      "insert into schedules (title, description, date, location) values (?, ?, ?, ?);",
      [
        schedule.title,
        schedule.description,
        new Date(schedule.date),
        schedule.location
      ]
    );

    const newSchedule = await this.find(result.insertId);

    return newSchedule;
  }

  /**
   * 指定されたidの予定を削除
   * @param id 削除したいデータのid
   */
  async delete(id: number) {
    await this.db.query<Schedule[]>("delete from schedules where id = ?", [id]);

    return;
  }

  /**
   * テストデータを5つ追加
   * Promise.allで全部終わるのを待ってそれの配列を返す
   */
  async createTestData() {
    const testData = this.testData();
    const newData = await Promise.all(
      testData.map(async d => await this.store(d))
    );

    return newData;
  }

  /**
   * 当日・前後1日・前後1ヶ月の同じ日付の日の予定を返す
   */
  private testData() {
    const testData: Schedule[] = [
      {
        title: "会議",
        description: "経営戦略会議",
        location: "会議室A",
        date: dayjs().toDate()
      },
      {
        title: "会議",
        description: "経営戦略会議",
        location: "会議室A",
        date: dayjs()
          .add(1, "day")
          .toDate()
      },
      {
        title: "会議",
        description: "経営戦略会議",
        location: "会議室A",
        date: dayjs()
          .add(-1, "day")
          .toDate()
      },
      {
        title: "会議",
        description: "経営戦略会議",
        location: "会議室A",
        date: dayjs()
          .add(1, "month")
          .toDate()
      },
      {
        title: "会議",
        description: "経営戦略会議",
        location: "会議室A",
        date: dayjs()
          .add(-1, "month")
          .toDate()
      }
    ];

    return testData;
  }
}
