import DB from "../../infrastructure/db/handler";
import ScheduleModel from "../../models/schedule";
import { Schedule } from "../../entity/schedule";

process.env.DB_USER = "user";
process.env.DB_NAME = "calender";
process.env.DB_PASS = "pass";

const db = new DB();

beforeAll(async () => {
  await db.connect();
});

afterAll(async () => {
  db.con!.destroy();
});

describe("schedule modelのテスト", () => {
  it("store", async () => {
    const scheduleModel = new ScheduleModel(db);
    const month = 11;
    const year = 2019;
    const result = await scheduleModel.findAll(month, year);

    console.log(result);
  });

  it("store", async () => {
    const scheduleModel = new ScheduleModel(db);
    const schedule: Schedule = {
      title: "テスト",
      description: "テスト用のデータです",
      startAt: new Date(),
      endAt: new Date()
    };

    const result = await scheduleModel.store(schedule);
    console.log(result);
  });

  it("find", async () => {
    const scheduleModel = new ScheduleModel(db);
    const result = await scheduleModel.find(1);

    console.log(result);
  });
});
