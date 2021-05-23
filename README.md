### 雛形作成

- `yarn create next-app .`

### ディレクトリ構成の変更

- `mkdir src && \ mv pages/ src/pages & \ mv styles/ src/styles`

### TypeScript の導入

- `yarn add -D typescript @types/react @types/react-dom @types/node`
- `tsconfig.json` , `next-env.d.ts` を作成
- `yarn dev` で tsconfig.json に書き込みを行う

## コードの自動整形設定

- vscode のプラグインから `prettier` と `ES7 React` のアドオンを追加
- eslint prettier 関連のパッケージをインストール（windows の場合はコマンドが違うかもしれません）
  - `yarn add -D eslint prettier eslint-config-prettier`
  - `yarn add -D @typescript-eslint/{parser,eslint-plugin}`
  - `yarn add -D eslint-plugin-{react,react-hooks}`
- `.eslintrc.json` の作成
- `.prettierrc.json` の作成 （詳しい設定については後ほど）
- package.json に`"eslint:fix": "eslint . --ext .js,.ts,.jsx,.tsx --fix"`および`"prettier:fix": "prettier --write ."`を追加
- `yarn prettier:fix`を実行

## Readux Toolkit の導入

- `yarn add redux react-redux @reduxjs/toolkit redux-logger`
- `yarn add -D @types/react-redux @types/redux-logger`

## 参考ページ

- [参考](https://zenn.dev/higa/articles/d7bf3460dafb1734ef43#%E6%8A%80%E8%A1%93%E9%81%B8%E5%AE%9A)

## StoryBook の導入

- [インストール方法](https://zenn.dev/higa/articles/d7bf3460dafb1734ef43#12.-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%AB%E3%82%BF%E3%83%AD%E3%82%B0%E3%81%AE%E8%BF%BD%E5%8A%A0)
- sass-loader が v11.0.1 だと動かないので`yarn add -D sass-loader@10.1.1`で 10 系をインストールする
- CSS modeles を適用するために、main.js に以下を追記 [参考](https://qiita.com/miyawa-tarou/items/3f6166e7b617634e6a1c)
  ` config.module.rules.push({ test: /\.scss$/, use: [ 'style-loader', { loader: 'css-loader', options: { importLoaders: 1, // 1 => postcss-loader modules: { localIdentName: '[local]___[hash:base64:2]', }, }, }, 'sass-loader', ], });`
