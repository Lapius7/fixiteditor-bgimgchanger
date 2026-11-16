# Background Image Changer

[English](README.md)

[Fixit Editor](https://fixit-editor.lapius7.com/) の背景に好きな画像を置く拡張機能です。設定画面から、画像・不透明度・ぼかし・表示方法を変えられます。

拡張機能の id: `lapius7.bgimgchanger` · [拡張機能のページ](https://fixit-editor.lapius7.com/ja/extensions/lapius7.bgimgchanger)

## 設定

| 項目 | 内容 |
|---|---|
| 背景画像を表示する | 画像を出すかどうか |
| 背景画像 | png / jpeg / webp / gif / avif(12 MB まで)。「外す」で画像を消す |
| 不透明度 | 0.05〜1 |
| ぼかし | 0〜30 |
| 表示方法 | 全体を埋める / 全体を収める / 中央に原寸 / 並べる |

コマンドパレットから「背景画像のオン・オフ」も使えます。

## 入れ方

公式の[拡張機能ページ](https://fixit-editor.lapius7.com/ja/extensions/lapius7.bgimgchanger)で公開しています(認証済み)。Fixit 1.3.1 以降で、次のどちらかで入れます。

- Fixit の「拡張機能」画面の「探す」で「bgimgchanger」を検索し、「入れる」を押す
- 上の拡張機能ページの「Fixit で開く」を押す(Fixit 1.4.0 以降)

入れる前に、求める権限を確かめて許可してください。

### 開発版を試す

このリポジトリの内容を試すときは、Fixit 1.4.0 以降の「拡張機能」画面の検索欄に `https://github.com/Lapius7/fixiteditor-bgimgchanger` を貼って「取得」を押します。審査も署名もない未認証の扱いになります。

## 権限

`ui`(画面の見た目の変更)だけです。ネットワークやファイルの読み書きはしません。画像は本体が管理し、この拡張機能は画像そのものを読みません。

## ライセンス

[MIT](LICENSE)
