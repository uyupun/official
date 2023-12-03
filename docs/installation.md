# 環境構築

開発環境にはNode.js v18.17.0とYarn v4.0.2を使用する。

```bash
# リポジトリのクローン
$ git clone https://github.com/uyupun/official.git

# プロジェクトルートに移動
$ cd official

# envファイルの作成
$ cp .env.example .env

# Corepackの有効化
# Corepackを有効化してYarn (Berry)を使用できるようにするため(https://yarnpkg.com/corepack)
$ corepack enable

# 依存パッケージのインストール
$ yarn install

# 開発用サーバの起動(http://localhost:3000)
$ yarn dev
```
