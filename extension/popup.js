// 点插件图标弹出的小面板
//   皮肤开关：所有标签页一起开关
//   这个标签页用皮肤：只影响当前标签页，方便开两个窗口和原版对比

// 面板文字跟着浏览器语言：中文（简 / 繁）或英文
const UI = (chrome.i18n && chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : navigator.language).toLowerCase();
const LANG = !UI.startsWith('zh') ? 'en' : /hant|tw|hk|mo/.test(UI) ? 'zh-hant' : 'zh';
const TXT = {
  en: {
    title: 'Old Twitter Skin', skin: 'Skin on', skinHint: 'Turns it on or off in every tab', retro: 'Internet café mode',
    retroHint: 'Jagged text and pixelated pictures, like a 2010 CRT monitor', tab: 'Skin in this tab',
    tabHint: 'Only affects this tab, handy for comparing with today\u2019s X', tabNone: 'Open an x.com tab first',
    era: 'Version', era2010: '2010 Clouds', era2013: '2013 Black bar',
    tip: 'To change the background, click <b>Background</b> at the bottom left of x.com', by: 'By', xhs: 'Xiaohongshu',
    off: 'Off: every x.com page shows today\u2019s X', tabOff: 'This tab shows today\u2019s X; other tabs keep the old look', on: 'On: x.com looks like old Twitter',
  },
  zh: {
    title: '古早推特皮肤', skin: '皮肤开关', skinHint: '所有标签页一起开关', retro: '网吧模式',
    retroHint: '锯齿字加像素头像，像 2010 年在网吧大头显示器上刷推', tab: '这个标签页用皮肤',
    tabHint: '关掉只影响当前这一页，方便和原版对比', tabNone: '先打开一个 x.com 标签页再用',
    era: '版本', era2010: '2010 云朵版', era2013: '2013 黑条版',
    tip: '想换背景？在 x.com 页面<b>左下角</b>点「换背景」', by: '作者', xhs: '小红书',
    off: '已关闭：所有 x.com 页面都显示原版', tabOff: '这个标签页显示原版，其他标签页还是古早推特', on: '已开启：x.com 现在是古早推特的样子',
  },
  'zh-hant': {
    title: '古早推特皮膚', skin: '皮膚開關', skinHint: '所有分頁一起開關', retro: '網咖模式',
    retroHint: '鋸齒字加像素頭像，像 2010 年在網咖大頭螢幕上刷推', tab: '這個分頁用皮膚',
    tabHint: '關掉只影響目前這一頁，方便和原版對比', tabNone: '先打開一個 x.com 分頁再用',
    era: '版本', era2010: '2010 雲朵版', era2013: '2013 黑條版',
    tip: '想換背景？在 x.com 頁面<b>左下角</b>點「換背景」', by: '作者', xhs: '小紅書',
    off: '已關閉：所有 x.com 頁面都顯示原版', tabOff: '這個分頁顯示原版，其他分頁還是古早推特', on: '已開啟：x.com 現在是古早推特的樣子',
  },
}[LANG];
document.documentElement.lang = LANG === 'en' ? 'en' : LANG === 'zh' ? 'zh-CN' : 'zh-TW';
document.querySelectorAll('[data-t]').forEach((n) => {
  const v = TXT[n.dataset.t];
  if (v == null) return;
  if (n.hasAttribute('data-html')) n.innerHTML = v; else n.textContent = v;
});

const box = document.getElementById('enabled');
const tabBox = document.getElementById('tabOn');
const tabRow = document.getElementById('tabRow');
const tabHint = document.getElementById('tabHint');
const status = document.getElementById('status');

let globalOn = true;
let tabOff = false;
let tabId = null;

function render() {
  box.checked = globalOn;
  tabBox.checked = !tabOff;
  tabBox.disabled = tabId == null || !globalOn;
  tabRow.classList.toggle('disabled', tabBox.disabled);
  if (!globalOn) status.textContent = TXT.off;
  else if (tabOff) status.textContent = TXT.tabOff;
  else status.textContent = TXT.on;
}

chrome.storage.local.get('otsEnabled', (r) => {
  globalOn = r.otsEnabled !== false;
  render();
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs && tabs[0];
  if (!tab) return render();
  chrome.tabs.sendMessage(tab.id, { type: 'ots-tab' }, (res) => {
    if (chrome.runtime.lastError || !res) {
      tabHint.textContent = TXT.tabNone;
    } else {
      tabId = tab.id;
      tabOff = !!res.off;
    }
    render();
  });
});

// 网吧模式
const retroBox = document.getElementById('retroOn');
chrome.storage.local.get('otsRetro', (r) => { retroBox.checked = r.otsRetro === true; });
retroBox.addEventListener('change', () => chrome.storage.local.set({ otsRetro: retroBox.checked }));

// 版本：2010 云朵版 / 2013 黑色导航栏版
const eraBtns = [...document.querySelectorAll('[data-era]')];
function renderEra(era) { eraBtns.forEach((b) => b.classList.toggle('active', b.dataset.era === era)); }
chrome.storage.local.get('otsEra', (r) => renderEra(r.otsEra === '2010' ? '2010' : '2013'));
eraBtns.forEach((b) => b.addEventListener('click', () => {
  chrome.storage.local.set({ otsEra: b.dataset.era });
  renderEra(b.dataset.era);
}));

box.addEventListener('change', () => {
  globalOn = box.checked;
  chrome.storage.local.set({ otsEnabled: globalOn });
  render();
});

tabBox.addEventListener('change', () => {
  if (tabId == null) return;
  tabOff = !tabBox.checked;
  chrome.tabs.sendMessage(tabId, { type: 'ots-tab', off: tabOff }, () => void chrome.runtime.lastError);
  render();
});
