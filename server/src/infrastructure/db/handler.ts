import { Connection, createConnection } from "mysql";

export default class DB {
  public con?: Connection;
  private retryCount: number = 0;

  async connect() {
    this.retryCount++;

    try {
      this.con = await this.createConnection();
    } catch (err) {
      // コネクションに失敗したら1sごとに最大10回retry
      if (this.retryCount < 10) {
        await this.sleep(1000);
        await this.connect();
      } else {
        throw new Error(err);
      }
    }
  }

  /**
   * コネクション作成のための関数
   * Promiseでコネクションを作成
   */
  private createConnection(): Promise<Connection> {
    return new Promise((resolve, reject) => {
      const connection = createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
      });

      connection.connect(err => {
        if (err) {
          reject(err);
        }

        resolve(connection);
      });
    });
  }

  /**
   * promiseを使ったsleepの実装
   * @param ms 何ミリ秒sleepするか
   */
  private sleep(ms: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}
