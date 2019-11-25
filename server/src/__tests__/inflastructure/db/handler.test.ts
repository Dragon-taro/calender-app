import DB from "../../../infrastructure/db/handler";
import { Schedule } from "../../../entity/schedule";

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

describe("DBのテスト", () => {
  it("selectのテスト", async () => {
    const result = await db.query<Schedule[]>("select * from schedules");
    console.log(result);
  });

  it("insertのテスト", async () => {
    const result = await db.query(
      "insert schedules (date, title, description) values (?, ?, ?)",
      [new Date(), "テスト", "文字化け"]
    );
    console.log(result);
  });
});
