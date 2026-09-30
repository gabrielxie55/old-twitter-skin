// ---------- 关掉皮肤时，图标上显示 OFF ----------
function updateBadge(on) {
  chrome.action.setBadgeText({ text: on ? '' : 'OFF' });
  chrome.action.setBadgeBackgroundColor({ color: '#999999' });
}
chrome.storage.local.get('otsEnabled', (r) => updateBadge(r.otsEnabled !== false));
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && changes.otsEnabled) updateBadge(changes.otsEnabled.newValue !== false);
});

// ---------- 开发模式自动刷新 ----------
// 插件文件一改，自动重新加载插件并刷新 x.com
// 只在「加载未打包的扩展程序」时生效；从应用商店装的版本有 update_url，这段不会跑

const DEV = !('update_url' in chrome.runtime.getManifest());
const WATCH = ['manifest.json', 'dev-reload.js', 'content.js', 'styles.css', 'era2010.css', 'background.js', 'popup.html', 'popup.js'];

async function signature() {
  const texts = await Promise.all(WATCH.map((f) =>
    fetch(chrome.runtime.getURL(f), { cache: 'no-store' }).then((r) => r.text()).catch(() => '')));
  return texts.map((t) => {
    let h = 0;
    for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0;
    return t.length + ':' + h;
  }).join('|');
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!DEV || msg !== 'ots-dev-check') return;
  (async () => {
    const now = await signature();
    const { otsSig } = await chrome.storage.session.get('otsSig');
    if (!otsSig) {
      await chrome.storage.session.set({ otsSig: now });
      sendResponse({ reload: false });
      return;
    }
    if (otsSig !== now) {
      sendResponse({ reload: true });
      setTimeout(() => chrome.runtime.reload(), 150);
    } else {
      sendResponse({ reload: false });
    }
  })();
  return true;
});
