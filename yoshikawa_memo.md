### 吉川メモ
* コンポーネントから `return()` までの間に、JSXで使用する変数・定数を定義しておける
* presentational component => 表示の責務だけを追うコンポーネント
* container component => データを扱うロジックを記載するコンポーネント
* `Provider` でしていることはreact-reduxからstoreを参照できるようにしている?これだけではコンポーネントから `store` を参照できない
# 1-2
* action
  * どのような処理をするか、その処理をするのに必要な引数を書いたオブジェクトを返す関数
  * dispatch()の引数にactionを記載する?
  * オブジェクト => action
  * オブジェクトを返す関数 => action creator


### 調べること
* 1-3: Providerについて深く知る
* 1-3: connect()について深く知る
* 1-4:


# 1-2
* action
  * どのような処理をするか、その処理をするのに必要な引数を書いたオブジェクトを返す関数
  * dispatch()の引数にactionを記載する?
  * オブジェクト => action
  * オブジェクトを返す関数 => action creator

1-6
* mapStateToProps
* mapDispatchToProps


### 調べること
* 1-3: Provider(redux)
* 1-3: connect()
* 1-6:
* 1-6: combineReducers(redux)
* トランスパイルの仕組み
* 1-7: importで {} を使うのが一般的?
* 最新のコンポーネントの書き方
  * return不要?
* importで、JavaScriptファイル以外は拡張子を省略できない?

2-4
  上記の書き方は、引数を分割して代入する方法で、この場合はchildrenという変数にprops.childrenが代入されます。何度もpropsと書かなくて済むので簡潔になります。

* importで中括弧に囲むもの、囲まないものの違い
  * 1つのファイルから複数の定数をimportする場合?

3-2
  <Provider>でやっていることは store をreact-reduxから使えるようにしただけにすぎず、依然コンポーネントから参照することはできません。

* Provider => 厳密に何をする
* connect => 厳密に何をする
