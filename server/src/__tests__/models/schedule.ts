import DB from "../../infrastructure/db/handler";
import ScheduleModel from "../../models/schedule";
import { Schedule } from "../../entity/schedule";

process.env.DB_USER = "user";
process.env.DB_NAME = "calender";
process.env.DB_PASS = "pass";

const db = DB.instance;

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
      date: new Date(),
      location: "会議室"
    };

    const result = await scheduleModel.store(schedule);
    console.log(result);
  });

  it("find", async () => {
    const scheduleModel = new ScheduleModel(db);
    const result = await scheduleModel.find(1);

    console.log(result);
  });

  it("delete", async () => {
    const scheduleModel = new ScheduleModel(db);
    const month = 11;
    const year = 2019;
    const schedules = await scheduleModel.findAll(month, year);

    const id = schedules.reverse()[0].id!;
    const result = await scheduleModel.delete(id);

    console.log(result);
  });

  it("create test data", async () => {
    const scheduleModel = new ScheduleModel(db);
    const schedules = await scheduleModel.createTestData();

    console.log(schedules);
  });
});
