module.exports = {
  format: '{emoji}{type}: {subject}',
  list: [
    'chore',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'release',
    'revert',
    'style',
    'test',
  ],
  maxMessageLength: 128,
  minMessageLength: 3,
  questions: ['type', 'subject'],
  types: {
    chore: {
      description: 'ビルドプロセス、またはドキュメント生成などの補助ツールやライブラリの追加・更新',
      emoji: '🎨',
      value: 'chore',
    },
    ci: {
      description: 'CI関連の追加・更新',
      emoji: '👷',
      value: 'ci',
    },
    docs: {
      description: 'ドキュメントの追加・更新',
      emoji: '📝',
      value: 'docs',
    },
    feat: {
      description: '機能の追加',
      emoji: '✨',
      value: 'feat',
    },
    fix: {
      description: 'バグの修正',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'パフォーマンスを向上させるコード変更',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: '機能追加やバグ修正を行わないコード変更',
      emoji: '♻️',
      value: 'refactor',
    },
    release: {
      description: 'リリースコミットの作成',
      emoji: '🔖',
      value: 'release',
    },
    revert: {
      description: 'コミットを取り消す',
      emoji: '⏪️',
      value: 'revert',
    },
    style: {
      description:
        'コードの意味に影響を与えない変更（ホワイトスペース、フォーマット、セミコロンの欠落など）',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'テストの追加や既存のテストの修正',
      emoji: '✅',
      value: 'test',
    },
  },
  messages: {
    type: 'コミットの種類を選択:',
    subject: 'コミット内容:\n',
  },
};
