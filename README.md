# gs_todos
https://gs-expansion-202203.deno.dev/index.html

<利用方法>
1. このレポジトリをcloneする
2. terminalにて、yarnを実行する
3. .envファイルを作成して、 `SUPABASE_API_KEY` `SUPABASE_URL` `SLACK_API_TOKEN` を設定する
4. yarn startでサーバーを立ち上げる

<!!!注意点!!!>
このソースコードにおいてはテーブル名をtodosとしているため、そこを自分の作成したテーブル名に修正する必要があり
todo.repository.jsにおいて、"todos"となっているところを、"todo_table"に修正する
