# 環境構築

```bash
# リポジトリのクローン
$ git clone https://github.com/uyupun/official.git

# プロジェクトルートに移動
$ cd official

# envファイルの作成
$ cp .env.example .env

# Corepackを有効化
$ corepack enable

# 依存パッケージのインストール
$ yarn install

# 開発用サーバの起動(http://localhost:3000)
$ yarn dev
```
