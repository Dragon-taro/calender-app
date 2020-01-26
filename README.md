# カレンダーの環境構築

## セットアップ

docker をインストールしたのちに、

```shell
$ make
```

これでもろもろインストールやビルドが終わります。`make`コマンドがない場合は、

```shell
$ npm --prefix ./front install ./front
$ npm --cwd ./front run build
$ npm --prefix ./server install ./server
$ cp ./server/env/env-local ./server/.env
```

の 4 つのコマンドを実行してください。

## サーバーの起動と停止

```shell
$ docker-compose up -d
```

を実行すると[localhost:8080]()にサーバーが立ち上がります。最初はいろいろインストールするので時間がかかると思います。

サーバーを止めたいときは、

```shell
$ docker-compose down
```

と実行すれば ok です。

API ドキュメントは[こちら](./server/README.md)

## フロントの開発をするとき

フロントは`webpack`でビルドしてやる必要があります。

```shell
$ cd front
$ npm run watch
```

とすると、ファイルの変更を検知して自動で差分のビルドが走るようになります。自動でビルドされたものはすぐに docker 内の nginx が配信してくれるので、変更のたびに何かコマンドを打つ必要はありません。
