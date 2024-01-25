# アーキテクチャ

## コンポーネント

BCCD Designを元に、以下に沿ってコンポーネントの設計を行う。

### 分類方法

- Base - 基礎（名詞）
  - 基礎的な機能（名詞）そのもの、事実上の型を表す単語のことを指す
  - 例: Button/Icon/Image
- Case - 状況（動詞/形容詞/名詞）
  - 状況（動詞/形容詞）や状態（名詞）を表す単語のことを指す
  - 例: Alert/Edit/Post
- Common - 共通の関心（名詞）
  - 関心の中で色々なDomainと組み合わせて使えるもの、どの関心でも幅広く共通で利用できるもののことを指す
  - 例: Category/Error/Tag
- Domain - 関心（名詞）
  - 人（ロール）や物（名詞）など関心の対象を表す単語のことを指す
  - 例: Community/Product/User

### 留意点

- 依存関係の方向はBase <- Case <- Common <- Domainとする
- Domain以外のコンポーネントは同じ分類同士で依存しない
  - 例えばBaseに分類されるがBaseに依存するようなコンポーネントは、Commonに定義する
- CommonとDomainで分類に迷う場合は以下を基準にする
  - Common: 複数ページ/箇所で使えるレベルに特化されたコンポーネント
  - Domain: 特定ページ/箇所でしか使えないようなレベルに特化されたコンポーネント

### 参照

- [https://qiita.com/misuken/items/19f9f603ab165e228fe1](https://qiita.com/misuken/items/19f9f603ab165e228fe1)
- [https://qiita.com/misuken/items/d51c181487cf611821f4](https://qiita.com/misuken/items/d51c181487cf611821f4)
- [https://qiita.com/misuken/items/09498a496511034627af](https://qiita.com/misuken/items/09498a496511034627af)
