# Work Story Award Website

[![Build and Deploy](https://github.com/username/award.atwill.work/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/username/award.atwill.work/actions/workflows/build-and-deploy.yml)

Work Story Award（働き方ストーリーアワード）の公式ウェブサイトです。2017年から2021年までの受賞ストーリーを紹介しています。

🌐 **サイトURL**: [https://award.atwill.work](https://award.atwill.work)

## 🚀 クイックスタート

### 1. 環境準備
```bash
# リポジトリをクローン
git clone https://github.com/username/award.atwill.work.git
cd award.atwill.work

# 依存関係をインストール
npm install
```

### 2. 開発開始
```bash
# 開発サーバーを起動（推奨）
npm run dev
```

ブラウザが自動で開き、http://localhost:3000 でサイトを確認できます。
SCSSファイルを編集すると、自動でCSSにコンパイルされブラウザが更新されます。

## 📝 開発コマンド

| コマンド | 説明 |
|---------|-----|
| `npm install` | 依存関係をインストール（初回のみ） |
| `npm run dev` | 開発サーバー起動 + SCSS監視（**推奨**） |
| `npm run build` | 本番用CSSをビルド |
| `npm run watch:css` | SCSSファイルの監視のみ |
| `npm run serve` | ローカルサーバーのみ起動 |

## 📁 プロジェクト構造

```
award.atwill.work/
├── index.html              # メインページ（2021年版）
├── 2017/ ~ 2021/          # 各年度のアーカイブページ
├── stories2017/ ~ 2021/   # 各年度のストーリーページ
├── src/
│   └── scss/              # 📝 SCSS ソースファイル
│       ├── award2020.scss      # メインエントリーポイント
│       ├── foundation/         # 基礎スタイル・ミキシン
│       ├── layout/            # ヘッダー・フッター・レイアウト
│       └── object/component/  # UIコンポーネント
├── assets/
│   ├── css/
│   │   └── award2020.css  # 🤖 自動生成（編集禁止）
│   └── js/                # JavaScript ファイル
├── package.json           # Node.js 設定
└── .github/workflows/     # GitHub Actions（自動デプロイ）
```

## ✏️ 開発の流れ

### SCSS編集
1. **`src/scss/`** ディレクトリ内のファイルを編集
2. 自動でCSSにコンパイルされる
3. ブラウザが自動更新される

```scss
// src/scss/award2020.scss の例
body {
  background-color: #f5f5f5;
  font-family: "Noto Sans Japanese", sans-serif;
}
```

### HTML編集
- `index.html` やその他のHTMLファイルを直接編集
- 保存すると自動でブラウザが更新される

### JavaScript編集
- `assets/js/` ディレクトリ内のファイルを編集
- 主にjQueryベースのスクリプト

## 🚨 重要な注意事項

### ❌ やってはいけないこと
- **`assets/css/award2020.css`を直接編集** - 自動生成されるため変更が失われます
- **`node_modules/`を編集** - 依存関係は`package.json`で管理

### ✅ 正しい編集方法
- **SCSS**: `src/scss/` ディレクトリ内のファイルを編集
- **HTML**: ルートディレクトリのHTMLファイルを直接編集
- **JS**: `assets/js/` ディレクトリのファイルを編集

## 🌍 デプロイメント

### GitHub Pages（自動）
- `main`ブランチにプッシュすると自動でビルド・デプロイされます
- GitHub Actionsが以下を実行：
  1. Node.js環境を構築
  2. 依存関係をインストール
  3. SCSSをCSSにコンパイル
  4. GitHub Pagesにデプロイ

### 手動ビルド
本番用CSSを手動で生成する場合：
```bash
npm run build
```

## 🛠️ 技術仕様

- **HTML5** + セマンティックマークアップ  
- **SCSS** → CSS コンパイル（Dart Sass使用）
- **UIKit v3** CSSフレームワーク
- **jQuery** JavaScript ライブラリ
- **Movable Type** CMS連携（ストーリー管理）
- **GitHub Pages** ホスティング + 自動デプロイ

## 🔧 トラブルシューティング

### CSSが反映されない
```bash
# キャッシュをクリアしてビルド
rm -rf assets/css/award2020.css*
npm run build
```

### 開発サーバーが起動しない
```bash
# node_modulesを再インストール  
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### SCSSコンパイルエラー
- `src/scss/`内のSCSS構文をチェック
- インポートパスが正しいか確認
- 文字コードがUTF-8か確認

## 📞 サポート

- **Issues**: GitHub Issuesでバグ報告・機能要望
- **Documentation**: `CLAUDE.md`に開発者向け詳細情報
- **Work History**: `WORK_HISTORY.md`に作業履歴

---

**at Will Work** - [https://www.atwill.work](https://www.atwill.work)