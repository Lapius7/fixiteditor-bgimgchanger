// 背景画像を設定画面から変える拡張機能。
// 画像の選択と保存は本体の設定画面が受け持ち、ここでは設定を背景に反映するだけ。
let timer = null;

function apply(fixit) {
  const s = fixit.settings.all();
  if (!s.enabled || !s.image) return fixit.ui.setBackgroundImage(null);
  return fixit.ui.setBackgroundImage({ ref: s.image.ref, opacity: s.opacity, blur: s.blur, fit: s.fit });
}

exports.activate = async function (fixit) {
  const fail = (e) => fixit.ui.showMessage(String((e && e.message) || e), "error");
  // スライダーを動かしている間は、少し待ってから 1 回だけ反映する
  fixit.settings.onDidChange(() => {
    clearTimeout(timer);
    timer = setTimeout(() => Promise.resolve(apply(fixit)).catch(fail), 120);
  });
  fixit.commands.register("toggle", () => fixit.settings.set("enabled", !fixit.settings.get("enabled")));
  await apply(fixit);
};
