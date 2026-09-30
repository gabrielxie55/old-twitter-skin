// 古早推特 2013 皮肤（非官方）
// 只改外观：给页面加样式、补几个 2013 版才有的部件（顶部黑色导航栏、横幅资料卡、首页迷你资料卡），
// 所有按钮都转交给 x.com 自己原本的按钮去点，不调用任何接口，不读取、不上传数据

(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ---------- 图标（本项目自己画的，不用官方素材） ----------
  const ICON = {
    bird: '<svg viewBox="0 0 24 20" aria-hidden="true"><path fill="currentColor" d="M3.6 12.4C3.6 7.6 7.6 4 12.6 4c3 0 5.1 1.3 6.2 3.3l3-.6-2 2.6c0 4.9-3.9 8.7-9.2 8.7-3 0-5.4-1.3-6.6-3.3l-2.6.6 2.2-2.9z"/><path fill="#000" fill-opacity=".28" d="M7.5 11.2c2.2-2.3 5.6-2.6 8.2-.8-2.2 2.9-5.9 3.3-8.2.8z"/><circle cx="16.2" cy="7.9" r="1" fill="#222"/></svg>',
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3 2.5 11h2.8v9.5h5.2v-6h3v6h5.2V11h2.8z"/></svg>',
    at: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5a9.5 9.5 0 1 0 5.2 17.4l-1.1-1.7A7.5 7.5 0 1 1 19.5 12v1.2c0 1.1-.7 1.8-1.6 1.8s-1.6-.7-1.6-1.8V7.5h-2v.9a4.5 4.5 0 1 0 .6 6.5 3.5 3.5 0 0 0 3 1.9c2 0 3.6-1.6 3.6-3.8V12A9.5 9.5 0 0 0 12 2.5zm0 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>',
    hash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9.6 3 8.9 8H5v2.2h3.6l-.6 3.6H4.2V16h3.5l-.7 5h2.3l.7-5h3.6l-.7 5h2.3l.7-5H20v-2.2h-3.6l.6-3.6h3.8V8h-3.5l.7-5h-2.3l-.7 5h-3.6l.7-5zm1.3 7.2h3.6l-.6 3.6h-3.6z"/></svg>',
    me: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 12a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2zm-8.5 9.2c0-4.2 3.8-7.2 8.5-7.2s8.5 3 8.5 7.2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2.5 5h19v14h-19zm2.3 2 7.2 5.6L19.2 7zm14.7 2.4-7.5 5.8-7.5-5.8V17h15z"/></svg>',
    history: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.5 2.5h13v19L12 16.8l-6.5 4.7zm2.2 2.2v12.5l4.3-3.1 4.3 3.1V4.7z"/></svg>',
    gear: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m13.7 2 .5 2.6 1.6.7 2.2-1.5 2.4 2.4-1.5 2.2.7 1.6 2.6.5v3.4l-2.6.5-.7 1.6 1.5 2.2-2.4 2.4-2.2-1.5-1.6.7-.5 2.6h-3.4l-.5-2.6-1.6-.7-2.2 1.5-2.4-2.4 1.5-2.2-.7-1.6L2 13.7v-3.4l2.6-.5.7-1.6-1.5-2.2 2.4-2.4 2.2 1.5 1.6-.7.5-2.6zM12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8z"/></svg>',
    quill: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21 2.5c-7.2.8-12.3 5.2-14.6 12.4L5 19.4l1.6-.6c.9-2.6 2.5-4.3 4.7-5.3l-1.6-.3c2.6-1.1 5.6-3.6 7.2-6.3-.9.2-1.9.2-2.8 0C17.7 5.8 19.8 4.6 21 2.5zM3 21.5h8v-1.6H3z"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10.3 3a7.3 7.3 0 0 1 5.9 11.6l4.8 4.8-1.6 1.6-4.8-4.8A7.3 7.3 0 1 1 10.3 3zm0 2.2a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2z"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#2DA9E1"/><path fill="#fff" d="m10.4 16.2-4-4 1.5-1.5 2.5 2.5 5.7-5.7 1.5 1.5z"/></svg>',
    palette: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5C6.5 2.5 2.5 6.6 2.5 11.6c0 5 4 9.4 8.9 9.4 1.5 0 2.3-.9 2.3-2 0-1.3-1.1-1.7-1.1-3 0-1.2 1-2 2.3-2h2.4c2.9 0 4.2-1.9 4.2-4.4 0-4-4.1-7.1-9.5-7.1zM6.8 12.6a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zm2.7-4.4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zm5 0a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zm3.4 3.2a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2z"/></svg>',
    followBird: '<svg viewBox="0 0 24 20" aria-hidden="true"><path fill="currentColor" d="M3.6 12.4C3.6 7.6 7.6 4 12.6 4c3 0 5.1 1.3 6.2 3.3l3-.6-2 2.6c0 4.9-3.9 8.7-9.2 8.7-3 0-5.4-1.3-6.6-3.3l-2.6.6 2.2-2.9z"/></svg>',
  };

  // ---------- 找到 x.com 自己的按钮，转交点击 ----------
  const NATIVE = {
    home: 'a[data-testid="AppTabBar_Home_Link"]',
    notifications: 'a[data-testid="AppTabBar_Notifications_Link"]',
    explore: 'a[data-testid="AppTabBar_Explore_Link"]',
    profile: 'a[data-testid="AppTabBar_Profile_Link"]',
    messages: 'a[data-testid="AppTabBar_DirectMessage_Link"], header a[href="/i/chat"], header a[href^="/messages"]',
    compose: 'a[data-testid="SideNav_NewTweet_Button"]',
    history: 'header a[href="/i/history"], header a[href="/i/bookmarks"], a[data-testid="AppTabBar_Bookmarks_Link"]',
    account: '[data-testid="SideNav_AccountSwitcher_Button"]',
  };

  function clickNative(key, fallbackHref) {
    const el = $(NATIVE[key]);
    if (el) el.click();
    else if (fallbackHref) location.assign(fallbackHref);
  }

  function myProfilePath() {
    const a = $(NATIVE.profile);
    return a ? a.getAttribute('href') : null;
  }

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function hide(node) {
    if (node && !node.classList.contains('ots-hidden')) node.classList.add('ots-hidden');
  }

  // 从一块区域里认出「名字」和「@用户名」，跳过 Get verified、Follows you 这类小标签
  function nameAndHandle(root) {
    const texts = $$('div[dir="ltr"], div[dir="auto"], span', root)
      .filter((n) => !n.querySelector('div[dir], span'))
      .map((n) => n.textContent.trim())
      .filter(Boolean);
    const handle = texts.find((t) => /^@\w{1,30}$/.test(t)) || '';
    const name = texts.find((t) => !t.startsWith('@') && !/^(Get verified|Follows you|获得认证|获取认证|关注了你|·)$/i.test(t)) || handle;
    return { name, handle };
  }

  // ---------- 深色模式也强制显示 2013 的浅色 ----------
  // 推特深色模式用的颜色都写在它自己的样式表里，这里把那几种深色一一换成 2013 的浅色
  const DARK = {
    text: ['231,233,234', '247,249,249', '217,217,217'],
    icon: ['239,243,244'],
    muted: ['113,118,123', '139,152,165', '110,118,125'],
    bgBase: ['0,0,0', '21,32,43', '20,20,20'],
    bgRaised: ['22,24,28', '30,39,50', '25,39,52', '32,35,39', '39,51,64', '24,24,24', '16,16,16', '8,8,8'],
    border: ['47,51,54', '56,68,77', '51,54,57', '62,65,68', '66,83,100'],
  };
  const COLOR_PROPS = ['color', 'fill', 'stroke', 'background-color', 'border-color',
    'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'outline-color'];
  const seenRules = new WeakMap();
  const doneRules = new WeakSet();
  let remapStyle = null;

  function remapValue(prop, value) {
    const m = value.match(/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\s*\)/);
    if (!m) return null;
    const key = `${m[1]},${m[2]},${m[3]}`;
    const a = m[4] == null ? 1 : parseFloat(m[4]);
    if (prop === 'color' || prop === 'fill' || prop === 'stroke') {
      if (DARK.text.includes(key)) return '#333333';
      if (DARK.icon.includes(key)) return '#777777';
      if (DARK.muted.includes(key)) return '#999999';
      return null;
    }
    if (prop === 'background-color') {
      // 只换纯黑底和吸顶标题栏那种 0.65 / 0.75 的半透明黑；其他半透明的黑是视频、图片上的遮罩，换了会蒙一层白
      if (DARK.bgBase.includes(key)) {
        if (a >= 0.99) return '#ffffff';
        if (Math.abs(a - 0.65) < 0.01 || Math.abs(a - 0.75) < 0.01) return 'STICKY:rgba(255,255,255,0.97)';
        return null;
      }
      if (DARK.bgRaised.includes(key)) return '#f9f9f9';
      if (DARK.border.includes(key)) return '#e8e8e8';
      if (key === '255,255,255' && a < 0.25) return `rgba(0,0,0,${a})`;
      return null;
    }
    if (DARK.border.includes(key)) return '#e8e8e8';
    return null;
  }

  // 形状也一起换：现在推特的大圆角（16px）和胶囊形（9999px）改成 2013 的小圆角
  const RADIUS_PROPS = ['border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius'];
  let shapeStyle = null;

  function shapeRules(r) {
    let out = '';
    for (const p of RADIUS_PROPS) {
      const v = r.style.getPropertyValue(p);
      if (v === '16px' || v === '12px' || v === '9999px') out += `${p}:5px !important;`;
    }
    return out ? `${r.selectorText}{${out}}\n` : '';
  }

  function updateThemeRemap() {
    if (!remapStyle) {
      remapStyle = document.createElement('style');
      remapStyle.id = 'ots-theme-remap';
      shapeStyle = document.createElement('style');
      shapeStyle.id = 'ots-shape-remap';
      (document.head || document.documentElement).append(remapStyle, shapeStyle);
    }
    // 换色规则只针对推特深色模式专用的那几种颜色，浅色模式下用不到，所以一直开着最稳
    remapStyle.media = enabled ? 'all' : 'not all';
    shapeStyle.media = enabled ? 'all' : 'not all';

    let added = '';
    let shapes = '';
    for (const sheet of Array.from(document.styleSheets)) {
      if (sheet.ownerNode === remapStyle || sheet.ownerNode === shapeStyle) continue;
      let rules;
      try { rules = sheet.cssRules; } catch (e) { continue; }
      // 推特会把新样式插在表的中间，所以数量一变就整张重扫，扫过的规则跳过
      if (seenRules.get(sheet) === rules.length) continue;
      for (let i = 0; i < rules.length; i++) {
        const r = rules[i];
        if (doneRules.has(r)) continue;
        doneRules.add(r);
        if (!r.style || !r.selectorText) continue;
        for (const p of COLOR_PROPS) {
          const v = r.style.getPropertyValue(p);
          if (!v) continue;
          const nv = remapValue(p, v);
          if (nv && nv.startsWith('STICKY:')) {
            // 这种半透明黑只在吸顶标题栏里换成白色，图片上的小标签也用它，不能动
            const sel = r.selectorText;
            added += `.ots-sticky${sel.startsWith('.') ? sel : ' ' + sel}, .ots-sticky ${sel}{${p}:${nv.slice(7)} !important}\n`;
          } else if (nv) added += `${r.selectorText}{${p}:${nv} !important}\n`;
        }
        shapes += shapeRules(r);
      }
      seenRules.set(sheet, rules.length);
    }
    if (added) remapStyle.appendChild(document.createTextNode(added));
    if (shapes) shapeStyle.appendChild(document.createTextNode(shapes));
  }

  // ---------- 界面文字：跟着 x.com 的界面语言走 ----------
  // 中文用 2011～2013 年推特官方中文版的叫法（见 参考截图/01-首页整页 里的中文版宣传图）
  const STRINGS = {
    en: {
      home: 'Home', connect: 'Connect', discover: 'Discover', me: 'Me', search: 'Search', messages: 'Messages', history: 'History',
      settings: 'Settings', tweet: 'Tweet', tweets: 'Tweets', following: 'Following', followers: 'Followers',
      follow: 'Follow', editProfile: 'Edit profile', viewProfile: 'View my profile page', compose: 'Compose new Tweet...',
      retro: 'Internet café mode', retroDesc: 'Jagged text and pixelated pictures, like browsing on a 2010 CRT monitor',
      homeRefresh: 'Back to Home (refresh)', profile: 'Profile', findPeople: 'Find People', whatsHappening: 'What\u2019s happening?', tweetBtn: 'Tweet',
      directMessages: 'Direct Messages', favorites: 'Favorites', tweetsCount: 'tweets',
      lblName: 'Name', lblLocation: 'Location', lblWeb: 'Web', lblBio: 'Bio',
      eraTitle: 'Version', era2010: '2010 Clouds', era2013: '2013 Black bar',
      verified: 'Verified account', bgButton: 'Background', bgTitle: 'Change background',
      bgFollow: "Use their header as the background on other people's profiles and Tweets",
      bgMineHint: 'Add a header to your profile, then open your profile once',
      bg: { sky: 'Sky', gingham: 'Gingham', dots: 'Polka dots', stripes: 'Mint stripes', night: 'Night sky', kraft: 'Kraft paper', gray: 'Classic gray', mybanner: 'My header' },
    },
    zh: {
      home: '主页', connect: '联系', discover: '发现', me: '我', search: '搜索', messages: '私信', history: '历史',
      settings: '设置', tweet: '发推', tweets: '推文', following: '正在关注', followers: '关注者',
      follow: '关注', editProfile: '编辑个人资料', viewProfile: '查看我的个人资料页面', compose: '撰写新推文...',
      retro: '网吧模式', retroDesc: '锯齿字加像素头像，像 2010 年在网吧大头显示器上刷推',
      homeRefresh: '回到主页并刷新', profile: '个人资料', findPeople: '找人', whatsHappening: '有什么新鲜事？', tweetBtn: '发推',
      directMessages: '私信', favorites: '收藏', tweetsCount: '条推文',
      lblName: '姓名', lblLocation: '位置', lblWeb: '网站', lblBio: '简介',
      eraTitle: '版本', era2010: '2010 云朵版', era2013: '2013 黑条版',
      verified: '认证账号', bgButton: '换背景', bgTitle: '换个背景',
      bgFollow: '看别人的主页和帖子时，用对方的横幅当背景',
      bgMineHint: '先去自己的主页设置一张横幅，再打开一次自己的主页',
      bg: { sky: '天空', gingham: '蓝格子', dots: '粉圆点', stripes: '薄荷条纹', night: '夜空', kraft: '牛皮纸', gray: '经典灰', mybanner: '我的横幅' },
    },
    'zh-hant': {
      home: '主頁', connect: '聯繫', discover: '發現', me: '我', search: '搜尋', messages: '私訊', history: '歷史',
      settings: '設定', tweet: '發推', tweets: '推文', following: '正在跟隨', followers: '跟隨者',
      follow: '跟隨', editProfile: '編輯個人資料', viewProfile: '查看我的個人資料頁面', compose: '撰寫新推文...',
      retro: '網咖模式', retroDesc: '鋸齒字加像素頭像，像 2010 年在網咖大頭螢幕上刷推',
      homeRefresh: '回到主頁並重新整理', profile: '個人資料', findPeople: '找人', whatsHappening: '有什麼新鮮事？', tweetBtn: '發推',
      directMessages: '私訊', favorites: '收藏', tweetsCount: '則推文',
      lblName: '姓名', lblLocation: '位置', lblWeb: '網站', lblBio: '簡介',
      eraTitle: '版本', era2010: '2010 雲朵版', era2013: '2013 黑條版',
      verified: '認證帳號', bgButton: '換背景', bgTitle: '換個背景',
      bgFollow: '看別人的主頁和貼文時，用對方的橫幅當背景',
      bgMineHint: '先去自己的主頁設定一張橫幅，再打開一次自己的主頁',
      bg: { sky: '天空', gingham: '藍格子', dots: '粉圓點', stripes: '薄荷條紋', night: '夜空', kraft: '牛皮紙', gray: '經典灰', mybanner: '我的橫幅' },
    },
  };
  let LANG = '';
  let T = STRINGS.en;

  function uiLang() {
    const l = (document.documentElement.getAttribute('lang') || navigator.language || 'en').toLowerCase();
    if (!l.startsWith('zh')) return 'en';
    return /hant|tw|hk|mo/.test(l) ? 'zh-hant' : 'zh';
  }

  // 语言变了：插件自己画的部件全部重画
  function refreshLang() {
    const l = uiLang();
    if (l === LANG) return;
    LANG = l;
    T = STRINGS[l];
    document.documentElement.style.setProperty('--ots-l-tweets', JSON.stringify(T.tweets));
    document.documentElement.style.setProperty('--ots-l-home', JSON.stringify(T.home));
    ['#ots-topbar', '#ots-bg-picker', '#ots-mini-profile', '#ots-profile-card', '#ots-side-profile', '#ots-whats'].forEach((sel) => { const n = $(sel); if (n) n.remove(); });
    $$('.ots-meta10').forEach((n) => n.remove());
  }

  // ---------- 版本：2013 黑色导航栏版 / 2010 云朵版 ----------
  let ERA = '2013';
  document.documentElement.dataset.otsEra = ERA;
  const ERA_NODES = ['#ots-topbar', '#ots-profile-card', '#ots-mini-profile', '#ots-side-profile', '#ots-whats'];

  function setEra(e) {
    e = e === '2010' ? '2010' : '2013';
    if (e === ERA) return;
    ERA = e;
    document.documentElement.dataset.otsEra = e;
    ERA_NODES.forEach((sel) => { const n = $(sel); if (n) n.remove(); });
    $$('.ots-meta10').forEach((n) => n.remove());
    updateEraButtons();
    schedule();
  }

  function updateEraButtons() {
    $$('#ots-bg-picker [data-era]').forEach((b) => b.classList.toggle('active', b.dataset.era === ERA));
  }

  // 2010 年的时间写法：「大约 5 小时前」
  function relTime(iso) {
    const d = new Date(iso);
    if (isNaN(d)) return '';
    const sec = (Date.now() - d.getTime()) / 1000;
    const min = Math.round(sec / 60);
    const hr = Math.round(sec / 3600);
    const zh = LANG !== 'en';
    if (sec < 60) return zh ? '不到一分钟前' : 'less than a minute ago';
    if (min < 60) return zh ? `${min} 分钟前` : (min === 1 ? '1 minute ago' : `${min} minutes ago`);
    if (hr < 24) return zh ? `大约 ${hr} 小时前` : (hr === 1 ? 'about 1 hour ago' : `about ${hr} hours ago`);
    const sameYear = d.getFullYear() === new Date().getFullYear();
    const hh = d.getHours(), mm = String(d.getMinutes()).padStart(2, '0');
    if (zh) return `${sameYear ? '' : d.getFullYear() + '年'}${d.getMonth() + 1}月${d.getDate()}日 ${hh}:${mm}`;
    const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
    const day = d.getDate();
    const sfx = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th';
    const h12 = (hh % 12) || 12;
    return `${h12}:${mm} ${hh < 12 ? 'AM' : 'PM'} ${mon} ${day}${sfx}${sameYear ? '' : ', ' + d.getFullYear()}`;
  }

  // ---------- 顶部导航 ----------
  function buildTopbar() {
    const existing = $('#ots-topbar');
    if (existing && existing.dataset.era !== ERA) existing.remove();
    if ($('#ots-topbar') || !document.body) return;
    const bar = el('div');
    bar.id = 'ots-topbar';
    bar.dataset.era = ERA;
    if (ERA === '2010') {
      // 2010：左边大字标，右边一条白色圆角导航条
      bar.innerHTML = `
      <div class="ots-topbar-inner">
        <a class="ots-logo10" href="/home" data-native="home" aria-label="${T.home}">twitter</a>
        <ul class="ots-nav10">
          <li data-route="home"><a href="/home" data-native="home">${T.home}</a></li>
          <li data-route="me"><a href="/" data-native="profile">${T.profile}</a></li>
          <li data-route="messages"><a href="/i/chat" data-native="messages">${T.messages}</a></li>
          <li data-route="history"><a href="/i/history" data-native="history">${T.history}</a></li>
          <li data-route="explore"><a href="/explore" data-native="explore">${T.findPeople}</a></li>
          <li class="ots-nav10-search"><form class="ots-search" role="search"><input type="text" placeholder="${T.search}" aria-label="${T.search}" autocomplete="off"></form></li>
          <li><a href="/settings">${T.settings}</a></li>
        </ul>
      </div>`;
    } else bar.innerHTML = `
      <div class="ots-topbar-inner">
        <ul class="ots-nav">
          <li data-route="home"><a href="/home" data-native="home">${ICON.home}<span>${T.home}</span></a></li>
          <li data-route="notifications"><a href="/notifications" data-native="notifications">${ICON.at}<span>${T.connect}</span></a></li>
          <li data-route="explore"><a href="/explore" data-native="explore">${ICON.hash}<span>${T.discover}</span></a></li>
          <li data-route="me"><a href="/" data-native="profile">${ICON.me}<span>${T.me}</span></a></li>
        </ul>
        <a class="ots-bird" href="/home" data-native="home" title="${T.homeRefresh}" aria-label="${T.homeRefresh}">${ICON.bird}</a>
        <div class="ots-right">
          <form class="ots-search" role="search">
            <input type="text" placeholder="${T.search}" aria-label="${T.search}" autocomplete="off">
            <button type="submit" aria-label="${T.search}">${ICON.search}</button>
          </form>
          <a class="ots-labeled" data-route="messages" href="/i/chat" data-native="messages" title="${T.messages}">${ICON.mail}<span>${T.messages}</span></a>
          <a class="ots-labeled" data-route="history" href="/i/history" data-native="history" title="${T.history}">${ICON.history}<span>${T.history}</span></a>
          <a class="ots-icon-btn" href="/settings" title="${T.settings}">${ICON.gear}</a>
          <a class="ots-compose" href="/compose/post" data-native="compose" title="${T.tweet}">${ICON.quill}</a>
        </div>
      </div>`;

    bar.addEventListener('click', (e) => {
      const a = e.target.closest('[data-native]');
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const native = $(NATIVE[a.dataset.native]);
      if (native) {
        e.preventDefault();
        native.click();
      }
    });

    bar.querySelector('.ots-search').addEventListener('submit', (e) => {
      e.preventDefault();
      const q = bar.querySelector('.ots-search input').value.trim();
      if (q) location.assign('/search?q=' + encodeURIComponent(q) + '&src=typed_query');
    });

    document.body.appendChild(bar);
  }

  function updateTopbar() {
    const bar = $('#ots-topbar');
    if (!bar) return;
    const me = myProfilePath();
    if (me) bar.querySelector('[data-route="me"] a').setAttribute('href', me);

    const path = location.pathname;
    let route = '';
    if (path === '/home' || path === '/') route = 'home';
    else if (path.startsWith('/notifications')) route = 'notifications';
    else if (path.startsWith('/explore') || path.startsWith('/search') || path.startsWith('/i/trends')) route = 'explore';
    else if (me && (path === me || path.startsWith(me + '/'))) route = 'me';
    else if (path.startsWith('/i/chat') || path.startsWith('/messages')) route = 'messages';
    else if (path.startsWith('/i/history') || path.startsWith('/i/bookmarks')) route = 'history';
    $$('.ots-nav li, .ots-labeled, .ots-nav10 li', bar).forEach((n) => n.classList.toggle('active', n.dataset.route === route));

    // 右边的「私信 / 历史」快挤到中间的小鸟时，只留图标
    const fitKey = innerWidth + '|' + LANG;
    if ($('.ots-bird', bar) && bar.dataset.fit !== fitKey) {
      bar.dataset.fit = fitKey;
      bar.classList.remove('ots-compact');
      const bird = $('.ots-bird', bar).getBoundingClientRect();
      const right = $('.ots-right', bar).getBoundingClientRect();
      const nav = $('.ots-nav', bar).getBoundingClientRect();
      if (right.left < bird.right + 12 || nav.right > bird.left - 12) bar.classList.add('ots-compact');
    }
    document.documentElement.dataset.otsRoute = route || 'other';
  }

  // ---------- 吸顶的标题栏往下挪，让出 40px 给导航栏 ----------
  function fixSticky() {
    const pc = $('[data-testid="primaryColumn"]');
    if (!pc) return;
    const candidates = $$(':scope > div, :scope > div > div, :scope > div > div > div, :scope > div > div > div > div, :scope > div > div > div > div > div', pc).slice(0, 60);
    for (const c of candidates) {
      if (c.dataset.otsSticky) continue;
      const cs = getComputedStyle(c);
      const sticky = cs.position === 'sticky';
      c.dataset.otsSticky = sticky ? '1' : '0';
      if (sticky) c.classList.add('ots-sticky');
      // 推特把内容区限制在 600px，我们的推文流更宽，放开这个限制让内容铺满
      if (cs.maxWidth === '600px') c.classList.add('ots-fullwidth');
    }
    // 每一轮重新决定藏哪些：推特切页面时会复用这些元素，上一页藏的要放出来
    const route = document.documentElement.dataset.otsRoute;
    const toHide = new Set();
    for (const st of $$('.ots-sticky', pc)) {
      // 首页标题栏右边那个「+」（加置顶列表），2013 没有；别的页面的返回箭头、搜索图标都留着
      if (route === 'home') {
        for (const svg of $$('svg', st)) {
          if (svg.closest('nav')) continue;
          const wrap = svg.parentElement && svg.parentElement.parentElement;
          if (wrap && $('[data-testid="pillLabel"]', wrap)) continue;
          toHide.add(svg.closest('button, a, [role="button"]') || svg.parentElement);
        }
      }
      // 历史页、通知页：顶栏已经亮着「历史」「联系」，内容区顶上的标题行是重复的，去掉
      if (route === 'history' || route === 'notifications') {
        const h = $('h2, [role="heading"]', st);
        if (h) {
          const tabs = $('[role="tablist"]', st);
          if (!tabs) toHide.add(st);
          else {
            let row = h;
            while (row.parentElement && row.parentElement !== st && !row.parentElement.contains(tabs)) row = row.parentElement;
            if (!row.contains(tabs)) toHide.add(row);
          }
        }
      }
    }
    for (const n of $$('.ots-route-hide', pc)) if (!toHide.has(n)) n.classList.remove('ots-route-hide');
    toHide.forEach((n) => n.classList.add('ots-route-hide'));
  }

  // ---------- 右侧栏：藏掉会员推广、新闻、体育比分，藏掉原来的搜索框 ----------
  const SIDEBAR_HIDE = /(Premium|Live on X|X 上的直播|^NFL|^NBA|^MLB|^NHL|^MLS|^Premier League|Get Verified|获得认证|获取认证|Verified Organizations|认证组织|Grok)/i;
  const KEEP_HEADINGS = 'h2, [role="heading"], aside[aria-label], section[aria-label]';

  function tidySidebar() {
    const sb = $('[data-testid="sidebarColumn"]');
    if (!sb) return;

    // 自我纠错：页面刚加载时一个盒子里可能只有推广那一块，被整个藏了；
    // 后来盒子里长出了推荐关注、趋势这些正常内容，就放出来，下一轮只藏真正的推广
    for (const hdn of $$('.ots-hidden', sb)) {
      const normal = $$(KEEP_HEADINGS, hdn).some((n) => {
        const label = (n.getAttribute('aria-label') || n.textContent).trim();
        return label && !SIDEBAR_HIDE.test(label);
      });
      if (normal) hdn.classList.remove('ots-hidden');
    }

    // 往上找到「只包着这一块」的最外层，整块藏掉
    const moduleOf = (node) => {
      let box = node;
      while (
        box.parentElement && box.parentElement !== sb &&
        box.parentElement.querySelectorAll('h2, [role="heading"], aside, section').length <= 1 &&
        !box.parentElement.querySelector('form[role="search"], nav[aria-label="Footer"], #ots-mini-profile')
      ) box = box.parentElement;
      return box;
    };

    for (const h of $$('h2, [role="heading"], aside[aria-label], section[aria-label]', sb)) {
      if (h.closest('.ots-hidden') || h.closest('#ots-mini-profile')) continue;
      const label = (h.getAttribute('aria-label') || h.textContent).trim();
      if (SIDEBAR_HIDE.test(label)) hide(moduleOf(h));
    }
    for (const a of $$('a[href*="premium"], a[href*="/i/verified"], a[href*="/i/grok"]', sb)) {
      if (!a.closest('.ots-hidden')) hide(moduleOf(a));
    }

    // 左栏第一块要和右边推文流顶部对齐：把它上面各层留的内边距、外边距都去掉
    const firstBox = $$('#ots-mini-profile, section, aside', sb).find((n) => !n.closest('.ots-hidden') && n.getBoundingClientRect().height > 0);
    if (firstBox) {
      for (let n = firstBox; n && n !== sb; n = n.parentElement) {
        const cs = getComputedStyle(n);
        if (parseFloat(cs.paddingTop) > 0 && n !== firstBox) n.classList.add('ots-no-pt');
        if (parseFloat(cs.marginTop) > 0) n.classList.add('ots-no-mt');
        for (let sib = n.previousElementSibling; sib; sib = sib.previousElementSibling) {
          if (sib.getBoundingClientRect().height > 0 && !sib.textContent.trim() && !$('img, svg', sib)) sib.classList.add('ots-hidden');
        }
      }
    }

    // 模块列表里原来给搜索框留位置的空垫片
    for (const d of $$('div', sb)) {
      if (d.firstElementChild || d.closest('section, aside, nav, #ots-mini-profile, .ots-hidden')) continue;
      if (!d.textContent.trim() && d.getBoundingClientRect().height > 20 && !getComputedStyle(d).backgroundImage.startsWith('url')) hide(d);
    }

    // 推特原生的搜索框不藏了：整个挪到顶栏里（见 pinSearch），这里把包着它的几层收成 0 高度
    const form = $('form[role="search"]', sb);
    if (form) {
      for (let n = form.parentElement; n && n !== sb && !$('h2, [role="heading"], section, aside', n); n = n.parentElement) {
        n.classList.add('ots-search-wrap');
      }
    }
  }

  // ---------- 搜索：把推特原生的搜索框（带下拉建议）钉到顶栏搜索框的位置 ----------
  let dropInfo = [];
  let devOpenTray = false;
  function pinSearch() {
    const mine = $('#ots-topbar .ots-search input');
    const sb = $('[data-testid="sidebarColumn"]');
    const form = sb && $('form[role="search"]', sb);
    const on = !!(mine && form && !document.documentElement.classList.contains('ots-modal'));
    document.documentElement.classList.toggle('ots-search-native', on);
    $$('.ots-search-pinned').forEach((f) => { if (f !== form || !on) f.classList.remove('ots-search-pinned'); });
    if (!on) return;
    form.classList.add('ots-search-pinned');
    // 搜索框的外壳（圆角那一层）：从输入框往上找到带放大镜图标的那层
    const input = $('input', form);
    if (input && !$('.ots-sq-box', form)) {
      let box = input.parentElement;
      while (box && box !== form && !$('svg', box)) box = box.parentElement;
      if (box && box !== form) box.classList.add('ots-sq-box');
    }
    // 下拉建议：搜索框下面浮起来的那一层（推特打字时才生成），认出来单独给它白底、阴影、加宽
    const inputEl = $('input', form);
    for (const d of $$(':scope > div, :scope > div > div, :scope > div > div > div, :scope > div > div > div > div', form)) {
      if (d.dataset.otsDrop || (inputEl && d.contains(inputEl))) continue;
      const pos = getComputedStyle(d).position;
      if (pos !== 'absolute' && pos !== 'fixed') { d.dataset.otsDrop = 'no'; continue; }
      if (d.getBoundingClientRect().height < 20) continue;
      d.dataset.otsDrop = 'yes';
      d.classList.add('ots-sq-drop');
    }
    // 调试：下拉框出现时记下它的结构（关掉后记录还留着）
    if (OTS_DEBUG) {
      const big = $$('div', form).filter((d) => !(inputEl && d.contains(inputEl)) && d.getBoundingClientRect().height > 100);
      if (big.length) {
        const top = big[0];
        dropInfo = [];
        const walk = (n, d) => {
          if (d > 7 || dropInfo.length > 22) return;
          const cs = getComputedStyle(n); const r = n.getBoundingClientRect();
          dropInfo.push(`${' '.repeat(d)}${n.tagName.toLowerCase()}${n.getAttribute('role') ? '[' + n.getAttribute('role') + ']' : ''}${n.id ? '#' + n.id.slice(0, 18) : ''}${n.classList.contains('ots-sq-drop') ? ' DROP' : ''} ${Math.round(r.width)}x${Math.round(r.height)} pos=${cs.position} bg=${cs.backgroundColor} op=${cs.opacity} z=${cs.zIndex} ov=${cs.overflowY}`);
          [...n.children].slice(0, 3).forEach((c) => walk(c, d + 1));
        };
        let root = top;
        while (root.parentElement && root.parentElement !== form && !root.parentElement.contains(inputEl)) root = root.parentElement;
        dropInfo.push('path form>' + (() => { let p = [], x = root; while (x && x !== form) { p.unshift(x.tagName.toLowerCase() + (getComputedStyle(x).position !== 'static' ? '(' + getComputedStyle(x).position + ')' : '')); x = x.parentElement; } return p.join('>'); })());
        walk(root, 0);
      }
    }
    // 推特给页面主体套了好几层独立图层，搜索框在里面再怎么往上也翻不过顶栏；
    // 把这几层的图层设置去掉，搜索框才能盖在顶栏上面
    const side = $('[data-testid="sidebarColumn"]');
    for (let n = form.parentElement; n && n !== document.body; n = n.parentElement) {
      if (n.dataset.otsZ) continue;
      n.dataset.otsZ = '1';
      if (n === side && ERA === '2013') continue;
      const cs = getComputedStyle(n);
      if (cs.zIndex !== 'auto' && cs.position !== 'static') n.classList.add('ots-z-auto');
    }
    placeSearch();
  }

  function placeSearch() {
    const form = $('.ots-search-pinned');
    const mine = $('#ots-topbar .ots-search input');
    if (!form || !mine) return;
    const r = mine.getBoundingClientRect();
    const st = document.documentElement.style;
    const vals = { '--ots-sq-top': r.top, '--ots-sq-left': r.left, '--ots-sq-width': r.width, '--ots-sq-height': r.height };
    for (const [k, v] of Object.entries(vals)) {
      const px = Math.round(v) + 'px';
      if (st.getPropertyValue(k) !== px) st.setProperty(k, px);
    }
  }
  // 2010 版的顶栏会跟着页面滚走，搜索框要跟着一起动
  window.addEventListener('scroll', () => { if (ERA === '2010') requestAnimationFrame(placeSearch); }, { passive: true });

  // ---------- 滚动位置：点进帖子前记住时间线滚到哪，返回时推特没滚回去就替它滚回去 ----------
  const scrollMemo = new Map();
  const scrollLog = [];
  let lastHref = location.href;
  let backNav = 0;
  let userMoved = 0;
  let lastClick = 0;
  function slog(msg) {
    scrollLog.push(`${new Date().toTimeString().slice(3, 8)} ${msg}`);
    if (scrollLog.length > 16) scrollLog.shift();
  }
  const shortUrl = (u) => u.replace(/^https:\/\/(x|twitter)\.com/, '').slice(0, 34);
  document.addEventListener('click', (e) => {
    if (!(e.target.closest && e.target.closest('article, a, [role="link"]'))) return;
    lastClick = Date.now();
    scrollMemo.set(location.href, scrollY);
    slog(`click ${shortUrl(location.href)} y=${Math.round(scrollY)}`);
  }, true);
  // 平时一直记着当前页面滚到哪（刚点过链接的 1 秒内不记，免得推特切页面时滚到顶的那一下把位置盖掉）
  window.addEventListener('scroll', () => {
    if (Date.now() - lastClick > 1000 && location.href === lastHref) scrollMemo.set(location.href, scrollY);
  }, { passive: true });
  window.addEventListener('popstate', () => { backNav = Date.now(); slog(`popstate -> ${shortUrl(location.href)} y=${Math.round(scrollY)}`); });
  ['wheel', 'touchmove', 'keydown'].forEach((t) => window.addEventListener(t, () => { userMoved = Date.now(); }, { passive: true, capture: true }));

  function barOffset() {
    const bar = $('#ots-topbar');
    const fixedBar = bar && getComputedStyle(bar).position === 'fixed' ? bar.getBoundingClientRect().height : 0;
    const sticky = $('[data-testid="primaryColumn"] .ots-sticky');
    return fixedBar + (sticky ? sticky.getBoundingClientRect().height : 0);
  }

  function keepScroll() {
    if (location.href === lastHref) return;
    const from = lastHref;
    lastHref = location.href;
    const href = location.href;
    const navAt = Date.now();
    const isBack = navAt - backNav < 3000;
    backNav = 0;
    const saved = scrollMemo.get(href);
    slog(`nav ${shortUrl(from)} -> ${shortUrl(href)} back=${isBack} saved=${saved == null ? '-' : Math.round(saved)} y=${Math.round(scrollY)}`);
    if (isBack && saved > 300) {
      // 返回：每 250ms 看一次，最多 6 秒；位置对了（连续两次）就停，你自己滚了也停，最多替它滚 5 次
      let ok = 0, acts = 0, n = 0;
      const timer = setInterval(() => {
        n++;
        const h = document.documentElement.scrollHeight;
        if (location.href !== href || userMoved > navAt || n > 24 || acts >= 5) { clearInterval(timer); slog(`stop n=${n} acts=${acts} y=${Math.round(scrollY)}`); return; }
        if (Math.abs(scrollY - saved) < 150) { if (++ok >= 2) { clearInterval(timer); slog(`ok y=${Math.round(scrollY)} after ${n * 250}ms`); } return; }
        ok = 0;
        const target = Math.min(saved, h - innerHeight);
        if (target < 300) return;
        acts++;
        slog(`fix y=${Math.round(scrollY)} -> ${Math.round(target)} h=${h}`);
        window.scrollTo(0, target);
      }, 250);
    } else if (!isBack && /\/status\/\d+/.test(location.pathname)) {
      // 点进帖子：正文要是跑到了屏幕上面看不见的地方，把它滚回顶栏下面
      [350, 800, 1400, 2200].forEach((ms) => setTimeout(() => {
        if (location.href !== href || userMoved > navAt) return;
        const focal = $('[data-testid="primaryColumn"] article[tabindex="-1"]');
        if (!focal) return;
        const top = focal.getBoundingClientRect().top;
        const off = barOffset();
        if (top < off - 20) { slog(`focal top=${Math.round(top)} -> scroll`); window.scrollBy(0, top - off - 8); }
      }, ms));
    }
  }

  // ---------- 去掉 X 的品牌露出：Premium 推销卡片、标签页标题、标签页小图标 ----------
  const FAVICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAGEUlEQVR4nNRaXWwUVRQ+M9uf7Q/aQlVINLZAYotI5GeVBzQ+gG9GKZrgCzEpYlLEhIDxARIfhCchJNYiJRof/Qv4StCoMSSiW9qCPzTy14opFVrYZn867e7M8Zw7f3dndrbLttluT5k9c+69M/f77jn33jMzqLDApWKmBu/+rq2YmpreBLrSogCGoQSCoGh6CG/UVled+/Cp8LV8bZWgit3RxJYQGgcR4Xm7FSuyoZS2AfAzKuqh7kj9d1AogT3ReBca+La4Ibh3tG2F/lCyS1FPfx93Pbtoz4wEOs/HTpFqd2+Y3Xg+bZLTxzc2bJMLVNno/GWii1wowLMr0dLlYpO0M0bwkBTy1rnYFlXFs7YLbSlHGw31xZ5NDWJOuKuQIias08i9wP2VbzKf9YyVfgUBQW1Xb2wFTupXFcV01ULQEA6tPLmh4ZqYA7qW2SR4lmHcB9nppIlZhBDq2GKA7ELwuLT8bFpoW/hcEDAMPayqM27KZSWMmbVFgOOKfWCvvOWvDStknGE348x21kLQ6BIwGL2BczZArY1V0NZQKbQtg/emRf3le2kYjE3Puh/D4iII6IZiKCGe4laLInRbYyVsbamHVgKeS+zyV5pN+9sbSXEU2x9jdghomYxRq4SgWJceWN9IBNzRLkS2ttRR2CKcvp6AYvpNZXSXQDyNmXBFQGrq+M4vDPrghsVQrLQvrxf3ONR7N08rf/9ckiTMfC42MoOmdDKtixFBNDwac5a3L68rGvwPFy7DJ6d/hFgi5QyCfV8ORZNYZWD/ybQhMLM4q1CCCqtDCoQUm2OwXrW4CratWATFyODwKLzxwWfifODKTeh5b4dJItIEq6wwPHUtDn/enZKucvvXkbHqTo21DxA7csaEpkNDdcjTpd+FbQ33F++yxFOacx5LJJ3zVdIc+vpKHIL6n5jSQdc5QzVkAvSjImhUEdMQHgyHPNe7m/lrKx+AV1cWN/oskbZmeL/jZfjrxghs3/yMr/6bq3GQs1G5fwavZczlHuWNTJwbKHimSGdSCHWVqggp+3p7HDh88slYSswtGByfzCpvqq2A1iU14rzjpedyXsth89XfE75lP02g4xTiGQOz8DgE2AX04Gwyo5ppajhF4VRdoUC1qggiKuew9O/JxdUQJAx6cGwygFha1LU21ThEfATGp5zlnsGm6ZjMmFpOp82nfU8IIe0L3rxbSwNMSvbO1Y0B4DICPIOcSYSHluSuS0zrMJKYLux5IDuExCQw2XNBgMYgUJPpgsDnG32Wvtta3v6ztccDCgWWs1NbN/TZAQwYFB9BIdRUWynqeR7kk97/Uvn7l2yUcyGTFPqH2L6CZN3DNYEh5CXCYcJeaaqptAjM/Kzx6R93xUYV1L8F0ifOPmAGllfcK3auLnzXZcCFgJal5+I45OvfXyWn08BLU3D+umtNE6x/JDh2ZysnL9mjX3g+bVMzX2yRB/iZwECvRnhzzRICH4YLFJ+7zt4Uei6l59I4nLh4J7D/3OWeXEic5vQWQu9oCk4MjDklUbL7dzwBcwL+IoMfy9MiTwhZy6iTjZoH+vRvIwlfeceZf2C2woNyvP9OYL8zaouBFUJgvXPBgnR0NAlrPqeUeGDsvoGzRzvODAvwhfaXSxveXAhRXnAL0919t8XRufYhiCyrg8jS2pygOeyit5KOdgSL10p2KmEvo8U9ZXf33SF927Ejy+qFjt5KFXW/+1mF3HSaUzwn7Zyd/nUk7ukP515nvRdSUUPe9Wbh0lJrmgeaQ4DW1iE07E877tCVs62oOMTYxSqk6lXn5VkOnllfjjZjBpAeNpcf76cPBspmkMSTSvlk/urx++uda7fwmfONTNUzh0VsZb3KyLbLpV5glUg60tI9cISW1H1l/YVGUY8O7356f04CLI939X1BarvjLE+jeba/HN6z7nWpOvc7w8c+6jtC7y32gTXr3e3Dte3LS1VPy87Rm++s2+/FmpMAy6PHoi+gqh4g321WpNbClaW0acLS+4bD/+6N/JQLZyABW5Ye629WMbORmjbTx7SS/GcPUEK0SeGQoVScH927dihvU1jg8j8AAAD//43P5h4AAAAGSURBVAMAWJd9yE+pr28AAAAASUVORK5CYII=';

  function hideUpsells() {
    const pc = $('[data-testid="primaryColumn"]');
    if (!pc || /^\/(i\/premium|i\/verified|settings)/.test(location.pathname)) return;
    const snap = document.evaluate('.//span[(contains(., "Premium") or contains(., "Grok")) and not(.//span)]', pc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0; i < snap.snapshotLength; i++) {
      const leaf = snap.snapshotItem(i);
      if (leaf.closest('[data-testid="tweetText"], [data-testid="User-Name"], [data-testid="UserName"], [data-testid="UserDescription"], .ots-hidden, #ots-profile-card, #ots-whats, [role="tablist"]')) continue;
      let box = leaf;
      while (box.parentElement && box.parentElement !== pc) {
        const par = box.parentElement;
        if (par.matches('article, [data-testid="cellInnerDiv"]') || $('[data-testid="tweetText"], [role="group"], [data-testid="User-Name"], [role="tablist"]', par)) break;
        box = par;
      }
      if (box.parentElement && box.parentElement.matches('[data-testid="cellInnerDiv"]')) box = box.parentElement;
      hide(box);
    }
  }

  function brandTidy() {
    const t = document.title;
    const nt = t.replace(/ \/ X$/, ' / Twitter').replace(/^X 上的 /, 'Twitter 上的 ').replace(/ on X: /, ' on Twitter: ').replace(/^X$/, 'Twitter');
    if (nt !== t) document.title = nt;
    for (const l of $$('link[rel~="icon"]')) {
      if (l.getAttribute('href') === FAVICON) continue;
      if (!l.dataset.otsOrig) l.dataset.otsOrig = l.getAttribute('href');
      l.setAttribute('href', FAVICON);
    }
    hideUpsells();
  }

  function restoreBrand() {
    for (const l of $$('link[rel~="icon"][data-ots-orig]')) l.setAttribute('href', l.dataset.otsOrig);
    document.title = document.title.replace(/ \/ Twitter$/, ' / X').replace(/^Twitter 上的 /, 'X 上的 ').replace(/ on Twitter: /, ' on X: ');
  }

  // ---------- 时间线：藏广告、藏插在中间的「推荐关注」 ----------
  // 推特会重复利用同一个格子装不同的推文，所以按「这格现在装的是哪条推文」来判断，每轮重新决定藏不藏
  function isAd(cell) {
    const art = $('article[data-testid="tweet"]', cell);
    if (!art) return false;
    const link = $('a[href*="/status/"]', art);
    const key = link ? link.getAttribute('href') : art.textContent.slice(0, 80);
    if (cell.dataset.otsAdKey === key) return cell.dataset.otsAd === '1';
    let ad = !!$('[data-testid="placementTracking"]', cell);
    if (!ad) {
      ad = $$('span', art).some((s) =>
        /^(Ad|Promoted|广告|推广)$/.test(s.textContent) &&
        !s.closest('[data-testid="tweetText"]') && s.children.length === 0);
    }
    cell.dataset.otsAdKey = key;
    cell.dataset.otsAd = ad ? '1' : '0';
    return ad;
  }

  function tidyTimeline() {
    const path = location.pathname;
    const pc = $('[data-testid="primaryColumn"]');
    if (!pc) return;
    const skip = path.startsWith('/i/connect_people') || path.startsWith('/explore');

    // 首页原来的发推框整块藏掉：2013 版的发推入口在左栏资料卡和顶部蓝色按钮里
    const onHome = path === '/home' || path.startsWith('/compose');
    const composer = onHome && $('[data-testid="tweetTextarea_0_label"]', pc);
    const timeline = $('[data-testid="cellInnerDiv"]', pc);
    if (composer && timeline) {
      let box = composer;
      while (box.parentElement && box.parentElement !== pc && !box.parentElement.contains(timeline)) box = box.parentElement;
      if (!box.contains(timeline)) hide(box);
    }

    let inWtf = false;
    for (const c of $$('[data-testid="cellInnerDiv"]', pc)) {
      // 「Show 70 posts」这种新推文提示条，换成 2013 的「有新推文」灰条
      const t = c.textContent;
      c.classList.toggle('ots-newbar', t.length < 40 && /^(Show \d[\d,.]*\s?[KM]? posts?|显示\s*\d[\d,.]*\s*万?\s*个?帖子)$/i.test(t.trim()));

      let shouldHide = false;
      if (!skip) {
        const h = $('h2, [role="heading"]', c);
        const title = h ? h.textContent.trim() : '';
        const hasTweet = !!$('article[data-testid="tweet"]', c);
        if (/^(Who to follow|You might like|Discover more|推荐关注|你可能会喜欢|发现更多)$/i.test(title)) {
          inWtf = true;
          shouldHide = true;
        } else if (inWtf && !hasTweet) {
          shouldHide = true;
        } else {
          inWtf = false;
          shouldHide = isAd(c);
        }
      }
      c.classList.toggle('ots-hidden', shouldHide);
    }
  }

  // ---------- 推文头部：时间挪到这一行最右边，跟 2013 一样 ----------
  function tidyTweetHeaders() {
    for (const un of $$('[data-testid="primaryColumn"] article [data-testid="User-Name"]')) {
      const time = $('a[href*="/status/"] time', un);
      if (!time) continue;
      const link = time.closest('a');
      const key = link.getAttribute('href');
      if (un.dataset.otsHead === key) continue;
      un.dataset.otsHead = key;
      const article = un.closest('article');
      if (un.closest('div[role="link"]') && article.contains(un.closest('div[role="link"]'))) continue; // 引用的推文保持原样
      const timeWrap = link.parentElement;
      timeWrap.classList.add('ots-time');
      const sep = timeWrap.previousElementSibling;
      if (sep && /^[\s·]*$/.test(sep.textContent)) sep.classList.add('ots-sep');
      // 从时间往上到头部这一行，每层都撑满，时间才能靠到最右边
      const caret = $('[data-testid="caret"]', article);
      let p = timeWrap.parentElement;
      for (let i = 0; p && i < 8 && p !== article && !(caret && p.contains(caret)) && !p.contains($('[data-testid="tweetText"]', article)); i++) {
        const dir = getComputedStyle(p.parentElement).flexDirection;
        p.classList.add(dir.startsWith('row') ? 'ots-grow-row' : 'ots-grow-col');
        p = p.parentElement;
      }
      fitTweetLayout(article, un);
    }
  }

  // 2013 的比例：头像 48px；名字那一行和正文紧挨着（名字行顶部到正文顶部 = 一行的行高 20px）
  function fitTweetLayout(article, un) {
    const av = $('[data-testid="Tweet-User-Avatar"]', article);
    if (!av) return;
    // 头像这一栏 = 头像往上、和名字所在那一栏并排的那一层
    let avCol = av;
    while (avCol.parentElement && avCol.parentElement !== article && !avCol.parentElement.contains(un)) avCol = avCol.parentElement;
    if (avCol.parentElement && avCol.parentElement.contains(un)) avCol.classList.add('ots-av-col');

    // 正文这一栏里，名字所在的那一行、正文所在的那一行
    const tt = $('[data-testid="tweetText"]', article);
    if (!tt) return;
    let col = un;
    while (col.parentElement && !col.parentElement.contains(av)) col = col.parentElement;
    const rowOf = (n) => { let r = n; while (r.parentElement && r.parentElement !== col) r = r.parentElement; return r.parentElement === col ? r : null; };
    const headRow = rowOf(un);
    const textRow = rowOf(tt);
    if (!headRow || !textRow || headRow === textRow) return;
    headRow.classList.add('ots-head-row');
    textRow.classList.add('ots-text-row');
    // 只在名字行和正文之间没有别的东西（比如「回复 @某人」「显示翻译」）时才收紧
    if (headRow.nextElementSibling !== textRow) return;
    textRow.style.marginTop = '';
    const extra = Math.round(tt.getBoundingClientRect().top - un.getBoundingClientRect().top - 20);
    if (extra > 0 && extra <= 12) textRow.style.marginTop = `-${extra}px`;
  }

  // ---------- 右下角浮着的 Grok / 聊天圆按钮 ----------
  function hideFloating() {
    const w = window.innerWidth, h = window.innerHeight;
    for (const b of $$('#layers button, #layers a[role="button"]')) {
      if (b.closest('#ots-topbar') || b.closest('[role="dialog"]')) continue;
      const r = b.getBoundingClientRect();
      if (r.width === 0 || r.width > 90 || r.height > 90) continue;
      if (r.right < w - 140 || r.bottom < h - 260) continue;
      const label = (b.getAttribute('aria-label') || '') + ' ' + (b.getAttribute('data-testid') || '');
      if (/grok|chat|message|drawer/i.test(label)) hide(b);
    }
  }

  // ---------- 个人页：2013 带横幅资料卡 ----------
  function countFrom(a) {
    if (!a) return '';
    const m = a.innerText.replace(/\n/g, ' ').match(/[\d.,]+\s?[KMB万亿]?/);
    return m ? m[0].trim() : '';
  }

  function big(url, kind) {
    if (!url) return '';
    if (kind === 'banner') return url.replace(/\/\d+x\d+(\?.*)?$/, RETRO ? '/1080x360' : '/1500x500');
    return url.replace(/_(normal|bigger|mini|x96|200x200|400x400)\./, RETRO ? '_bigger.' : '_400x400.');
  }

  // ---------- 网吧模式：锯齿字、像素图、一层很淡的显示器扫描线 ----------
  let RETRO = false;
  function setRetro(on) {
    on = !!on;
    if (on === RETRO) return;
    RETRO = on;
    document.documentElement.classList.toggle('ots-retro', on);
    if (!on) restoreRetroImages();
    ['#ots-profile-card', '#ots-mini-profile', '#ots-side-profile'].forEach((sel) => { const n = $(sel); if (n) n.remove(); });
    const box = $('#ots-bg-picker .ots-retro-row input');
    if (box) box.checked = on;
    schedule();
  }

  // 把头像、配图、横幅换成推特自带的小尺寸版本，放大后显出像素颗粒
  function lowRes(url) {
    return url
      .replace(/(\/profile_images\/[^?]+)_(normal|x96|200x200|400x400)\./, '$1_bigger.')
      .replace(/(\/profile_banners\/[^?]+)\/\d+x\d+/, '$1/1080x360')
      .replace(/([?&]name=)(medium|large|orig|900x900|4096x4096)\b/, '$1small');
  }
  function retroImages() {
    if (!RETRO) return;
    for (const img of $$('main img[src*="twimg.com"]')) {
      const src = img.getAttribute('src');
      const low = lowRes(src);
      if (low !== src) { if (!img.dataset.otsHi) img.dataset.otsHi = src; img.setAttribute('src', low); }
    }
    for (const d of $$('main [style*="background-image"][style*="twimg.com"]')) {
      const st = d.getAttribute('style');
      const low = lowRes(st);
      if (low !== st) { if (!d.dataset.otsHiStyle) d.dataset.otsHiStyle = st; d.setAttribute('style', low); }
    }
  }
  function restoreRetroImages() {
    for (const img of $$('img[data-ots-hi]')) { img.setAttribute('src', img.dataset.otsHi); delete img.dataset.otsHi; }
    for (const d of $$('[data-ots-hi-style]')) { d.setAttribute('style', d.dataset.otsHiStyle); delete d.dataset.otsHiStyle; }
  }

  function renderProfileCard() {
    const pc = $('[data-testid="primaryColumn"]');
    const old = $('#ots-profile-card');
    const nameEl = pc && $('[data-testid="UserName"]', pc);
    const tabs = pc && $('nav[role="navigation"]', pc);

    $$('.ots-orig-profile, .ots-hide-appbar').forEach((n) => {
      if (!nameEl) n.classList.remove('ots-orig-profile', 'ots-hide-appbar');
    });
    pageBanner = '';
    profileInfo = null;
    if (!nameEl || !tabs) { if (old) old.remove(); return; }

    let block = nameEl;
    while (block.parentElement && !block.parentElement.contains(tabs)) block = block.parentElement;
    if (!block.parentElement || block.contains(tabs)) return;

    const { name, handle } = nameAndHandle(nameEl);
    const verified = !!$('svg[data-testid="icon-verified"]', nameEl);
    const bannerImg = $('img[src*="profile_banners"]', block);
    const avatarImg = $('[data-testid^="UserAvatar-Container"] img', block) || $('img[src*="profile_images"]', block);
    const bio = $('[data-testid="UserDescription"]', block);
    const items = $('[data-testid="UserProfileHeader_Items"]', block);
    const followingA = $('a[href$="/following"]', block);
    const followersA = $('a[href$="/verified_followers"], a[href$="/followers"]', block);
    const editBtn = $('[data-testid="editProfileButton"]', block);
    const followBtn = $('[data-testid$="-follow"], [data-testid$="-unfollow"]', block);

    // 帖子数在顶上那条「名字 / N posts」吸顶栏里
    let posts = '';
    const back = $('[data-testid="app-bar-back"]', pc);
    let appbar = null;
    if (back) {
      appbar = back;
      for (let i = 0; i < 8 && appbar.parentElement && appbar.parentElement !== pc; i++) {
        appbar = appbar.parentElement;
        if (getComputedStyle(appbar).position === 'sticky') break;
      }
      const s = $$('span, div[dir]', appbar).find((n) => /^[\d.,]+\s?[KMB万亿]?\s*(posts?|Tweets?|个?帖子|条?推文)$/i.test(n.textContent.trim()));
      if (s) posts = s.textContent.trim().match(/^[\d.,]+\s?[KMB万亿]?/)[0].replace(/\s/g, '');
    }

    pageBanner = bannerImg ? big(bannerImg.src, 'banner') : '';
    rememberBanner(handle, pageBanner);
    const state = followBtn ? (/-unfollow$/.test(followBtn.dataset.testid) ? 'following' : 'follow') : (editBtn ? 'edit' : '');
    const sig = [ERA, LANG, name, handle, verified, bannerImg && bannerImg.src, avatarImg && avatarImg.src,
      bio && bio.innerText, items && items.innerText, posts, countFrom(followingA), countFrom(followersA), state].join('|');

    // 自己的个人页：记下三个数字，首页左上角的迷你资料卡要用
    if (state === 'edit') {
      const banner = bannerImg ? big(bannerImg.src, 'banner') : '';
      if (banner !== myBanner) {
        myBanner = banner;
        try { chrome.storage.local.set({ otsMyBanner: banner }); } catch (e) { /* 忽略 */ }
        refreshBg();
      }
      const mine = { posts, following: countFrom(followingA), followers: countFrom(followersA) };
      if (JSON.stringify(mine) !== JSON.stringify(myStats)) {
        myStats = mine;
        try { chrome.storage.local.set({ otsMyStats: mine }); } catch (e) { /* 插件刚重新加载时会拿不到 */ }
      }
    }

    block.classList.add('ots-orig-profile');
    if (appbar && getComputedStyle(appbar).position === 'sticky') appbar.classList.add('ots-hide-appbar');

    profileInfo = { name, handle, verified, avatar: avatarImg && big(avatarImg.src, 'avatar'), bio, items, posts,
      following: countFrom(followingA), followers: countFrom(followersA), followingA, followersA, state, editBtn, followBtn, sig };

    if (old && old.dataset.sig === sig && old.nextElementSibling === block) return;
    if (old) old.remove();

    if (ERA === '2010') {
      block.parentElement.insertBefore(buildProfileCard2010(profileInfo), block);
      return;
    }

    const card = el('div');
    card.id = 'ots-profile-card';
    card.dataset.sig = sig;

    const header = el('div', 'ots-pc-header');
    if (bannerImg) header.style.backgroundImage = `url("${big(bannerImg.src, 'banner')}")`;
    else header.classList.add('ots-pc-noBanner');

    const inner = el('div', 'ots-pc-inner');
    if (avatarImg) {
      const av = el('img', 'ots-pc-avatar');
      av.src = big(avatarImg.src, 'avatar');
      av.alt = '';
      inner.appendChild(av);
    }
    const nm = el('h1', 'ots-pc-name');
    nm.textContent = name;
    if (verified) nm.insertAdjacentHTML('beforeend', `<span class="ots-pc-verified" title="${T.verified}">${ICON.check}</span>`);
    inner.appendChild(nm);
    const hd = el('div', 'ots-pc-handle');
    hd.textContent = handle;
    inner.appendChild(hd);
    if (bio && bio.innerText.trim()) {
      const b = el('div', 'ots-pc-bio');
      b.appendChild(bio.cloneNode(true));
      inner.appendChild(b);
    }
    if (items && items.innerText.trim()) {
      const it = el('div', 'ots-pc-items');
      const parts = $$(':scope > *', items).filter((n) => n.textContent.trim());
      if (!parts.length) it.textContent = items.textContent.trim();
      parts.forEach((n, i) => {
        if (i) it.appendChild(document.createTextNode('  ·  '));
        const isUrl = n.dataset.testid === 'UserUrl' || !!$('[data-testid="UserUrl"]', n);
        const link = isUrl ? (n.matches('a[href]') ? n : $('a[href]', n)) : null;
        const piece = el(link ? 'a' : 'span');
        piece.textContent = n.textContent.trim();
        if (link) { piece.href = link.href; piece.target = '_blank'; piece.rel = 'noopener'; }
        it.appendChild(piece);
      });
      inner.appendChild(it);
    }
    header.appendChild(inner);
    card.appendChild(header);

    const stats = el('div', 'ots-pc-stats');
    const ul = el('ul');
    const addStat = (num, label, target) => {
      const li = el('li');
      const a = el('a');
      a.href = target ? target.getAttribute('href') : '#';
      a.innerHTML = `<strong></strong><span>${label}</span>`;
      a.querySelector('strong').textContent = num || '–';
      if (target) a.addEventListener('click', (e) => { e.preventDefault(); target.click(); });
      else a.addEventListener('click', (e) => e.preventDefault());
      li.appendChild(a);
      ul.appendChild(li);
    };
    addStat(posts, T.tweets, null);
    addStat(countFrom(followingA), T.following, followingA);
    addStat(countFrom(followersA), T.followers, followersA);
    stats.appendChild(ul);

    if (state) {
      const btn = el('button', 'ots-btn');
      btn.type = 'button';
      if (state === 'edit') btn.textContent = T.editProfile;
      else if (state === 'following') { btn.classList.add('ots-btn-primary'); btn.innerHTML = `${ICON.followBird}<span>${T.following}</span>`; }
      else btn.innerHTML = `${ICON.followBird}<span>${T.follow}</span>`;
      btn.addEventListener('click', () => (state === 'edit' ? editBtn : followBtn).click());
      stats.appendChild(btn);
    }
    card.appendChild(stats);

    block.parentElement.insertBefore(card, block);
  }

  // ---------- 2010 云朵版的部件 ----------
  let profileInfo = null;

  function followButton(info) {
    if (!info.state) return null;
    const btn = el('button', 'ots-btn');
    btn.type = 'button';
    if (info.state === 'edit') btn.textContent = T.editProfile;
    else if (info.state === 'following') { btn.classList.add('ots-btn-primary'); btn.innerHTML = `${ICON.followBird}<span>${T.following}</span>`; }
    else btn.innerHTML = `${ICON.followBird}<span>${T.follow}</span>`;
    btn.addEventListener('click', () => (info.state === 'edit' ? info.editBtn : info.followBtn).click());
    return btn;
  }

  function statsList(items) {
    const ul = el('ul', 'ots-stats10');
    items.forEach(([num, label, target, href]) => {
      const li = el('li');
      const a = el('a');
      a.href = href || (target ? target.getAttribute('href') : '#');
      a.innerHTML = '<strong></strong><span></span>';
      a.querySelector('strong').textContent = num || '–';
      a.querySelector('span').textContent = label;
      if (target) a.addEventListener('click', (e) => { e.preventDefault(); target.click(); });
      li.appendChild(a);
      ul.appendChild(li);
    });
    return ul;
  }

  // 个人页主栏顶部：73px 大头像 + 大号用户名
  function buildProfileCard2010(info) {
    const card = el('div', 'ots-pc10');
    card.id = 'ots-profile-card';
    card.dataset.sig = info.sig;
    const head = el('div', 'ots-pc10-head');
    if (info.avatar) {
      const av = el('img', 'ots-pc10-avatar');
      av.src = info.avatar;
      av.alt = '';
      head.appendChild(av);
    }
    const names = el('div', 'ots-pc10-names');
    const h = el('h1');
    h.textContent = (info.handle || info.name).replace(/^@/, '');
    if (info.verified) h.insertAdjacentHTML('beforeend', `<span class="ots-pc-verified" title="${T.verified}">${ICON.check}</span>`);
    names.appendChild(h);
    head.appendChild(names);
    const btn = followButton(info);
    if (btn) head.appendChild(btn);
    card.appendChild(head);
    return card;
  }

  // 个人页侧栏顶部：姓名 / 位置 / 网站 / 简介 + 三个数字
  function renderSideProfile2010() {
    const sb = $('[data-testid="sidebarColumn"]');
    const old = $('#ots-side-profile');
    if (ERA !== '2010' || !profileInfo || !sb) { if (old) old.remove(); return; }
    const info = profileInfo;
    if (old && old.dataset.sig === info.sig && old.parentElement === sb && sb.firstElementChild === old) return;
    if (old) old.remove();

    const box = el('div');
    box.id = 'ots-side-profile';
    box.dataset.sig = info.sig;
    const row = (label, content) => {
      const r = el('div', 'ots-sp-row');
      const b = el('b');
      b.textContent = label;
      r.appendChild(b);
      if (typeof content === 'string') r.appendChild(document.createTextNode(content));
      else r.appendChild(content);
      box.appendChild(r);
    };
    row(T.lblName, info.name);
    const loc = info.items && $('[data-testid="UserLocation"]', info.items);
    if (loc && loc.textContent.trim()) row(T.lblLocation, loc.textContent.trim());
    const url = info.items && $('[data-testid="UserUrl"]', info.items);
    const urlA = url && (url.matches('a[href]') ? url : $('a[href]', url));
    if (urlA) {
      const a = el('a');
      a.href = urlA.href;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = urlA.textContent.trim();
      row(T.lblWeb, a);
    }
    if (info.bio && info.bio.textContent.trim()) row(T.lblBio, info.bio.textContent.trim());
    box.appendChild(statsList([
      [info.following, T.following, info.followingA],
      [info.followers, T.followers, info.followersA],
      [info.posts, T.tweets, null],
    ]));
    sb.insertBefore(box, sb.firstChild);
  }

  // 首页主栏顶部：「What's happening?」发推框，点一下打开发推弹窗
  function renderWhatsHappening() {
    const pc = $('[data-testid="primaryColumn"]');
    const old = $('#ots-whats');
    const want = ERA === '2010' && location.pathname === '/home' && pc;
    if (!want) { if (old) old.remove(); return; }
    if (old && old.parentElement === pc && pc.firstElementChild === old) return;
    if (old) old.remove();
    const box = el('div');
    box.id = 'ots-whats';
    box.innerHTML = `
      <div class="ots-wh-top"><label></label><span class="ots-wh-count">140</span></div>
      <button type="button" class="ots-wh-box" aria-label=""></button>
      <div class="ots-wh-foot"><button type="button" class="ots-btn ots-wh-tweet"></button></div>`;
    $('label', box).textContent = T.whatsHappening;
    $('.ots-wh-box', box).setAttribute('aria-label', T.whatsHappening);
    $('.ots-wh-tweet', box).textContent = T.tweetBtn;
    const open = () => clickNative('compose', '/compose/post');
    $('.ots-wh-box', box).addEventListener('click', open);
    $('.ots-wh-tweet', box).addEventListener('click', open);
    pc.insertBefore(box, pc.firstChild);
  }

  // 推文下面一行小灰字：「大约 5 小时前」，替代 2013 那种放在名字右边的时间
  function tidyMeta10() {
    if (ERA !== '2010') { $$('.ots-meta10').forEach((n) => n.remove()); return; }
    for (const art of $$('[data-testid="primaryColumn"] article[data-testid="tweet"]')) {
      const un = $('[data-testid="User-Name"]', art);
      const time = un && $('time', un);
      if (!time) continue;
      const anchor = $('.ots-text-row', art) || $('.ots-head-row', art);
      if (!anchor || anchor.closest('div[role="link"]')) continue;
      let meta = anchor.nextElementSibling;
      if (!meta || !meta.classList.contains('ots-meta10')) {
        meta = el('div', 'ots-meta10');
        const a = el('a');
        a.href = time.closest('a') ? time.closest('a').getAttribute('href') : '#';
        a.addEventListener('click', (e) => {
          const link = $('[data-testid="User-Name"] time', art);
          if (link && link.closest('a')) { e.preventDefault(); link.closest('a').click(); }
        });
        meta.appendChild(a);
        anchor.after(meta);
      }
      const txt = relTime(time.getAttribute('datetime'));
      const a = meta.firstElementChild;
      if (a.textContent !== txt) a.textContent = txt;
    }
  }

  // ---------- 首页左上角迷你资料卡 ----------
  let myStats = null;
  try {
    chrome.storage.local.get('otsMyStats', (r) => { if (r && r.otsMyStats) { myStats = r.otsMyStats; schedule(); } });
  } catch (e) { /* 忽略 */ }

  // 2010：侧栏顶部是自己的头像、三个数字，下面一列菜单（主页 / @我 / 私信 / 收藏），除了个人页每页都有
  function renderMe2010() {
    const sb = $('[data-testid="sidebarColumn"]');
    const old = $('#ots-mini-profile');
    if (!sb || profileInfo) { if (old) old.remove(); return; }
    const sw = $(NATIVE.account);
    if (!sw) return;
    const img = $('img', sw);
    const { name, handle } = nameAndHandle(sw);
    const me = myProfilePath() || '';
    const sig = ['2010', LANG, name, handle, img && img.src, JSON.stringify(myStats)].join('|');
    if (!(old && old.dataset.sig === sig && old.parentElement === sb && sb.firstElementChild === old)) {
      if (old) old.remove();
      const card = el('div', 'ots-me10');
      card.id = 'ots-mini-profile';
      card.dataset.sig = sig;
      const user = el('a', 'ots-me10-user');
      user.href = me || '#';
      if (img) {
        const av = el('img');
        av.src = big(img.src, 'avatar');
        av.alt = '';
        user.appendChild(av);
      }
      const names = el('span', 'ots-me10-names');
      const b = el('b');
      b.textContent = name;
      const c = el('span');
      c.textContent = `${(myStats && myStats.posts) || '–'} ${T.tweetsCount}`;
      names.append(b, c);
      user.appendChild(names);
      user.addEventListener('click', (e) => { e.preventDefault(); clickNative('profile', me); });
      card.appendChild(user);
      card.appendChild(statsList([
        [myStats && myStats.following, T.following, null, me + '/following'],
        [myStats && myStats.followers, T.followers, null, me + '/verified_followers'],
        [myStats && myStats.posts, T.tweets, null, me],
      ]));
      const menu = el('ul', 'ots-menu10');
      [['home', T.home, '/home', 'home'], ['notifications', handle || '@', '/notifications', 'notifications'],
        ['messages', T.directMessages, '/i/chat', 'messages'], ['history', T.favorites, '/i/history', 'history']]
        .forEach(([route, label, href, nat]) => {
          const li = el('li');
          li.dataset.route = route;
          const a = el('a');
          a.href = href;
          a.textContent = label;
          a.addEventListener('click', (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey) return;
            const n = $(NATIVE[nat]);
            if (n) { e.preventDefault(); n.click(); }
          });
          li.appendChild(a);
          menu.appendChild(li);
        });
      card.appendChild(menu);
      sb.insertBefore(card, sb.firstChild);
    }
    const route = document.documentElement.dataset.otsRoute;
    $$('#ots-mini-profile .ots-menu10 li').forEach((li) => li.classList.toggle('active', li.dataset.route === route));
  }

  function renderMiniProfile() {
    if (ERA === '2010') { renderMe2010(); return; }
    const sb = $('[data-testid="sidebarColumn"]');
    const old = $('#ots-mini-profile');
    if (location.pathname !== '/home' || !sb) { if (old) old.remove(); return; }
    const sw = $(NATIVE.account);
    if (!sw) return;
    const img = $('img', sw);
    const { name, handle } = nameAndHandle(sw);
    const sig = [LANG, name, handle, img && img.src, JSON.stringify(myStats)].join('|');
    if (old && old.dataset.sig === sig && old.parentElement === sb) return;
    if (old) old.remove();

    const card = el('div');
    card.id = 'ots-mini-profile';
    card.dataset.sig = sig;
    const a = el('a', 'ots-mp-link');
    a.href = myProfilePath() || '#';
    if (img) {
      const av = el('img', 'ots-mp-avatar');
      av.src = big(img.src, 'avatar');
      av.alt = '';
      a.appendChild(av);
    }
    const txt = el('div', 'ots-mp-text');
    const n = el('b');
    n.textContent = name;
    const v = el('span');
    v.textContent = T.viewProfile;
    txt.append(n, v);
    a.appendChild(txt);
    a.addEventListener('click', (e) => { e.preventDefault(); clickNative('profile', myProfilePath()); });
    card.appendChild(a);

    // 三个数字：上次打开自己个人页时记下的
    const stats = el('ul', 'ots-mp-stats');
    const me = myProfilePath() || '';
    [['posts', T.tweets, me], ['following', T.following, me + '/following'], ['followers', T.followers, me + '/verified_followers']]
      .forEach(([key, label, href]) => {
        const li = el('li');
        const link = el('a');
        link.href = href;
        link.innerHTML = '<strong></strong><span></span>';
        link.querySelector('strong').textContent = (myStats && myStats[key]) || '–';
        link.querySelector('span').textContent = label;
        li.appendChild(link);
        stats.appendChild(li);
      });
    card.appendChild(stats);

    // 2013 首页的发推入口：点一下打开发推弹窗
    const compose = el('button', 'ots-mp-compose');
    compose.type = 'button';
    compose.textContent = T.compose;
    compose.addEventListener('click', () => clickNative('compose', '/compose/post'));
    card.appendChild(compose);

    sb.insertBefore(card, sb.firstChild);
  }

  // ---------- 调试面板（临时，开发用完删掉） ----------
  const OTS_DEBUG = false;
  function devDebug() {
    if (!OTS_DEBUG) return;
    let box = $('#ots-debug');
    if (!box) {
      box = el('pre');
      box.id = 'ots-debug';
      box.style.cssText = 'position:fixed;left:4px;top:44px;width:292px;max-height:calc(100vh - 50px);overflow:hidden;z-index:2000;margin:0;padding:4px;background:rgba(255,255,230,.95);color:#000;font:9px/11px Menlo,monospace;white-space:pre-wrap;word-break:break-all;border:1px solid #999;pointer-events:none';
      document.body.appendChild(box);
    }
    const lines = [];
    lines.push('== SCROLL LOG  now y=' + Math.round(scrollY) + ' h=' + document.documentElement.scrollHeight);
    scrollLog.forEach((l) => lines.push(l));
    lines.push('== DROPDOWN (last seen)');
    dropInfo.forEach((l) => lines.push(l));
    lines.push('== SEARCH native=' + document.documentElement.classList.contains('ots-search-native') + ' vars=' + ['--ots-sq-top', '--ots-sq-left', '--ots-sq-width'].map((v) => document.documentElement.style.getPropertyValue(v)).join(','));
    const sf = $('[data-testid="sidebarColumn"] form[role="search"]') || $('form[role="search"]');
    if (sf) {
      const r = sf.getBoundingClientRect(); const cs = getComputedStyle(sf);
      lines.push(`form pinned=${sf.classList.contains('ots-search-pinned')} pos=${cs.position} vis=${cs.visibility} disp=${cs.display} op=${cs.opacity} at ${Math.round(r.left)},${Math.round(r.top)} ${Math.round(r.width)}x${Math.round(r.height)} inSide=${!!sf.closest('[data-testid="sidebarColumn"]')}`);
      for (let n = sf.parentElement, i = 0; n && n !== document.body && i < 14; n = n.parentElement, i++) {
        const c = getComputedStyle(n);
        const bad = [c.transform !== 'none' ? 'TF' : '', c.filter !== 'none' ? 'FILT' : '', c.backdropFilter && c.backdropFilter !== 'none' ? 'BDF' : '', c.contain !== 'none' ? 'CONTAIN=' + c.contain : '', c.willChange !== 'auto' ? 'WC=' + c.willChange : '', c.display === 'none' ? 'NONE' : '', c.visibility !== 'visible' ? 'VIS' : '', c.overflow !== 'visible' ? 'OV=' + c.overflow : '', c.zIndex !== 'auto' ? 'z=' + c.zIndex : '', c.position !== 'static' ? c.position : ''].filter(Boolean).join(' ');
        const rr = n.getBoundingClientRect();
        lines.push(`  ${i} ${n.tagName.toLowerCase()}${n.dataset.testid ? '#' + n.dataset.testid : ''}${n.classList.contains('ots-search-wrap') ? ' WRAP' : ''}${n.classList.contains('ots-hidden') ? ' HID' : ''} ${Math.round(rr.width)}x${Math.round(rr.height)} ${bad}`);
      }
      const lab = $('label', sf); if (lab) { const lr = lab.getBoundingClientRect(); lines.push(`label ${Math.round(lr.left)},${Math.round(lr.top)} ${Math.round(lr.width)}x${Math.round(lr.height)} bg=${getComputedStyle(lab).backgroundColor}`); }
    } else lines.push('no search form');
    const ta = $$('[data-testid="primaryColumn"] article[data-testid="tweet"]').find((a) => $('[data-testid="tweetText"]', a) && $('[data-testid="User-Name"] time', a) && a.getBoundingClientRect().top > 0);
    if (ta) {
      const bx = (n) => { const r = n.getBoundingClientRect(); const cs = getComputedStyle(n);
        return `${Math.round(r.left)},${Math.round(r.top)} ${Math.round(r.width)}x${Math.round(r.height)} m=${cs.margin} p=${cs.padding} fb=${cs.flexBasis} fdir=${cs.flexDirection} cls=${String(n.className).replace(/css-\w+ /, '').slice(0, 40)}`; };
      lines.push('== TWEET LAYOUT');
      const av = $('[data-testid="Tweet-User-Avatar"]', ta);
      lines.push('avatar chain:');
      for (let n = av, i = 0; n && n !== ta && i < 7; n = n.parentElement, i++) lines.push(` a${i} ${bx(n)}`);
      const avInner = av && $$('div', av).filter((d) => { const r = d.getBoundingClientRect(); return r.width >= 38 && r.width <= 42; }).slice(0, 4);
      (avInner || []).forEach((d, i) => lines.push(` ai${i} ${bx(d)} st=${(d.getAttribute('style') || '').slice(0, 40)}`));
      const un = $('[data-testid="User-Name"]', ta); const tt = $('[data-testid="tweetText"]', ta);
      let col = un; while (col && col.parentElement && !col.parentElement.contains(av)) col = col.parentElement;
      lines.push('content col: ' + bx(col));
      [...col.children].slice(0, 5).forEach((c, i) => lines.push(` c${i} ${bx(c)} «${c.textContent.trim().slice(0, 16)}»`));
      lines.push(`gap name->text: ${Math.round(tt.getBoundingClientRect().top - un.getBoundingClientRect().bottom)} unH=${Math.round(un.getBoundingClientRect().height)}`);
      for (let n = un, i = 0; n && n !== col && i < 6; n = n.parentElement, i++) lines.push(` u${i} ${bx(n)}`);
      for (let n = tt, i = 0; n && n !== col && i < 4; n = n.parentElement, i++) lines.push(` t${i} ${bx(n)}`);
    }
    lines.push('== FONTS  HN=' + document.fonts.check('14px "Helvetica Neue"') + ' smoothing(body)=' + getComputedStyle(document.body).webkitFontSmoothing);
    const fa = $('[data-testid="primaryColumn"] article[data-testid="tweet"]');
    const fontOf = (label, n) => {
      if (!n) { lines.push(label + ': MISS'); return; }
      const cs = getComputedStyle(n);
      lines.push(`${label}: ${cs.fontSize}/${cs.lineHeight} w${cs.fontWeight} ls=${cs.letterSpacing} c=${cs.color} smooth=${cs.webkitFontSmoothing} ff=${cs.fontFamily.slice(0, 34)} «${n.textContent.trim().slice(0, 14)}»`);
    };
    if (fa) {
      fontOf('name', $('[data-testid="User-Name"] > div:first-child span span, [data-testid="User-Name"] > div:first-child span', fa));
      fontOf('handle', $('[data-testid="User-Name"] > div:nth-child(2) span', fa));
      fontOf('time', $('time', fa));
      const tt = $('[data-testid="tweetText"]', fa);
      fontOf('textDiv', tt);
      fontOf('textSpan', tt && $('span', tt));
      fontOf('count', $('[role="group"] [data-testid="like"] span, [role="group"] span', fa));
    }
    fontOf('tab', $('.ots-sticky [role="tab"] span'));
    fontOf('trend', $('[data-testid="trend"] span'));
    fontOf('h2side', $('[data-testid="sidebarColumn"] h2 span, [data-testid="sidebarColumn"] h2'));
    fontOf('minicard', $('#ots-mini-profile b'));
    lines.push('== BLANK (viewport ' + innerHeight + ' path ' + location.pathname.slice(0, 30) + ')');
    const arts = $$('[data-testid="primaryColumn"] article').filter((a) => {
      const r = a.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight;
    });
    const art = arts.find((a) => a.getBoundingClientRect().height > 400) || arts[0];
    if (art) {
      const dump = (n, d) => {
        if (lines.length > 70 || d > 14) return;
        const r = n.getBoundingClientRect();
        if (r.height < 120 && d > 0) return;
        const cs = getComputedStyle(n);
        const bits = [n.tagName.toLowerCase() + (n.dataset && n.dataset.testid ? '#' + n.dataset.testid : ''),
          n.getAttribute && n.getAttribute('role') ? '[' + n.getAttribute('role') + ']' : '',
          n.getAttribute && n.getAttribute('aria-label') ? '"' + n.getAttribute('aria-label').slice(0, 20) + '"' : '',
          `${Math.round(r.width)}x${Math.round(r.height)}`,
          cs.display !== 'block' && cs.display !== 'flex' ? 'disp=' + cs.display : '',
          cs.visibility !== 'visible' ? 'VIS=' + cs.visibility : '', cs.opacity !== '1' ? 'OP=' + cs.opacity : '',
          cs.position !== 'relative' && cs.position !== 'static' ? 'pos=' + cs.position : '',
          cs.backgroundColor !== 'rgba(0, 0, 0, 0)' ? 'bg=' + cs.backgroundColor : '',
          cs.backgroundImage !== 'none' ? 'BGIMG' : '', cs.filter !== 'none' ? 'filt=' + cs.filter.slice(0, 20) : '',
          cs.paddingBottom !== '0px' ? 'pb=' + cs.paddingBottom : '', n.classList && n.classList.contains('ots-hidden') ? 'OTSHID' : '',
          n.tagName === 'IMG' ? `done=${n.complete} nat=${n.naturalWidth} src=${(n.currentSrc || n.src).slice(8, 50)}` : '',
          n.tagName === 'VIDEO' ? `ready=${n.readyState} err=${n.error ? n.error.code : '-'}` : '',
          n.children.length === 0 ? '«' + n.textContent.trim().slice(0, 20) + '»' : ''];
        lines.push(' '.repeat(Math.min(d, 12)) + bits.filter(Boolean).join(' '));
        for (const c of n.children) dump(c, d + 1);
      };
      dump(art, 0);
      const small = $$('*', art).filter((n) => n.children.length === 0 && /^[.·•\s]+$/.test(n.textContent) && n.textContent.trim());
      small.slice(0, 3).forEach((n) => lines.push('DOTS ' + n.tagName.toLowerCase() + ' «' + n.textContent + '» parent=' + (n.parentElement.dataset.testid || n.parentElement.getAttribute('role') || '')));
      const imgs = $$('img', art).map((i) => `${i.complete ? 'ok' : 'LOADING'}:${i.naturalWidth}:${i.getBoundingClientRect().height | 0}:${(i.currentSrc || i.src).split('/')[3]}`);
      lines.push('IMGS ' + imgs.join(' ').slice(0, 300));
    }
    lines.push('== MEDIA (viewport ' + innerHeight + ')');
    $$('[data-testid="primaryColumn"] article[data-testid="tweet"]').filter((a) => {
      const r = a.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight;
    }).slice(0, 5).forEach((a, i) => {
      const who = ($('[data-testid="User-Name"] a[href^="/"]', a) || {}).textContent || '';
      const ar = a.getBoundingClientRect();
      lines.push(`#${i} ${who.slice(0, 16)} y${Math.round(ar.top)} h${Math.round(ar.height)}`);
      $$('[data-testid="tweetPhoto"], [data-testid="videoPlayer"], [data-testid="videoComponent"], [data-testid="card.wrapper"], img[src*="twimg.com/media"], img[src*="ext_tw_video_thumb"], img[src*="amplify_video_thumb"], video', a).slice(0, 6).forEach((m) => {
        const r = m.getBoundingClientRect(); const cs = getComputedStyle(m);
        let info = `  ${m.tagName.toLowerCase()}${m.dataset.testid ? '#' + m.dataset.testid : ''} ${Math.round(r.width)}x${Math.round(r.height)} y${Math.round(r.top)} op${cs.opacity} vis=${cs.visibility} bg=${cs.backgroundColor}`;
        if (m.tagName === 'IMG') info += ` done=${m.complete} nat=${m.naturalWidth} src=${(m.currentSrc || m.src).split('/').slice(-1)[0].slice(0, 30)}`;
        if (m.tagName === 'VIDEO') info += ` ready=${m.readyState} net=${m.networkState} err=${m.error ? m.error.code : '-'} poster=${m.poster ? 'y' : 'n'}`;
        if (r.width && r.height) {
          const t = document.elementFromPoint(r.left + r.width / 2, Math.max(1, Math.min(innerHeight - 1, r.top + r.height / 2)));
          if (t && t !== m && !m.contains(t)) info += ` TOP=${t.tagName.toLowerCase()}${t.dataset && t.dataset.testid ? '#' + t.dataset.testid : ''} bg=${getComputedStyle(t).backgroundColor} txt=${(t.textContent || '').trim().slice(0, 24)}`;
        }
        lines.push(info);
      });
      const txt = $$('span', a).map((s) => s.textContent.trim()).find((t) => /内容警告|敏感|Content warning|sensitive|无法播放|could not be played|重新加载|Reload/i.test(t));
      if (txt) lines.push('  MSG: ' + txt.slice(0, 50));
    });
    lines.push('== SIDEBAR CHAIN (scrollY=' + Math.round(scrollY) + ')');
    const sbc = $('[data-testid="sidebarColumn"]');
    const sideWalk = (n, d) => {
      if (!n || d > 4 || lines.length > 40) return;
      const cs = getComputedStyle(n); const r = n.getBoundingClientRect();
      lines.push(`${' '.repeat(d)}${n.tagName.toLowerCase()}${n.dataset.testid ? '#' + n.dataset.testid : ''} ${Math.round(r.width)}x${Math.round(r.height)} y${Math.round(r.top)} pos=${cs.position} top=${cs.top} tf=${cs.transform.slice(0, 30)} disp=${cs.display} fdir=${cs.flexDirection} grow=${cs.flexGrow} h=${cs.height.slice(0, 8)} minh=${cs.minHeight} ov=${cs.overflowY} st="${(n.getAttribute('style') || '').slice(0, 50)}"`);
      [...n.children].slice(0, 4).forEach((c) => sideWalk(c, d + 1));
    };
    if (sbc) { sideWalk(sbc.parentElement, 0); }
    lines.push('== WIDTH ~600 in primaryColumn');
    const pcol = $('[data-testid="primaryColumn"]');
    if (pcol) {
      const q = [[pcol, 0]]; let seen = 0;
      while (q.length && seen < 400) {
        const [n, d] = q.shift(); seen++;
        const w = n.getBoundingClientRect().width;
        if (w > 590 && w < 610) {
          const cs = getComputedStyle(n);
          lines.push(`d${d} ${n.tagName.toLowerCase()}${n.dataset.testid ? '#' + n.dataset.testid : ''} w${Math.round(w)} maxW=${cs.maxWidth} wid=${cs.width} flex=${cs.flexBasis}/${cs.flexShrink} ${n.classList.contains('ots-fullwidth') ? 'FULL' : ''} cls=${String(n.className).slice(0, 50)}`);
          if (lines.length > 12) break;
        }
        for (const c of n.children) q.push([c, d + 1]);
      }
      lines.push(`pcol w=${Math.round(pcol.getBoundingClientRect().width)}`);
    }
    const desc = (n) => {
      const tid = n.dataset && n.dataset.testid ? '#' + n.dataset.testid : '';
      const role = n.getAttribute('role') ? '[' + n.getAttribute('role') + ']' : '';
      const al = n.getAttribute('aria-label') ? '"' + n.getAttribute('aria-label').slice(0, 24) + '"' : '';
      const cs = getComputedStyle(n);
      const flags = (n.classList.contains('ots-hidden') ? ' HID' : '') + (cs.display === 'none' ? ' NONE' : '') +
        (cs.position === 'sticky' || cs.position === 'fixed' ? ' ' + cs.position : '');
      const r = n.getBoundingClientRect();
      const mt = cs.marginTop !== '0px' || cs.marginBottom !== '0px' ? ` m${cs.marginTop}/${cs.marginBottom}` : '';
      const pd = cs.paddingTop !== '0px' || cs.paddingBottom !== '0px' ? ` p${cs.paddingTop}/${cs.paddingBottom}` : '';
      return `${n.tagName.toLowerCase()}${tid}${role}${al}${flags} ${Math.round(r.width)}x${Math.round(r.height)} y${Math.round(r.top)}${mt}${pd}`;
    };
    const walk = (n, d) => {
      if (lines.length > 45 || d > 14 || n.id === 'ots-mini-profile') return;
      const interesting = n.children.length !== 1 || /^(H2|ASIDE|SECTION|NAV|FORM)$/.test(n.tagName) || n.dataset.testid || n.classList.contains('ots-hidden');
      if (interesting) {
        const txt = n.children.length === 0 ? ' «' + n.textContent.trim().slice(0, 22) + '»' : '';
        lines.push(' '.repeat(Math.min(d, 10)) + desc(n) + txt);
      }
      if (n.classList.contains('ots-hidden') || /^(ASIDE|SECTION|NAV)$/.test(n.tagName)) {
        const h = $('h2, [role="heading"]', n);
        if (h) lines.push(' '.repeat(Math.min(d, 10) + 1) + 'h: ' + h.textContent.trim().slice(0, 30));
        return;
      }
      for (const c of n.children) walk(c, interesting ? d + 1 : d);
    };
    const sb = $('[data-testid="sidebarColumn"]');
    lines.push('== SIDEBAR');
    if (sb) walk(sb, 0);
    lines.push('== REMAP');
    const rs = $('#ots-theme-remap');
    lines.push(`remap media=${rs && rs.media} lines=${rs ? rs.textContent.split('\n').length : 0} sheets=${document.styleSheets.length}`);
    let found = 0, sample = '';
    for (const sh of Array.from(document.styleSheets)) {
      let rr; try { rr = sh.cssRules; } catch (e) { lines.push('x-origin: ' + (sh.href || '').slice(0, 50)); continue; }
      for (const r of Array.from(rr)) {
        if (r.cssText && r.cssText.includes('231, 233, 234')) { found++; if (!sample) sample = r.cssText.slice(0, 90); }
      }
    }
    lines.push(`rules with 231,233,234: ${found} ${sample}`);
    const h1 = $$('[data-testid="primaryColumn"] [data-testid="cellInnerDiv"] span').find((s) => /suspended/.test(s.textContent) && !s.children.length);
    if (h1) lines.push(`susp c=${getComputedStyle(h1).color} cls=${h1.className.slice(0, 80)} style=${(h1.getAttribute('style') || '').slice(0, 60)}`);
    const dlg = $('[role="dialog"]');
    if (dlg) {
      lines.push('== DIALOG');
      [dlg, ...$$('div', dlg)].filter((d) => {
        const bg = getComputedStyle(d).backgroundColor;
        return bg !== 'rgba(0, 0, 0, 0)' && d.getBoundingClientRect().width > 200;
      }).slice(0, 6).forEach((d) => {
        lines.push(`${d.tagName.toLowerCase()} ${Math.round(d.getBoundingClientRect().width)}w bg=${getComputedStyle(d).backgroundColor} cls=${d.className.slice(0, 70)} st=${(d.getAttribute('style') || '').slice(0, 40)}`);
      });
      $$('svg', dlg).slice(0, 8).forEach((sv) => {
        const b = sv.closest('button, a, [role="button"]');
        const cs = getComputedStyle(sv);
        const tb = sv.closest('[data-testid]');
        const rr = sv.getBoundingClientRect();
        let odd = '';
        for (let p = sv, i = 0; p && i < 8; p = p.parentElement, i++) {
          const pc = getComputedStyle(p);
          if (pc.opacity !== '1' || pc.visibility !== 'visible' || pc.display === 'none' || (pc.overflow !== 'visible' && i > 0)) odd += ` [${i}:${p.tagName.toLowerCase()} op${pc.opacity} ${pc.visibility} ${pc.display} ov${pc.overflow} ${Math.round(p.getBoundingClientRect().width)}x${Math.round(p.getBoundingClientRect().height)}${p.classList.contains('ots-hidden') ? ' HID' : ''}]`;
        }
        const top = rr.width ? document.elementFromPoint(rr.left + rr.width / 2, rr.top + rr.height / 2) : null;
        const topDesc = top ? `${top.tagName.toLowerCase()}${top.closest('svg') === sv ? '=self' : ''} bg=${getComputedStyle(top).backgroundColor} ${top.className && top.className.baseVal == null ? String(top.className).slice(0, 40) : ''}` : '';
        const path = $('path, circle, rect, line', sv);
        const pcs = path ? getComputedStyle(path) : null;
        const pinfo = path ? `path fill=${pcs.fill} stroke=${pcs.stroke} sw=${pcs.strokeWidth} op=${pcs.opacity} attrs=${Array.from(path.attributes).map((a) => a.name + (a.name === 'd' ? '' : '=' + a.value)).join(',').slice(0, 60)}` : '';
        lines.push(`svg "${b ? (b.getAttribute('aria-label') || '').slice(0, 14) : ''}" ${Math.round(rr.width)}x${Math.round(rr.height)} svgattrs=${Array.from(sv.attributes).map((a) => a.name + '=' + a.value.slice(0, 20)).join(',').slice(0, 90)} | ${pinfo}`);
      });
    }
    lines.push('== USERCELL');
    const uc = $('[data-testid="sidebarColumn"] [data-testid="UserCell"]');
    if (uc) {
      $$('span, a, div[dir]', uc).filter((n) => n.children.length === 0 && n.textContent.trim()).slice(0, 5).forEach((n) => {
        const cs = getComputedStyle(n);
        lines.push(`${n.tagName.toLowerCase()} «${n.textContent.trim().slice(0, 14)}» c=${cs.color} op=${cs.opacity} cls=${n.className.slice(0, 60)}`);
        let p = n.parentElement, chain = '';
        for (let i = 0; i < 4 && p; i++, p = p.parentElement) chain += ` <${p.tagName.toLowerCase()}${p.getAttribute('role') ? '[' + p.getAttribute('role') + ']' : ''} c=${getComputedStyle(p).color} op=${getComputedStyle(p).opacity}`;
        lines.push('  ' + chain);
      });
    }
    lines.push('== STICKY');
    const st = $('.ots-sticky');
    if (st) walk(st, 0);
    lines.push('== TABLISTS');
    $$('[data-testid="primaryColumn"] [role="tablist"]').forEach((t, i) => {
      const cell = t.closest('[data-testid="cellInnerDiv"]');
      lines.push(`${i}: sticky=${!!t.closest('.ots-sticky')} cell=${!!cell} nav=${!!t.closest('nav')} ${Math.round(t.getBoundingClientRect().top)} «${t.textContent.slice(0, 30)}»`);
    });
    lines.push('== CELLS');
    $$('[data-testid="primaryColumn"] [data-testid="cellInnerDiv"]').slice(0, 14).forEach((c, i) => {
      const r = c.getBoundingClientRect();
      lines.push(`${i}: y${Math.round(r.top)} h${Math.round(r.height)}${c.classList.contains('ots-hidden') ? ' HID' : ''}${$('article', c) ? ' ART' : ''}${$('[role="tablist"]', c) ? ' TABS' : ''} «${c.textContent.trim().slice(0, 34)}»`);
      if (r.height > 0 && r.height < 20) {
        $$('div', c).slice(0, 4).forEach((d) => {
          const cs = getComputedStyle(d);
          lines.push(`   div h${Math.round(d.getBoundingClientRect().height)} bg=${cs.backgroundColor} bt=${cs.borderTopWidth} ${cs.borderTopColor} bb=${cs.borderBottomWidth} ${cs.borderBottomColor} st=${(d.getAttribute('style') || '').slice(0, 50)}`);
        });
      }
    });
    const text = lines.join('\n');
    if (box.textContent !== text) box.textContent = text;
    // 调试：让推文下面那排按钮一直显示，方便截图检查样式
    if (!$('#ots-debug-style')) {
      const s = el('style');
      s.id = 'ots-debug-style';
      s.textContent = 'html.ots article[data-testid="tweet"] [role="group"][aria-label]{opacity:1 !important}';
      document.head.appendChild(s);
    }
  }

  // ---------- 换背景：页面左下角的按钮，点开一排缩略图，点哪张换哪张 ----------
  const BACKGROUNDS = [
    ['sky', '天空'], ['gingham', '蓝格子'], ['dots', '粉圆点'], ['stripes', '薄荷条纹'],
    ['night', '夜空'], ['kraft', '牛皮纸'], ['gray', '经典灰'], ['mybanner', '我的横幅'],
  ];
  let currentBg = 'sky';
  let myBanner = '';

  // 横幅当背景的判断逻辑：
  //   放大不超过约 2 倍 → 「节选」：横幅按屏幕宽铺在最上面一条，下面用横幅底部的颜色渐变过渡
  //   放大超过 2 倍（会糊）→ 「取色」：完全不用图，只用横幅里取出的颜色做渐变
  //   读不到图 → 用用户自己选的背景
  let profileBgOn = true;
  let pageBanner = '';
  const bannerLooks = new Map();
  const BG_VARS = ['--ots-bg-image', '--ots-bn-image', '--ots-bn-top', '--ots-bn-bottom', '--ots-bn-main', '--ots-bn-deep'];

  function rgb([r, g, b]) { return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`; }

  function analyzeBanner(url) {
    if (bannerLooks.has(url)) return;
    bannerLooks.set(url, null);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const W = 60, H = 20;
        const c = document.createElement('canvas');
        c.width = W; c.height = H;
        const ctx = c.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, W, H);
        const d = ctx.getImageData(0, 0, W, H).data;
        const avg = (y0, y1) => {
          const t = [0, 0, 0]; let n = 0;
          for (let y = y0; y < y1; y++) for (let x = 0; x < W; x++) {
            const i = (y * W + x) * 4;
            t[0] += d[i]; t[1] += d[i + 1]; t[2] += d[i + 2]; n++;
          }
          return t.map((v) => v / n);
        };
        // 主色：把颜色分桶，越鲜艳权重越高，取权重最大的那一桶
        const buckets = new Map();
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2];
          const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
          const w = 1 + (mx ? (mx - mn) / mx : 0) * 3;
          const key = ((r >> 5) << 6) | ((g >> 5) << 3) | (b >> 5);
          const k = buckets.get(key) || [0, 0, 0, 0];
          k[0] += r * w; k[1] += g * w; k[2] += b * w; k[3] += w;
          buckets.set(key, k);
        }
        let best = null;
        for (const k of buckets.values()) if (!best || k[3] > best[3]) best = k;
        const main = [best[0] / best[3], best[1] / best[3], best[2] / best[3]];
        const bottom = avg(H - 3, H);
        bannerLooks.set(url, {
          ok: true, w: img.naturalWidth, h: img.naturalHeight,
          top: rgb(avg(0, 4)), bottom: rgb(bottom), main: rgb(main), deep: rgb(bottom.map((v) => v * 0.62)),
        });
      } catch (e) {
        bannerLooks.set(url, { ok: false });
      }
      refreshBg();
    };
    img.onerror = () => { bannerLooks.set(url, { ok: false }); refreshBg(); };
    img.src = url;
  }

  // 记住看过的主页的横幅（按用户名），点进他的帖子详情页时也能用他的横幅当背景
  let bannerCache = {};
  function rememberBanner(handle, url) {
    const key = (handle || '').replace(/^@/, '').toLowerCase();
    if (!key || (bannerCache[key] || '') === url) return;
    if (url) {
      delete bannerCache[key];
      bannerCache[key] = url;
      const keys = Object.keys(bannerCache);
      if (keys.length > 300) delete bannerCache[keys[0]];
    } else {
      delete bannerCache[key];
    }
    try { chrome.storage.local.set({ otsBanners: bannerCache }); } catch (e) { /* 忽略 */ }
  }
  function bannerForStatusPage() {
    const m = location.pathname.match(/^\/([A-Za-z0-9_]{1,15})\/status\/\d+/);
    return m ? bannerCache[m[1].toLowerCase()] || '' : '';
  }

  function applyBg(id) {
    currentBg = id;
    refreshBg();
  }

  function refreshBg() {
    const root = document.documentElement;
    let mode = currentBg === 'mybanner' && !myBanner ? 'sky' : currentBg;
    const vars = {};
    if (currentBg === 'mybanner' && myBanner) vars['--ots-bg-image'] = `url("${myBanner}")`;

    const banner = profileBgOn && pageBanner ? pageBanner : (currentBg === 'mybanner' ? myBanner : '');
    if (banner) {
      if (!bannerLooks.has(banner)) analyzeBanner(banner);
      const look = bannerLooks.get(banner);
      if (look && look.ok) {
        const scale = (window.innerWidth * (window.devicePixelRatio || 1)) / look.w;
        mode = scale <= 2.05 ? 'banner-strip' : 'banner-colors';
        Object.assign(vars, {
          '--ots-bn-image': `url("${banner}")`, '--ots-bn-top': look.top, '--ots-bn-bottom': look.bottom,
          '--ots-bn-main': look.main, '--ots-bn-deep': look.deep,
        });
      }
    }

    if (root.dataset.otsBg !== mode) root.dataset.otsBg = mode;
    for (const v of BG_VARS) {
      if (vars[v]) { if (root.style.getPropertyValue(v) !== vars[v]) root.style.setProperty(v, vars[v]); }
      else if (root.style.getPropertyValue(v)) root.style.removeProperty(v);
    }

    const picker = $('#ots-bg-picker');
    if (picker) {
      $$('.ots-bg-swatch', picker).forEach((b) => b.classList.toggle('active', b.dataset.bg === currentBg));
      const mine = $('.ots-bg-swatch[data-bg="mybanner"]', picker);
      if (mine) {
        mine.classList.toggle('disabled', !myBanner);
        mine.title = myBanner ? T.bg.mybanner : T.bgMineHint;
        $('.ots-bg-thumb', mine).style.backgroundImage = myBanner ? `url("${myBanner}")` : '';
      }
      const follow = $('.ots-bg-follow:not(.ots-retro-row) input', picker);
      if (follow) follow.checked = profileBgOn;
    }
  }

  function buildBgPicker() {
    if ($('#ots-bg-picker') || !document.body) return;
    const wrap = el('div');
    wrap.id = 'ots-bg-picker';
    wrap.innerHTML = `
      <div class="ots-bg-tray" hidden>
        <div class="ots-era-row"><span>${T.eraTitle}</span><button type="button" data-era="2010">${T.era2010}</button><button type="button" data-era="2013">${T.era2013}</button></div>
        <div class="ots-bg-title">${T.bgTitle}</div>
        <div class="ots-bg-grid">${BACKGROUNDS.map(([id]) => [id, T.bg[id]]).map(([id, name]) => `
          <button type="button" class="ots-bg-swatch" data-bg="${id}" title="${name}">
            <span class="ots-bg-thumb" data-bg="${id}"></span><span class="ots-bg-name">${name}</span>
          </button>`).join('')}
        </div>
        <label class="ots-bg-follow"><input type="checkbox"><span>${T.bgFollow}</span></label>
        <label class="ots-bg-follow ots-retro-row"><input type="checkbox"><span><b>${T.retro}</b>：${T.retroDesc}</span></label>
      </div>
      <button type="button" class="ots-btn ots-bg-toggle">${ICON.palette}<span>${T.bgButton}</span></button>`;
    const tray = $('.ots-bg-tray', wrap);
    $('.ots-bg-toggle', wrap).addEventListener('click', (e) => {
      e.stopPropagation();
      tray.hidden = !tray.hidden;
    });
    wrap.addEventListener('click', (e) => {
      const eb = e.target.closest('[data-era]');
      if (eb) {
        setEra(eb.dataset.era);
        try { chrome.storage.local.set({ otsEra: eb.dataset.era }); } catch (err) { /* 忽略 */ }
        return;
      }
      const sw = e.target.closest('.ots-bg-swatch');
      if (!sw || sw.classList.contains('disabled')) return;
      applyBg(sw.dataset.bg);
      try { chrome.storage.local.set({ otsBg: sw.dataset.bg }); } catch (err) { /* 忽略 */ }
    });
    const retroBox = $('.ots-retro-row input', wrap);
    retroBox.checked = RETRO;
    retroBox.addEventListener('change', (e) => {
      setRetro(e.target.checked);
      try { chrome.storage.local.set({ otsRetro: e.target.checked }); } catch (err) { /* 忽略 */ }
    });
    $('.ots-bg-follow:not(.ots-retro-row) input', wrap).addEventListener('change', (e) => {
      profileBgOn = e.target.checked;
      try { chrome.storage.local.set({ otsProfileBg: profileBgOn }); } catch (err) { /* 忽略 */ }
      refreshBg();
    });
    document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) tray.hidden = true; });
    document.body.appendChild(wrap);
    if (devOpenTray) tray.hidden = false;
    applyBg(currentBg);
    updateEraButtons();
  }

  // ---------- 开关：点插件图标弹出的小面板里关掉，页面立刻变回原版 ----------
  let enabled = true;
  let globalOn = true;
  // 只关这个标签页：存在这个标签页自己的 sessionStorage 里，刷新还在，别的标签页不受影响
  let tabOff = false;
  try { tabOff = sessionStorage.getItem('otsTabOff') === '1'; } catch (e) { /* 忽略 */ }
  function recompute() {
    enabled = globalOn && !tabOff;
    applyEnabled();
  }
  const OWN = ['#ots-topbar', '#ots-profile-card', '#ots-mini-profile', '#ots-side-profile', '#ots-whats', '#ots-bg-picker', '#ots-debug', '#ots-debug-style'];

  function applyEnabled() {
    document.documentElement.classList.toggle('ots', enabled);
    [remapStyle, shapeStyle].forEach((st) => { if (st) st.media = enabled ? 'all' : 'not all'; });
    if (!enabled) {
      OWN.forEach((sel) => { const n = $(sel); if (n) n.remove(); });
      $$('.ots-meta10').forEach((n) => n.remove());
      $$('.ots-search-pinned').forEach((n) => n.classList.remove('ots-search-pinned'));
      document.documentElement.classList.remove('ots-search-native');
      restoreBrand();
      restoreRetroImages();
    } else schedule();
    document.documentElement.classList.toggle('ots-retro', enabled && RETRO);
  }

  try {
    chrome.storage.local.get(['otsEnabled', 'otsBg', 'otsMyBanner', 'otsProfileBg', 'otsBanners', 'otsEra', 'otsRetro'], (r) => {
      setEra(r.otsEra);
      bannerCache = r.otsBanners || {};
      myBanner = r.otsMyBanner || '';
      profileBgOn = r.otsProfileBg !== false;
      setRetro(r.otsRetro === true);
      // 开发模式专用：网址后面带 #ots-era=2010 / #ots-retro=1 这类参数，直接切换（方便检查，商店版没有）
      let dev = false;
      try { dev = !('update_url' in chrome.runtime.getManifest()); } catch (e) { /* 忽略 */ }
      for (const [, key, val] of dev ? location.hash.matchAll(/ots-(era|retro|tray|off)=(\w+)/g) : []) {
        if (key === 'era') { setEra(val); chrome.storage.local.set({ otsEra: val === '2010' ? '2010' : '2013' }); }
        if (key === 'retro') { setRetro(val === '1'); chrome.storage.local.set({ otsRetro: val === '1' }); }
        if (key === 'tray') devOpenTray = val === '1';
        if (key === 'off') { tabOff = val === '1'; try { sessionStorage.setItem('otsTabOff', tabOff ? '1' : ''); } catch (e) { /* 忽略 */ } }
      }
      applyBg(r.otsBg || 'sky');
      globalOn = r.otsEnabled !== false;
      recompute();
    });
    chrome.storage.onChanged.addListener((ch, area) => {
      if (area !== 'local') return;
      if (ch.otsEnabled) { globalOn = ch.otsEnabled.newValue !== false; recompute(); }
      if (ch.otsBg) applyBg(ch.otsBg.newValue || 'sky');
      if (ch.otsEra) setEra(ch.otsEra.newValue);
      if (ch.otsProfileBg) { profileBgOn = ch.otsProfileBg.newValue !== false; refreshBg(); }
      if (ch.otsRetro) setRetro(ch.otsRetro.newValue === true);
    });
    chrome.runtime.onMessage.addListener((msg, sender, reply) => {
      if (!msg || msg.type !== 'ots-tab') return;
      if (typeof msg.off === 'boolean') {
        tabOff = msg.off;
        try { if (tabOff) sessionStorage.setItem('otsTabOff', '1'); else sessionStorage.removeItem('otsTabOff'); } catch (e) { /* 忽略 */ }
        recompute();
      }
      reply({ off: tabOff });
    });
  } catch (e) { /* 插件刚重新加载时会拿不到 */ }

  // ---------- 主循环：页面一有变化就检查一遍 ----------
  // 推文下面那排按钮的显示方式：hover = 鼠标移上去才出现，faint = 一直显示但很淡，full = 一直正常显示
  const ACTIONS_MODE = 'faint';

  function tick() {
    if (!enabled) return;
    document.documentElement.classList.add('ots');
    if (document.documentElement.dataset.otsActions !== ACTIONS_MODE) document.documentElement.dataset.otsActions = ACTIONS_MODE;
    // 打开大图、发推框这类弹窗时，顶栏和换背景按钮让开，跟 2013 点开大图一样整个盖住
    document.documentElement.classList.toggle('ots-modal', !!$('[aria-modal="true"]'));
    try {
      refreshLang();
      buildBgPicker();
      updateThemeRemap();
      buildTopbar();
      updateTopbar();
      fixSticky();
      tidySidebar();
      tidyTimeline();
      tidyTweetHeaders();
      keepScroll();
      brandTidy();
      hideFloating();
      renderProfileCard();
      if (!pageBanner) pageBanner = bannerForStatusPage();
      refreshBg();
      renderMiniProfile();
      renderSideProfile2010();
      renderWhatsHappening();
      tidyMeta10();
      pinSearch();
      retroImages();
      devDebug();
    } catch (err) {
      let ver = '';
      try { ver = ' v' + chrome.runtime.getManifest().version; } catch (e) { /* 插件刚重新加载时拿不到 */ }
      console.warn(`[古早推特${ver}]`, err);
    }
  }

  let pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    setTimeout(() => { pending = false; tick(); }, 200);
  }

  // 开发模式：每 2 秒问一下后台插件文件有没有改，改了就刷新页面（从应用商店装的版本不会跑这段）
  function devAutoReload() {
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
  }

  document.documentElement.classList.add('ots');
  function start() {
    tick();
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', schedule);
  }
  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start, { once: true });
})();
