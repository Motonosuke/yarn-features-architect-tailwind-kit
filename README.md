## メインライブラリ
- TypeScript
- Next.js
- Recoil
- SWR
- Zod
- Tailwind CSS
- ESlint
- Prettier
- husky

## ディレクトリ構成

```
src
├── components        # アプリケーション全体で使用できる共通コンポーネント
├── constants         # pathや環境変数などをエクスポートするところ
├── features          # 機能ベースモジュール
├── hooks             # アプリケーション全体で使用できる共通hooks
├── libs              # ライブラリをアプリケーション用に設定して再度エクスポートしたもの
├── providers         # アプリケーションのすべてのプロバイダー
├── stores            # グローバルステートを一元管理するところ
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
components、hooksなどこのディレクトリ階層は必要に応じて増えたり、減ったり（testsやstoriesなど）する。

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

## 命名規則
コード命名規則はESlintの設定に準ずる。

### src/のディレクトリ・ファイル命名規則
| 対象ファイル | 命名規則  |
|:-----------|:------------|
| components |パスカルケース（PascalCase） |
| page-components |パスカルケース（PascalCase） |
| hooks       | キャメルケース（camelCase）|
| 上記以外 |ケバブケース（kebab-case）|

* src/pagesのpath（url）について <br />
以下参考に２単語以上の英単語の場合はケバブケース（kebab-cse）を推奨。<br />
[Google検索セントラル](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=ja)
