# アーキテクチャ

## コンポーネント

BCCD Designを元に、以下のルールに沿ってコンポーネントの設計を行う。

### 分類方法

- Base
  - 役割: 基礎
  - 品詞: 名詞
  - 説明: 基礎的な機能（名詞）そのもの、事実上の型を表すものを指す
  - 例: Button/Icon/Image
- Case
  - 役割: 状況
  - 品詞: 動詞/形容詞/名詞
  - 説明: 状況（動詞/形容詞）や状態（名詞）を表すものを指す
  - 例: Alert/Edit/Post
- Common
  - 役割: サービス横断的な関心
  - 品詞: 名詞
  - 説明: 関心の中で様々なDomainと組み合わせて使えるもの、どの関心でも幅広く共通で利用できるものを指す
  - 例: Category/Error/Tag
- Domain
  - 役割: サービス限定的な関心
  - 品詞: 名詞
  - 説明: 人（ロール）や物（名詞）など関心の対象を表すものを指す
  - 例: Community/Product/User

### 留意点

- 依存関係の方向はBase <- Case <- Common <- Domainとする
- Domain以外のコンポーネントは同じ分類同士で依存させない
  - 本来、Baseに分類されるべきだが、Baseに依存してしまうようなコンポーネントは、Commonに定義する
- CommonとDomainで分類に迷う場合は以下を基準にする
  - Common: 複数ページ/箇所で使えるレベルに特化されたコンポーネント
  - Domain: 特定ページ/箇所でしか使えないレベルに特化されたコンポーネント

### 参照

- [https://qiita.com/misuken/items/19f9f603ab165e228fe1](https://qiita.com/misuken/items/19f9f603ab165e228fe1)
- [https://qiita.com/misuken/items/d51c181487cf611821f4](https://qiita.com/misuken/items/d51c181487cf611821f4)
- [https://qiita.com/misuken/items/09498a496511034627af](https://qiita.com/misuken/items/09498a496511034627af)
