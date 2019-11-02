import { Connection, createConnection, QueryOptions } from "mysql";

export default class DB {
  public con?: Connection;
  private retryCount: number = 0;

  /**
   * singleton（＝一回だけしかインスタンスを生成できない）
   */
  private static db?: DB;
  private constructor() {}

  static get instance() {
    if (!this.db) {
      this.db = new DB();
    }

    return this.db;
  }

  /**
   * DBへの接続を行う
   */
  async connect() {
    this.retryCount++;

    try {
      this.con = await this.createConnection();
    } catch (err) {
      // コネクションに失敗したら1sごとに最大10回retry
      if (this.retryCount < 10) {
        await new Promise(resolve => setTimeout(() => resolve(), 1000));
        await this.connect();
      } else {
        throw new Error(err);
      }
    }
  }

  /**
   * `mysql.query`をpromiseで扱えるようにラップしたもの
   * @param query SQLクエリ
   * @param values SQLのplaceholderを与える配列
   */
  query<T>(query: string, values?: any): Promise<T> {
    return new Promise((resolve, reject) => {
      this.con!.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        }

        const _result = result as T;

        resolve(_result);
      });
    });
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
        database: process.env.DB_NAME,
        charset: "utf8"
      });

      connection.connect(err => {
        if (err) {
          reject(err);
        }

        resolve(connection);
      });
    });
  }
}
