# カレンダーの環境構築

## サーバーの起動と停止

デスクトップからdockerを起動。

```shell
$ docker-compose up -d
```

を実行すると[localhost:8080]()にサーバーが立ち上がります。

サーバーを止めたいときは、

```shell
$ docker-compose down
```

## フロントの開発をするとき

フロントは`webpack`でビルドしてやる必要があります。

```shell
$ cd front
$ npm run watch
```

とすると、ファイルの変更を検知して自動で差分のビルドが走るようになります。自動でビルドされたものはすぐに docker 内の nginx が配信してくれるので、変更のたびに何かコマンドを打つ必要はありません。
