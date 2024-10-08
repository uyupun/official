# アーキテクチャ

## コンポーネント

BCCD Designを元に、以下のルールに沿ってコンポーネントの設計を行う。

### 背景

[Atomic Design](https://atomicdesign.bradfrost.com/)、[BCCD Design](https://qiita.com/misuken/items/19f9f603ab165e228fe1)、および[featuresディレクトリ](https://github.com/alan2207/bulletproof-react)の中からBCCD Designを選定した。
AtomicDesignにおけるコンポーネントの分類の曖昧さを改善しており、かつ、プロジェクトの規模に適した設計手法である点が主な選定理由である。
また、Storybookを用いた開発との相性が良い点や、プロジェクトが大規模化した場合にもある程度、対応が可能な点も副次的な選定理由として挙げられる。

### 分類方法

- Base
  - 役割: 基礎
  - 品詞: 名詞
  - 説明: 基礎的な機能（名詞）や、事実上の型を表現する
  - 例: Button/Icon/Image
- Case
  - 役割: 状況
  - 品詞: 動詞/形容詞/名詞
  - 説明: 状況（動詞/形容詞）や状態（名詞）を表現する
  - 例: Alert/Edit/Post
- Common
  - 役割: サービス横断的な関心
  - 品詞: 名詞
  - 説明:
    - 幅広く共通して利用可能な、横断的な関心を表現する
    - 複数ページ/箇所で使えるレベルに特化されたコンポーネント
  - 例: Category/Error/Tag
- Domain
  - 役割: サービス限定的な関心
  - 品詞: 名詞
  - 説明:
    - 人（ロール）や物（名詞）など、限定的な関心を表現する
    - 特定ページ/箇所でしか使えないレベルに特化されたコンポーネント
  - 例: Community/Product/User

### 留意点

- 依存関係の方向はBase <- Case <- Common <- Domainとする
- Domain以外のコンポーネントは同じ分類同士で依存させない
  - 本来、Baseに分類されるべきだが、Baseに依存してしまうようなコンポーネントは、Commonに定義する
- 同分類のコンポーネントであれば、複数のコンポーネントをサブディレクトリ配下にまとめることができる
  - 例えば、domain/Philosophyディレクトリ配下に、Mission、Vision、Valueといったコンポーネントをまとめることで、組織の行動指針に関連するコンポーネント間の関連を明確にし、一元的な管理を可能にしている

### 参照

- [https://qiita.com/misuken/items/19f9f603ab165e228fe1](https://qiita.com/misuken/items/19f9f603ab165e228fe1)
- [https://qiita.com/misuken/items/d51c181487cf611821f4](https://qiita.com/misuken/items/d51c181487cf611821f4)
- [https://qiita.com/misuken/items/09498a496511034627af](https://qiita.com/misuken/items/09498a496511034627af)
