# gs_todos
https://gs-expansion-202203.deno.dev/index.html

## 利用方法
1. このレポジトリをcloneする
2. terminalにて、yarnを実行する
3. .envファイルを作成して、 `SUPABASE_API_KEY` `SUPABASE_URL` `SLACK_API_TOKEN` を設定する
4. yarn startでサーバーを立ち上げる

## !!!注意点!!!
このソースコードにおいてはテーブル名をtodosとしているため、そこを自分の作成したテーブル名に修正する必要があり。todo.repository.jsにおいて、"todos"となっているところを、"todo_table"に修正する

## エンドポイント
| URI          | method | name              | description                           | 
| ------------ | ------ | ----------------- | ------------------------------------- | 
| /todo        | GET    | findAll           | データ全件取得                        | 
| /todo/today  | GET    | find              | 本日締切のデータ取得                  | 
| /todo        | POST   | store             | データ作成処理                        | 
| /todo/:id    | PUT    | update            | データ更新処理                        | 
| /todo/:id    | DELETE | destroy           | データ削除処理                        | 
| /slack       | GET    | sendAllTodoData   | todoリスト全件を Slack 投稿           | 
| /slack/today | GET    | sendTodayTodoData | 本日以前締切のデータのみを Slack 投稿 | 
