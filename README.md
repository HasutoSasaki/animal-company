# Vue.js プロジェクトの立ち上げマニュアル

このドキュメントでは、Vue.jsプロジェクトの立ち上げから始まるまでのステップバイステップのガイドを提供します。

## 必要条件

- Node.js (バージョン 12.x 以上)
- npm (Node Package Manager)

## プロジェクトのセットアップ

1.  **Node.js と npm のインストール**

    - [Node.js](https://nodejs.org/) を公式サイトからダウンロードし、インストールしてください。こだわりがなければ最新版で良いかと思います。
    - インストール後、ターミナルで `node -v` と `npm -v` を実行して、正しくインストールされたか確認してください。

2.  **Vueのインストール**

    - ターミナルを開き、以下のコマンドを実行して Vue をインストールしてください。

      ```shell
      $ npm create vue@latest
      ```

      ```shell
      ✔ Project name: … <your-project-name>
      ✔ Add TypeScript? … No / 'Yes'
      ✔ Add JSX Support? … 'No' / Yes
      ✔ Add Vue Router for Single Page Application development? … No / 'Yes'
      ✔ Add Pinia for state management? … 'No' / Yes
      ✔ Add Vitest for Unit testing? … 'No' / Yes
      ✔ Add an End-to-End Testing Solution? … 'No' / Cypress / Nightwatch / Playwright
      ✔ Add ESLint for code quality? … No / 'Yes'
      ✔ Add Prettier for code formatting? … No / 'Yes'
      ✔ Add Vue DevTools 7 extension for debugging? 　(experimental) … No / 'Yes'

      Scaffolding project in ./<your-project-name>...
      Done.
      ```

    - インストールができたら、ローカルサーバーを立ち上げよう

      ```shell
      $ cd <your-project-name>
      $ npm install
      $ npm run dev
      ```

3.  sassのインストール
    - ```sh
      $ npm install sass
      ```
