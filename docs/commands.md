# コマンド一覧

## 本番環境

```bash
# ビルドの実行
$ yarn build

# 本番モードで起動
$ yarn start
```

## リンター・フォーマッタ

```bash
# ESLintの実行
$ yarn lint:eslint

# Prettierの実行
$ yarn lint:prettier

# ls-lintの実行
$ yarn lint:ls

# ESLintの実行と問題の自動修正
$ yarn fix:eslint

# Prettierの実行と問題の自動修正
$ yarn fix:prettier

# ステージングされているファイルに対して、ESLintとPrettierを実行
$ yarn lint-staged
```

## Storybook

```bash
# Storybookの起動(localhost:6006)
$ yarn storybook

# Storybookのビルド
$ yarn build-storybook
```

## ファイル生成

```bash
# pathpidaの実行
$ yarn pathpida

# アイコンコンポーネントの生成
$ yarn icons

# /public/images 以下のディレクトリ内にある png または jpg(jpeg) ファイルを元に画像を生成
$ yarn images
```

## OGPの検証

- OGPをローカル開発環境で検証する場合、一時的にインターネットに公開する必要があるため、ngrokを用いる

```bash
# ngrokのインストール
$ brew install ngrok

# 認証トークンの設定
$ ngrok config add-authtoken <your authtoken>

# 開発用サーバの起動(http://localhost:3000)
$ yarn dev

# ngrokの実行
$ ngrok http 3000

# ngrokでプロキシされたリンクを開く
$ open https://xxxx.jp.ngrok.io

# Web UIを開く
$ open http://localhost:4040
```
