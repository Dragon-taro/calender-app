## 機能

この API サーバーではカレンダーにおける予定の保存や取得ができるようになっています。api の path は、[localhost:8080/api](localhost:8080/api)に続く形です。（ex. path が`schedules`ならフルパスは[localhost:8080/api/schedules](localhost:8080/api/schedules)です）

この API にリクエストを送ることで、データを取得したりデータの保存をしたりできるようになります。以下のドキュメントには`curl`のサンプルリクエストも書いてあるのでぜひ試してみてください。

たまにサーバー側のエラーで以下のような画面が表示されることがあります。

![](error.png)

curl の場合は以下のようになります。

```bash
$ curl "localhost:8080/api/schedules?month=11&year=2019"
<html>
<head><title>502 Bad Gateway</title></head>
<body>
<center><h1>502 Bad Gateway</h1></center>
<hr><center>nginx/1.17.5</center>
</body>
</html>
```

この場合は docker を再起動することで再び開発ができるようになるので試してください。

```bash
docker-compose down
docker-compose up -d
```

上記のコマンドを実行するとサーバーを再起動することができます。これは、プロジェクトの一番上のディレクトリ（docker-comopose.yml があるディレクトリ）で実行してください。

## 仕様

### 特定の月の予定の全件取得

指定した`年/月`の予定を全て取得します。どちらも必須パラメーターでこれがない場合は`400 Bad Request`が返ってきます。

```
GET /schedules
```

#### パラメーター

| Name    | Type     | description                               |
| ------- | -------- | ----------------------------------------- |
| `month` | `number` | **必須** どの月の予定を取得するのかを指定 |
| `year`  | `number` | **必須** どの年の予定を取得するのかを指定 |

#### 例

```bash
$ curl "localhost:8080/api/schedules?month=11&year=2019"
```

```json
Status: 200 OK

----

[
  {
    "id": 1,
    "date": "2019-11-11T15:54:14.000Z",
    "title": "会議",
    "description": "経営戦略について",
    "location": "会議室A"
  },
  {
    "id": 2,
    "date": "2019-11-21T15:00:00.000Z",
    "title": "ランチ",
    "description": "お寿司が食べたい",
    "location": "未定"
  }
]
```

※ 別途フォーマットしているので実際は改行されずに表示されると思います。コマンドラインでフォーマットしたいときは[jq](https://stedolan.github.io/jq/)というツールを使うと綺麗にフォーマットできます。気になる方は調べてみてください。

### 一つの予定の取得

この教材では必要ありませんが、CRUD には必要なので実装しました。

```
GET /schedules/:id
```

```bash
$ curl "localhost:8080/api/schedules/1"
```

```json
Status: 200 OK

----

{
  "id": 1,
  "date": "2019-11-11T15:54:14.000Z",
  "title": "会議",
  "description": "経営戦略について",
  "location": "会議室A"
}
```

### 予定の追加

予定の各項目を json で送ることで予定が登録できます。日付の項目は少しややこしいですが、それほど気にしなくても大丈夫です。

```
GET /schedules
```

#### パラメーター

| Name          | Type        | description                                                                                  |
| ------------- | ----------- | -------------------------------------------------------------------------------------------- |
| `title`       | `string`    | **必須** 予定のタイトル                                                                      |
| `date`        | `ISOString` | **必須** 予定の日付（日付のデータフォーマットの一つで`JSON.Stringfy()`で勝手にこの形になる） |
| `description` | `string`    | 予定の説明                                                                                   |
| `location`    | `string`    | 場所の指定                                                                                   |

#### 例

```bash
$ curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"title": "会議", "description": "経営戦略について", "date": "2019-11-11T15:54:14.000Z", "location": "会議室A"}' \
  "localhost:8080/api/schedules"
```

```json
Status: 200 OK

----

{
  "id": 15,
  "date": "2019-11-11T15:54:14.000Z",
  "title": "会議",
  "description": "経営戦略について",
  "location": "会議室A"
}
```

### 予定の削除

```
DELETE /schedules/:id
```

指定した id のレコードを削除することができます。

#### 例

```bash
$ curl "localhost:8080/api/schedules/1
```

```json
Status: 204 No Content
```

### サンプルデータの追加

データの取得から実装した方が簡単なのでテストデータを 5 件ほど追加する API を実装しました。日付データもあって POST で対応するのも面倒なのでぜひこちらを使ってください！その日の日付と前後 1 日そして前後 1 ヶ月の合計 5 日に予定が追加されます。

```
POST /schedules/create-test-data
```

```bash
$ curl -X POST "localhost:8080/api/schedules/create-test-data"
```

```json
Status: 200 OK

----

[
  {
    "id": 1,
    "date": "2019-11-23T11:42:05.000Z",
    "title": "会議",
    "description": "経営戦略会議",
    "location": "会議室A"
  },
  {
    "id": 2,
    "date": "2019-11-24T11:42:05.000Z",
    "title": "会議",
    "description": "経営戦略会議",
    "location": "会議室A"
  },
  {
    "id": 3,
    "date": "2019-11-22T11:42:05.000Z",
    "title": "会議",
    "description": "経営戦略会議",
    "location": "会議室A"
  },
  {
    "id": 4,
    "date": "2019-12-23T11:42:05.000Z",
    "title": "会議",
    "description": "経営戦略会議",
    "location": "会議室A"
  },
  {
    "id": 5,
    "date": "2019-10-23T11:42:05.000Z",
    "title": "会議",
    "description": "経営戦略会議",
    "location": "会議室A"
  }
]
```
