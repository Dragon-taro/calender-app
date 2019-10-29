import DB from "../../../infrastructure/db/handler";

process.env.DB_USER = "user";
process.env.DB_NAME = "calender";
process.env.DB_PASS = "pass";

describe("DBのテスト", () => {
  it("connectできるか", async () => {
    const db = new DB();

    await db.connect();

    console.log(db);

    db.con!.destroy();
  });
});
