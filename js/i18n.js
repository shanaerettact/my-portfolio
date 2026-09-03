/* =================================================================== */
/* LANGUAGE SWITCHER (zh-Hant / en)
/* 標記方式：data-i18n 換純文字，data-i18n-html 換含標籤的內容
====================================================================== */

(function () {

  "use strict";

  var STORAGE_KEY = 'portfolio-lang';
  var DEFAULT_LANG = 'zh';
  var HTML_LANG = { zh: 'zh-Hant-TW', en: 'en' };

  var dictionaries = {

    /* ------------------------------------------------------------- */
    /*  中文
    /* ------------------------------------------------------------- */
    zh: {
      'page.title': '蘇朝輝 Johnny Su - 個人作品集',

      'nav.home': '首頁',
      'nav.about': '關於我',
      'nav.portfolio': '作品集',
      'nav.contact': '聯絡我',
      'nav.class': '線上課程',

      'home.greeting': 'Hi! 我是蘇朝輝. <span>一位前端工程師</span>',
      'home.intro': '我擁有多年前端開發與 UI/UX 設計經驗，擅長將使用者需求轉化為具備高互動性與易用性的數位產品。我相信「設計驅動開發」，致力於打造既美觀又實用的產品體驗，提升用戶滿意度與產品價值。',
      'home.moreAbout': '更多關於我',

      'about.sectionTitle': '關於 <span>我</span>',
      'about.personalInfo': '個人介紹',
      'about.label.cnName': '中文姓名 :',
      'about.value.cnName': '蘇朝輝',
      'about.label.enName': '英文姓名 :',
      'about.value.enName': 'Johnny',
      'about.label.birthYear': '出生年 :',
      'about.value.birthYear': '1979年',
      'about.label.phone': '連絡電話 :',
      'about.value.phone': '0937655402',
      'about.label.email': 'Email :',
      'about.value.email': 'jflashblaze@yahoo.com.tw',
      'about.label.status': '目前工作狀態 :',
      'about.value.status': '在職中',

      'about.stats.experience': '年以上 <span class="d-block">經驗</span>',
      'about.stats.projects': '以上完成 <span class="d-block">大型專案</span>',

      'about.skills': '專業技能',
      'about.expEdu': '經歷 <span>&amp;</span> 學歷',

      'about.job1.time': '2024 - 至今',
      'about.job1.title': 'UI/UX專案襄理 <span class="place open-sans-font">王品集團</span>',
      'about.job1.desc': '負責協調跨部門資源，推動 UI/UX 設計專案從概念到落地，確保產品體驗符合使用者需求與商業目標。',
      'about.job2.time': '2018 - 2024',
      'about.job2.title': '前端工程師 <span class="place open-sans-font">原誠科技有限公司</span>',
      'about.job2.desc': '專注於使用 各式前端框架如Vue.js、Angular等 建構高效、模組化的前端介面，致力於提升用戶體驗與開發效能。',
      'about.job3.time': '2010 - 2018',
      'about.job3.title': '網頁設計師 <span class="place open-sans-font">傑富科技資訊有限公司</span>',
      'about.job3.desc': '結合視覺美感與使用者體驗，設計兼具品牌風格與功能性的網站介面。',
      'about.edu1.time': '2011/9 - 2014/6',
      'about.edu1.title': '多媒體設計研究所 <span class="place open-sans-font">台中科技大學</span>',
      'about.edu1.desc': '主要專注在互動設計、使用者體驗與數位內容製作。研究期間除了學習視覺與動態設計相關技術，對 UI/UX 設計與前端開發有更深入的理解與興趣。',
      'about.edu2.time': '1999/9 - 2003/6',
      'about.edu2.title': '視覺傳達設計系 <span class="place open-sans-font">樹德科技大學</span>',
      'about.edu2.desc': '在學期間打下了扎實的設計基礎，從平面設計、品牌識別到包裝與排版都有涉獵。除了視覺美感的訓練，也接觸到一些數位媒體與簡易互動設計，讓我對 UI/UX 與前端設計產生濃厚興趣，成為後續進修與職涯轉向的起點。',

      'portfolio.sectionTitle': '專案 <span>作品</span>',

      'proj.wowprime.name': '王品集團官網',
      'proj.wowprime.title': '王品集團官網',
      'proj.wowfms.name': '王品瘋美食官網',
      'proj.wowfms.title': '王品瘋美食官網',
      'proj.brands.name': '王品旗下品牌各官網',
      'proj.brands.title': '王品旗下各品牌官網',
      'proj.myship.name': '7-11賣貨便UI介面設計',
      'proj.myship.title': '7-11賣貨便UI介面設計',
      'proj.uiux.name': 'UX/UI專案',
      'proj.uiux.title': 'UX/UI專案',
      'proj.vic.name': 'vic線上娛樂城',
      'proj.vic.title': 'vic線上娛樂城前端開發',
      'proj.gotolive.name': '直播伴侶平台',
      'proj.gotolive.title': '直播伴侶平台',
      'proj.neo.name': 'NEO CYBER | Cyberpunk Gaming',
      'proj.neo.title': 'NEO CYBER | Cyberpunk Gaming',
      'proj.movie.name': '影視站前端開發',
      'proj.movie.title': '影視站前端開發',

      'label.tech': '技術 ',
      'label.preview': '預覽 ',
      'label.source': '原始碼 ',
      'label.files': '檔案結構 ',
      'link.deliveryHistory': '交付檔案歷史',
      'link.projectPreview': '專案預覽',
      'link.officialSite': '官網',

      'blog.sectionTitle': '線上 <span>課程</span>',
      'course1.title': '給網頁設計初學者的一門課',
      'course1.desc': '使用html+css，從零開始讓你成為網頁設計師的第一步',
      'course2.title': '一次解決常見 CSS 排版問題',
      'course2.desc': 'float、position、flexbox、gridsystem怎麼懂? 網頁版面規劃總是做不好，跑版問題太難找，這堂課一次解決你的煩惱。',
      'course3.title': '前端新手開發攻略｜6 小時無痛入門 jQuery',
      'course3.desc': '無 jQuery 基礎專用！詳細的基礎原理講解，搭配實例運用，讓您學習無障礙。'
    },

    /* ------------------------------------------------------------- */
    /*  English
    /* ------------------------------------------------------------- */
    en: {
      'page.title': 'Johnny Su - Personal Portfolio',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',
      'nav.class': 'Class',

      'home.greeting': 'Hi! I’m Johnny Su. <span>A Front-End Engineer</span>',
      'home.intro': 'With years of experience in front-end development and UI/UX design, I turn user needs into digital products that are highly interactive and easy to use. I believe in design-driven development, and I am committed to building product experiences that are both beautiful and practical — raising user satisfaction and product value alike.',
      'home.moreAbout': 'More About Me',

      'about.sectionTitle': 'ABOUT <span>ME</span>',
      'about.personalInfo': 'Personal Info',
      'about.label.cnName': 'Chinese Name :',
      'about.value.cnName': 'Su Chao-Hui',
      'about.label.enName': 'English Name :',
      'about.value.enName': 'Johnny',
      'about.label.birthYear': 'Year of Birth :',
      'about.value.birthYear': '1979',
      'about.label.phone': 'Phone :',
      'about.value.phone': '0937655402',
      'about.label.email': 'Email :',
      'about.value.email': 'jflashblaze@yahoo.com.tw',
      'about.label.status': 'Status :',
      'about.value.status': 'Currently Employed',

      'about.stats.experience': 'years of <span class="d-block">experience</span>',
      'about.stats.projects': 'major <span class="d-block">projects</span>',

      'about.skills': 'Skills',
      'about.expEdu': 'Experience <span>&amp;</span> Education',

      'about.job1.time': '2024 - Present',
      'about.job1.title': 'UI/UX Project Assistant Manager <span class="place open-sans-font">Wowprime Group</span>',
      'about.job1.desc': 'Coordinate cross-departmental resources and drive UI/UX design projects from concept to launch, making sure the product experience meets both user needs and business goals.',
      'about.job2.time': '2018 - 2024',
      'about.job2.title': 'Front-End Engineer <span class="place open-sans-font">Yuan Cheng Technology Co., Ltd.</span>',
      'about.job2.desc': 'Focused on building efficient, modular front-end interfaces with frameworks such as Vue.js and Angular, improving both user experience and development efficiency.',
      'about.job3.time': '2010 - 2018',
      'about.job3.title': 'Web Designer <span class="place open-sans-font">Jie Fu Information Technology Co., Ltd.</span>',
      'about.job3.desc': 'Combined visual craft with user experience to design website interfaces that are both on-brand and genuinely functional.',
      'about.edu1.time': '2011/9 - 2014/6',
      'about.edu1.title': 'M.A. in Multimedia Design <span class="place open-sans-font">National Taichung University of Science and Technology</span>',
      'about.edu1.desc': 'Focused on interaction design, user experience and digital content production. Alongside visual and motion design techniques, this was where my deeper interest in UI/UX design and front-end development took shape.',
      'about.edu2.time': '1999/9 - 2003/6',
      'about.edu2.title': 'B.A. in Visual Communication Design <span class="place open-sans-font">Shu-Te University</span>',
      'about.edu2.desc': 'Built a solid design foundation covering graphic design, brand identity, packaging and typography. Beyond the visual training, early exposure to digital media and simple interaction design sparked the interest in UI/UX and front-end work that shaped my later studies and career shift.',

      'portfolio.sectionTitle': 'MY <span>WORKS</span>',

      'proj.wowprime.name': 'Wowprime Group Website',
      'proj.wowprime.title': 'Wowprime Group Official Website',
      'proj.wowfms.name': 'Wowprime Fun Food Website',
      'proj.wowfms.title': 'Wowprime Fun Food Official Website',
      'proj.brands.name': 'Wowprime Brand Websites',
      'proj.brands.title': 'Official Websites for Wowprime Brands',
      'proj.myship.name': '7-ELEVEN myShip UI Design',
      'proj.myship.title': '7-ELEVEN myShip UI Design',
      'proj.uiux.name': 'UX/UI Project',
      'proj.uiux.title': 'UX/UI Project',
      'proj.vic.name': 'VIC Online Casino',
      'proj.vic.title': 'VIC Online Casino — Front-End Development',
      'proj.gotolive.name': 'Live Streaming Companion Platform',
      'proj.gotolive.title': 'Live Streaming Companion Platform',
      'proj.neo.name': 'NEO CYBER | Cyberpunk Gaming',
      'proj.neo.title': 'NEO CYBER | Cyberpunk Gaming',
      'proj.movie.name': 'Video Streaming Site',
      'proj.movie.title': 'Video Streaming Site — Front-End Development',

      'label.tech': 'Tech ',
      'label.preview': 'Preview ',
      'label.source': 'Source ',
      'label.files': 'File Structure ',
      'link.deliveryHistory': 'Delivery History',
      'link.projectPreview': 'Project Preview',
      'link.officialSite': 'Website',

      'blog.sectionTitle': 'ONLINE <span>COURSES</span>',
      'course1.title': 'A Web Design Course for Absolute Beginners',
      'course1.desc': 'Start from zero with HTML + CSS — your first step to becoming a web designer.',
      'course2.title': 'Solve Common CSS Layout Problems Once and for All',
      'course2.desc': 'Never quite got float, position, flexbox and grid systems? If your page layouts never come out right and broken layouts are hard to track down, this course clears it all up in one go.',
      'course3.title': 'Front-End Beginner’s Guide | Painless jQuery in 6 Hours',
      'course3.desc': 'No jQuery experience required. Clear explanations of the fundamentals, paired with hands-on examples, make learning effortless.'
    }
  };

  /* ------------------------------------------------------------- */
  /*  Apply a language to the document
  /* ------------------------------------------------------------- */

  function translate(lang) {
    var table = dictionaries[lang] || dictionaries[DEFAULT_LANG];
    var nodes, i, key;

    document.documentElement.setAttribute('lang', HTML_LANG[lang] || HTML_LANG[DEFAULT_LANG]);

    nodes = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < nodes.length; i++) {
      key = nodes[i].getAttribute('data-i18n');
      if (table[key] !== undefined) {
        nodes[i].textContent = table[key];
      }
    }

    nodes = document.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < nodes.length; i++) {
      key = nodes[i].getAttribute('data-i18n-html');
      if (table[key] !== undefined) {
        nodes[i].innerHTML = table[key];
      }
    }

    var buttons = document.querySelectorAll('#lang-switch .lang-switch__btn');
    for (i = 0; i < buttons.length; i++) {
      var isActive = buttons[i].getAttribute('data-lang') === lang;
      buttons[i].classList.toggle('active', isActive);
      buttons[i].setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }
  }

  /* ------------------------------------------------------------- */
  /*  Stored preference -> browser language -> default
  /* ------------------------------------------------------------- */

  function initialLang() {
    var stored;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      stored = null;
    }
    if (dictionaries[stored]) {
      return stored;
    }
    var browser = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return browser.indexOf('zh') === 0 ? 'zh' : (browser ? 'en' : DEFAULT_LANG);
  }

  function setLang(lang) {
    translate(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private browsing / storage disabled — the switch still works this visit */
    }
  }

  function init() {
    var container = document.getElementById('lang-switch');
    translate(initialLang());

    if (!container) {
      return;
    }
    container.addEventListener('click', function (e) {
      var button = e.target.closest('.lang-switch__btn');
      if (button) {
        setLang(button.getAttribute('data-lang'));
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
