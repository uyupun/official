# official

<img src="logo.png" width="300px">

ぅゅ...ぷんぽぷんぽ公式Webサイト

## 環境構築

```bash
# クローン
$ git clone https://github.com/uyupun/official.git

# ディレクトリを移動
$ cd official

# パッケージのインストール
$ yarn install

# ローカルサーバの起動
$ yarn dev

# Storybookの起動
$ yarn storybook
```

## コマンド一覧

```bash
# ローカルサーバの起動
$ yarn dev

# ビルドの実行
$ yarn build

# 本番モードで起動
$ yarn start

# ESLintの実行
$ yarn lint:eslint

# Prettierの実行
$ yarn lint:prettier

# ESLintの実行と問題の自動修正
$ yarn fix:eslint

# Prettierの実行と問題の自動修正
$ yarn fix:prettier

# ステージング環境にあるファイルに対して、ESLintとPrettierを実行
$ yarn lint-staged

# yarn install後に実行され、huskyをインストールする
$ yarn prepare

# Storybookの起動
$ yarn storybook

# Storybookのビルド
$ yarn build-storybook

# コミット時はgit commitではなく以下のnpm scriptsを実行(git-czの実行)
$ yarn commit

# pathpidaの実行
$ yarn pathpida
```

## 使用技術

### 開発環境

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)

### コンポーネントカタログ

- [Storybook](https://storybook.js.org)

### リンター、フォーマッター

- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

### スタイリング

- [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset)
- [vanilla-extract](https://vanilla-extract.style)

### CSS設計

- [BEM](https://en.bem.info)

## 参照

- [Figma](https://www.figma.com/file/24u8W1q18DksKv8UmgUhpv/official)
- [Chromatic](https://www.chromatic.com/builds?appId=61fbd2ebd69c46003acc2b93)
