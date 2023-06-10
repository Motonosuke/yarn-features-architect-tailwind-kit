<p align="center">
  <a href="https://nextjs.org">
    <img alt="NextJS" src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" width="60" />
  </a>
</p>
<h1 align="center">
  NextJS Starter Essentials
</h1>

[NextJS](https://nextjs.org) project starter extended with tools to help you boost your development experience.

## Main Library
- TypeScript
- Next.js
- Recoil
- SWR
- Zod
- Tailwind CSS
- ESlint
- Prettier
- husky

## Folder Structure

```
src
├── components        # Common components that can be used throughout the application
├── constants         # Place to export paths, environment variables, etc
├── features          # Feature-based modules
├── hooks             # Common hooks that can be used throughout the application
├── libs              # Libraries configured and re-exported for the application
├── providers         # All providers of the application
├── stores            # Place to centrally manage global state
├── page-components   # Place to aggregate components from features
├── pages             # Next.js routing system
├── styles            # CSS used throughout the application (intended for overrides, etc.)
├── types             # Definitions of basic types used throughout the application
└── utils             # Common utility functions
```

### src/components
In the components directory, you place common parts such as Header and Footer, as well as small UI elements with fine-grained granularity like buttons and spinners within the Elements file.

```
components
├─ Elements/
│  ├─ Button/
│  │  ├─ Button.tsx/
│  │  ├─ Button.stories.tsx/
│  │  ├─ index.ts/
├─ Header/
├─ Footer/
├─ Layouts/
```

#### src/components/Layouts
In the Layouts directory, you place layouts such as MainLayout and ErrorLayout. In _app.tsx, minimal necessary processing is written to avoid nesting many providers. Other processing is defined for each layout to minimize the "First Load JS shared by all". Note that if the layout is switched, the state defined in each layout cannot be preserved.
```
─ Layouts/
  ├─ MainLayout.tsx/
  ├─ ErrorLayout.tsx/
  ├─ index.ts/
```

``` ts
// MainLayout
  <RecoilRoot>
     <GlobalStateMainLayoutProvider>
       <MainHeader />
       <main>
         <div>{page}</div>
       </main>
     </GlobalStateMainLayoutProvider>
   </RecoilRoot>
```
``` ts
// ErrorLayout
    <>
      <MainHeader />
      <main>
        <div>{page}</div>
      </main>
    </>
```

### src/features
The directory hierarchy of components, hooks, etc. in this directory can increase or decrease as needed (such as validates, tests, stories, etc.).

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
│  ├─ validates/
│  ├─ tests/
│  ├─ stories/
```


### src/page-components
This is the place where components from features are placed to match the layout. Generally, adjust the style using div tags and components, and position them to meet the requirements of the displayed page. Try to avoid creating dependencies within Next.js' pages routing by adding an extra layer of abstraction.
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

## Naming Conventions
The code naming conventions follow the configuration of ESLint.

### Naming Conventions for src/ Directories and Files
| Target File | Naming Convention |
|:-----------|:------------|
| components |PascalCase |
| page-components |PascalCase |
| hooks       | camelCase |
| Others |kebab-case |

Please refer to the following for more information:
vercel/commerce

Regarding the paths (URLs) in src/pages:
For URLs with two or more English words, it is recommended to use kebab-case.
[https://developers.google.com/search/docs/crawling-indexing/url-structure](Google Search Central) can be referenced for more information.


<hr />

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

### src/components
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
├─ Layouts/
```

#### src/components/Layouts
LayoutsではMainLayoutやErrorLayoutなどを置く。<br />
_app.tsxでproviderを沢山ネストさせないために、_app.tsxでは必要最低限の処理を書き、他はLayout毎にに定義してFirst Load JS shared by allを少なくさせる。<br />
＊ Layoutが切り替わってしまう場合は、各Layoutに定義されている状態を保持できないので注意する。
```
─ Layouts/
  ├─ MainLayout.tsx/
  ├─ ErrorLayout.tsx/
  ├─ index.ts/
```

``` ts
// MainLayout
  <RecoilRoot>
     <GlobalStateMainLayoutProvider>
       <MainHeader />
       <main>
         <div>{page}</div>
       </main>
     </GlobalStateMainLayoutProvider>
   </RecoilRoot>
```
``` ts
// ErrorLayout
    <>
      <MainHeader />
      <main>
        <div>{page}</div>
      </main>
    </>
```

### src/features
components、hooksなどこのディレクトリ階層は必要に応じて増えたり、減ったり（validates、tests、storiesなど）する。<br />

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
│  ├─ validates/
│  ├─ tests/
│  ├─ stories/
```


### src/page-components
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

以下を参考 <br />
[vercel/commerce](https://github.com/vercel/commerce)
<br />
<br />
src/pagesのpath（url）について <br />
以下参考に２単語以上の英単語の場合はケバブケース（kebab-cse）を推奨。<br />
[Google検索セントラル](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=ja)


