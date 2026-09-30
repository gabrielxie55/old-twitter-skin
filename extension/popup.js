// 点插件图标弹出的小面板
//   皮肤开关：所有标签页一起开关
//   这个标签页用皮肤：只影响当前标签页，方便开两个窗口和原版对比

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
  if (!globalOn) status.textContent = '已关闭：所有 x.com 页面都显示原版';
  else if (tabOff) status.textContent = '这个标签页显示原版，其他标签页还是古早推特';
  else status.textContent = '已开启：x.com 现在是古早推特的样子';
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
      tabHint.textContent = '先打开一个 x.com 标签页再用';
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
