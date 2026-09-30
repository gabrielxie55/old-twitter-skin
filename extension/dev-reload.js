// 开发模式自动刷新：每 2 秒问一下后台插件文件有没有改，改了就刷新页面
// 单独放一个文件：主脚本 content.js 就算写坏了，这里也照常工作，修好后能自动装上
// 从应用商店装的版本（有 update_url）不会跑这段
(() => {
  let manifest;
  try { manifest = chrome.runtime.getManifest(); } catch (e) { return; }
  if ('update_url' in manifest) return;
  const timer = setInterval(() => {
    try {
      chrome.runtime.sendMessage('ots-dev-check', (res) => {
        if (chrome.runtime.lastError) return;
        if (res && res.reload) { clearInterval(timer); setTimeout(() => location.reload(), 900); }
      });
    } catch (e) {
      // 插件已经被重新加载，这个旧脚本失效了，刷新页面换成新的
      clearInterval(timer);
      location.reload();
    }
  }, 2000);
})();
