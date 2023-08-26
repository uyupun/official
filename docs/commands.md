# コマンド一覧

## 本番環境

```bash
# ビルドの実行
$ yarn build

# 本番モードで起動
$ yarn start
```

## Gitフック

```bash
# huskyのセットアップ
# 通常はyarn install時に自動的に実行される
# huskyの追加更新時にのみ実行する必要がある
$ yarn husky
```

## リンター・フォーマッタ

```bash
# ESLintの実行
$ yarn lint:eslint

# Prettierの実行
$ yarn lint:prettier

# ls-lintの実行
$ yarn lint:ls

# CSpellの実行
$ yarn lint:cspell

# ESLintの実行と問題の自動修正
$ yarn fix:eslint

# Prettierの実行と問題の自動修正
$ yarn fix:prettier

# CSpellで定義されている未使用の単語の削除
$ yarn clean:cspell

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
$ open https://xxxx.ngrok-free.app

# Web UIを開く
$ open http://localhost:4040
```

## Lighthouse

```bash
# Lighthouseの実行(http://localhost:3000を測定)
$ yarn lighthouse

# ポートを指定してLighthouseを実行(http://localhost:3001を測定)
$ yarn lighthouse -p 3001
```
