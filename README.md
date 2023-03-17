## ディレクトリ構成

```
src
├── components        # アプリケーション全体で使用できる共通コンポーネント
├── constants         # pathや環境変数などをエクスポートするところ
├── features          # 機能ベースモジュール
├── hooks             # アプリケーション全体で使用できる共通hooks
├── libs              # ライブラリをアプリケーション用に設定して再度エクスポートしたもの
├── providers         # アプリケーションのすべてのプロバイダー
├── stores            # グローバルステートストア
├── page-components   # featuresのコンポーネントを集約するところ
├── pages             # Nextjsのルーティングシステム
├── styles            # アプリケーション全体で使用されるCSS（上書きなどを想定）
├── types             # アプリケーション全体で使用される基本的な型の定義
└── utils             # 共通のユーティリティ関数
```

## components
comonentsでは、HeaderやFooterなど共通パーツや、Elementsファイル内にボタンやスピナーなど粒度の小さいUI要素を置く場所。

```
components
├─ Elements/
│  ├─ Button/
│  │  ├─ Button.tsx/
│  │  ├─ Button.stories.tsx/
│  │  ├─ index.ts/
├─ Header/
├─ Footer/
```

## features
components、hooksなどこのディレクトリ階層は必要に応じて増えたり（redcuerやactionなど）、減ったり（testsやstoriesなど）する予定。

```
features
├─ posts/
│  ├─ components/
│  │  ├─ Posts.tsx/
│  │  ├─ index.ts/
│  ├─ hooks/
│  │  ├─ useHoge.ts/
│  │  ├─ index.ts/
│  ├─ apis/
│  │  ├─ get-posts.ts/
│  │  ├─ index.ts/
│  ├─ types/
│  │  ├─ posts-type.ts/
│  │  ├─ index.ts/
│  ├─ tests/
│  ├─ stories/
```


## page-components
featuresのcomponentをレイアウトに合うように置いていく場所。<br />
基本的にdivタグとcoponentでスタイルを調整して、表示するページ要件に合うように配置していく。<br />
Nextjsのpagesルーティング内でなるべく依存関係を作らないように一つレイヤーを挟むイメージ。
```
page-components
├─ posts/
│  ├─ Page.tsx/
│  ├─ index.ts/ 
```

```
// Page
 <div>
    <div>
      <Posts />
    </div>
    <div style={{ margin-top: '10px' }}>
      <Albums />
    </div>
 </div>
```
