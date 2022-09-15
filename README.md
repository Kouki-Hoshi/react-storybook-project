# React - storybooks 導入

## nodejs のインストール

開発目的でない場合、node のバージョンは最新版を使えばいいと思います。

実際の開発現場では [nodenv](https://github.com/nodenv/nodenv) などで node のバージョン管理ツールを使ってインストールする方がいいです。

なお、本プロジェクトは node v16.10.0 で確認しています。

## React アプリの作成

筆者は型付言語が好きなので、typescript にて作成しています。

```
$ npx create-react-app storybook-projects --template typescript
```

正常にプロジェクトが作成できたらプロジェクトフォルダに移動します。

```
$ cd storybook-projects
```

## storybook のインストール

```
$ npx storybook init
```

詳しくは下記を読む。

https://storybook.js.org/docs/react/get-started/install

## storybook を立ち上げる

下記で起動すればインストール完了。

```
$ npm run storybook
```

## React プロジェクトを整える

### tsconfig 設定

{project_dir}/tsconfig.json の compilerOptions 要素直下に下記を追加。

```
    "baseUrl": "./",
    "paths": {
      "@atoms/*": ["src/components/atoms", "src/components/atoms/*"],
      "@molecules/*": ["src/components/molecules", "src/components/molecules/*"],
      "@organisms/*": ["src/components/organisms", "src/components/organisms/*"],
    },
```

{project_dir}/tsconfig.json の中身にある `"isolatedModules": true,` の部分を下記に変更。

(tsx ファイルの root 要素に type 宣言したいため)

```
    "isolatedModules": false,
```

### アトミックデザインを採用したフォルダ構造を作成

下記のフォルダを {project_dir}/src 直下に作成する。

- components
  - atoms
  - molecules
  - organisms

Atomic デザインについてはこちら。

https://bradfrost.com/blog/post/atomic-web-design/

### storybook フォルダ構造を作成

stories/ 以下を全て削除する。

```
$ rm -r src/stories/*
```

下記のフォルダを src/stories 直下に作成する。

### styled-component を導入

css もコンポーネント指向に組み込んで作りたいため。

```
$ npm install --save styled-components
$ npm install --save-dev @types/styled-components tsconfig-paths-webpack-plugin
```

## component を作成する
