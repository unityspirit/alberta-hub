/**
 * ALBERTA SHIRANI × GLOBAL SPIRIT GROUP — PERSONAL BUSINESS HUB ENGINE
 * Full Interactive Engine with Auth Gate, Pitch Deck, Brand Book, Kanban, Calculator & Notes
 */
'use strict';

class AlbertaHubEngine {
  constructor() {
    this.currentUser = null;
    this.currentSlide = 0;
    this.totalSlides = 6;

    this.kanbanViewMode = localStorage.getItem('alberta_kanban_mode_v2') || 'tiers';
    this.kanbanFilter = 'all';

    // Default Pre-populated Tasks (with 4-tier categorization: today / main / intermediate / parallel)
    this.defaultTasks = [
      { id: 't_today_50', title: '#50 Запрос от 12.11: Выявить главный триггер женщин 30–50 лет (анализ соцсетей и алгоритмов) + мини-продукт без возражений', status: 'in-progress', tier: 'today', owner: 'gsg', tag: 'Сегодня · Триггер & Продукт' },
      { id: 't_today_49', title: '#49 Запрос от 12.11: Обновить нишу клуба с «гармонизации дома» на трансформацию женщин 30–50 (опора, уверенность, стиль, доход, отношения, тревожность, свои желания)', status: 'done', tier: 'today', owner: 'alberta', tag: 'Сегодня · Позиционирование' },
      { id: 't_today_48', title: '#48 Запрос от 12.11: Архитектура Telegram-бота (@lermontovplusbot) и воронки подписки на 1 000 000 ₽', status: 'in-progress', tier: 'today', owner: 'gsg', tag: 'Сегодня · Бот 1M ₽' },
      { id: 't_today_47', title: '#47 Запрос от 12.11: Быстрые клиенты и идеи моментальной монетизации для Альберты', status: 'in-progress', tier: 'today', owner: 'gsg', tag: 'Сегодня · Быстрые деньги' },
      { id: 't6', title: 'Провести первые 5 диагностик по авторской методике «Архитектура Опоры» (женщины 30–50 лет)', status: 'todo', tier: 'main', owner: 'alberta', tag: 'Главная · Альберта' },
      { id: 't7', title: 'Подготовить запуск Membership-Клуба «Архитектура Опоры» ($50/мес · 100 резидентов)', status: 'todo', tier: 'main', owner: 'gsg', tag: 'Главная · Масштаб' },
      { id: 't3', title: 'Внедрить ключи Prodamus/ЮKassa для продажи трипваера и мини-продукта', status: 'todo', tier: 'intermediate', owner: 'gsg', tag: 'Промежуточная · Финансы' },
      { id: 't1', title: 'Утвердить чистовые видео из Google VEO 3.1 по 7 готовым сценариям + 30 сек интро', status: 'in-progress', tier: 'intermediate', owner: 'alberta', tag: 'Промежуточная · Контент' },
      { id: 't2', title: 'Активировать личный бот @lermontovplusbot (нажать /start для привязки Chat ID)', status: 'in-progress', tier: 'intermediate', owner: 'alberta', tag: 'Промежуточная · Бот' },
      { id: 't4', title: 'Запустить Международную Академию & Штаб Экспансии 5-в-1 (alberta-hub/international)', status: 'done', tier: 'parallel', owner: 'gsg', tag: 'Параллельная · Хаб' },
      { id: 't5', title: 'Интегрировать Canvas 2D / WebGL скролл-анимацию на 900 кадров WebP & AI-аватар', status: 'done', tier: 'parallel', owner: 'gsg', tag: 'Параллельная · Разработка' }
    ];

    // Default Smart Notes & VEO 3.1 Prompts
    this.defaultNotes = [
      {
        id: 'n1',
        cat: 'veo',
        title: 'День 1: Аудит окружения (Границы и Токсичные активы)',
        prompt: `Vertical video. Camera: Slow push-in tracking shot. Action: An elegant woman in her late 30s sits alone at a minimalist, dimly lit cafe table. She looks at her smartphone screen with a slightly drained expression, then deliberately turns the phone face down and looks away, taking a slow, deep breath. Subject: Woman wearing a dark graphite silk blouse, subtle makeup, hair neatly tied back. Tone: Cinematic, moody, Solid Aesthetic, deep grey and muted blue tones, soft diffused lighting, 4k, hyper-realistic, slow motion, premium feel.`,
        hook: `Слайд 1: Пора признать: некоторые подруги обходятся вашей психике дороже, чем ипотека.\nСлайд 2: Вы думаете, это дружба, но на самом деле... вы просто обслуживаете чужие эмоции.\nСлайд 3: 3 признака Токсичного Актива:\n1. Вы боитесь её звонков, потому что дальше будет 40 минут радио "Всё плохо".\n2. Ваши проблемы всегда обесцениваются.\n3. После встречи вам хочется спать, а не жить.`,
        caption: `Мы часто путаем привязанность за выслугу лет с качеством отношений. Помните: вы не контейнер для чужих эмоций. Донорство в дружбе — это не маркер вашей святости, это пробоина в вашей системе энергии. Сохраняйте этот пост и заглядывайте в него, когда чувствуете вину за то, что не берете трубку. Присоединиться к кругу здоровых отношений можно в моем закрытом клубе — пишите слово ОКРУЖЕНИЕ в Директ.`
      },
      {
        id: 'n2',
        cat: 'veo',
        title: 'День 2: Право на темную сторону (Усталость и снятие масок)',
        prompt: `Vertical video. Camera: Close-up, profile angle, static shot with subtle handheld movement. Action: A woman gently rests her forehead against a large window overlooking a blurred, rainy city at night. Her eyes are closed, showing raw emotional exhaustion. Subject: Sophisticated 40-year-old woman, natural textures, removing a heavy wool coat. Tone: Cinematic, melancholic but beautiful, dark aesthetic, low-key lighting, rain streaks on glass, deep shadows, authentic, high-end dramatic look.`,
        hook: `- Худшее, что вы можете сделать...\n- ...пытаться быть «хорошей» во время кризиса.\n- Пора снять маску.\n- Разрешите себе просто устать.`,
        caption: `Вы не робот. Ваша суперсила "я со всем справлюсь" имеет свой лимит, и это нормально. Идти против культа "токсичного позитива" — значит иметь смелость признать свою слабость. Отправьте это видео той самой подруге, которой сегодня нужно разрешение просто выдохнуть.`
      },
      {
        id: 'n3',
        cat: 'veo',
        title: 'День 3: Энергетическая бухгалтерия (Анализ и Фокус)',
        prompt: `Vertical video. Camera: Macro close-up, extreme shallow depth of field, slow pan. Action: Elegant hands writing slowly with a premium fountain pen in a thick, dark leather journal. A cup of dark coffee sits out of focus in the background. Subject: Hands of a woman, minimalistic manicured nails, silver ring. Tone: Focused, calm, intellectual, Solid Aesthetic, warm desk lamp lighting against a dark background, rich textures, 4k macro cinematography.`,
        hook: `Почему ваш идеальный отдых вас больше не восстанавливает?\nПерестаньте копить усталость — начните вести энергетическую бухгалтерию.`,
        caption: `Если вы провели выходные на диване, но в понедельник чувствуете себя разбитой — дело не в теле, дело в ментальных утечках. Каждое незакрытое решение жрёт оперативную память мозга. В закрытом клубе мы разбираем пошаговый аудит утечек энергии.`
      },
      {
        id: 'n4',
        cat: 'veo',
        title: 'День 4: Невидимый труд (Эмоциональное обслуживание)',
        prompt: `Vertical video. Camera: Medium shot, slow lateral tracking. Action: A woman is meticulously arranging items on a sleek, dark dining table. Her movements are graceful but repetitive, indicating routine. She pauses for a second, gazing into the distance, before continuing. Subject: Graceful woman in a simple dark tailored dress. Tone: Quiet, slightly tense but visually stunning, minimalist interior, muted cool tones, soft natural light coming from a single source, cinematic shadow play.`,
        hook: `Эмоциональное обслуживание: работа, за которую женщинам никогда не платят.\nСглаживать углы, угадывать настроение других, быть буфером чужих обид.`,
        caption: `Сколько процентов своего рабочего дня вы тратите на управление чужими реакциями? Это незаметный налог на вашу психику. Пора вернуть этот ресурс себе.`
      },
      {
        id: 'n5',
        cat: 'veo',
        title: 'День 5: Миф о самодостаточности (Одиночество на вершине)',
        prompt: `Vertical video. Camera: Wide shot, slow zoom out. Action: A solitary woman walks slowly away from the camera down a grand, dimly lit, brutalist architectural hallway. Her silhouette is sharp against a single ray of light. Subject: Confident but isolated female figure in a sharp dark suit. Tone: Powerful, solitary, architectural, high contrast, deep shadows, minimalist, premium corporate aesthetic, visually imposing.`,
        hook: `Самодостаточность — это травма, которую мы замаскировали под успех.\nКогда «я всё сама» превращается в добровольную изоляцию.`,
        caption: `Сильные лидеры часто путают автономность с невозможностью опереться на других. Настоящая внутренняя опора не требует доказывать миру свою неуязвимость.`
      },
      {
        id: 'n6',
        cat: 'checklist',
        title: 'Чеклист экспресс-диагностики «Архитектура Опоры» (25 мин)',
        prompt: `1. Точка А: текущий бизнес, оборот, количество решений в день, скрытый уровень стресса.\n2. Где утечка: сотрудники, партнеры, токсичные друзья, перфекционизм.\n3. Несущая конструкция: на что сейчас опирается эксперт (на силу воли или на систему).\n4. Оффер: предложение войти в Клуб ($50/мес) или персональная работа (50 000 ₽).`,
        hook: `Вопросы, которые за 15 минут вскрывают скрытые точки слива энергии любого фаундера.`,
        caption: `Инструкция для Альберты при проведении живых квалификационных звонков с лидами из Telegram-бота.`
      }
    ];

    // Default Releases
    this.defaultReleases = [
      {
        id: 'rel1',
        title: 'Релиз 1: Запуск сайта закрытого клуба (alberta-club-site)',
        tag: 'Завершено 100%',
        progress: 100,
        items: [
          { text: 'Разработка архитектуры Vite + Vanilla JS в эстетике Kinfolk', done: true },
          { text: 'Bento Grid верстка с интерактивными карточками преимуществ', done: true },
          { text: 'Интеграция виджета консьержа RuFlow и формы захвата контактов', done: true },
          { text: 'Адаптивная верстка под iPhone и Android', done: true }
        ]
      },
      {
        id: 'rel2',
        title: 'Релиз 2: Воронка Трипваера «Точка сборки — 5 дней» (490 ₽)',
        tag: 'Текущий спринт',
        progress: 90,
        items: [
          { text: 'Лендинг трипваера с таймером специальной цены 490 ₽', done: true },
          { text: 'Структура 5-дневного аудио-интенсива по 10 минут', done: true },
          { text: 'Подключение платёжного шлюза Prodamus / ЮKassa', done: false },
          { text: 'Автоматическая выдача материалов после оплаты', done: false }
        ]
      },
      {
        id: 'rel3',
        title: 'Релиз 3: Кинематографичный трафик (7 сценариев VEO 3.1)',
        tag: 'В работе',
        progress: 65,
        items: [
          { text: 'Пакет из 7 промптов для Google VEO 3.1 по фреймворку C.A.S.T.', done: true },
          { text: 'Хуки, сценарии и готовые тексты для постов', done: true },
          { text: 'Генерация чистовых фоновых видео в высоком разрешении', done: false },
          { text: 'Монтаж, наложение субтитров и запуск виральной воронки', done: false }
        ]
      },
      {
        id: 'rel4',
        title: 'Релиз 4: Membership-Клуб «Искусство Выбирать Себя» ($50/мес)',
        tag: 'Масштабирование',
        progress: 35,
        items: [
          { text: 'Продуктовая концепция и сетка регулярных эфиров', done: true },
          { text: 'Закрытый Telegram-канал и комьюнити-чат', done: true },
          { text: 'Подключение рекуррентной подписки с ежемесячным автосписанием', done: false },
          { text: 'Набор первых 100 резидентов клуба (~500k/мес)', done: false }
        ]
      }
    ];

    // Default Asset Links
    this.defaultAssets = [
      { cat: 'hub', title: 'Персональный Бизнес-Хаб & Бренд-Бук (Live GitHub Pages)', url: 'https://unityspirit.github.io/alberta-hub/' },
      { cat: 'hub-5in1', title: '🌌 Международная Академия & Штаб Экспансии 5-в-1', url: 'https://unityspirit.github.io/alberta-hub/international/' },
      { cat: 'bot', title: '🤖 Личный Telegram-Бот Альберты (@lermontovplusbot)', url: 'https://t.me/lermontovplusbot?start=aliashirani' },
      { cat: 'office', title: 'Виртуальный Офис Global Spirit Group (Remote Control)', url: 'https://unityspirit.github.io/remote-agents-control/' },
      { cat: 'tg', title: 'Личный контакт Alberta в Telegram', url: 'https://t.me/Alberta' },
      { cat: 'repo', title: 'GitHub Репозиторий unityspirit/alberta-hub', url: 'https://github.com/unityspirit/alberta-hub' }
    ];

    // Load from LocalStorage (with v2 4-tier migration)
    const savedV2 = JSON.parse(localStorage.getItem('alberta_hub_tasks_v2') || 'null');
    if (Array.isArray(savedV2) && savedV2.length > 0) {
      this.tasks = savedV2;
    } else {
      const legacy = JSON.parse(localStorage.getItem('alberta_hub_tasks') || 'null');
      if (Array.isArray(legacy) && legacy.length > 0) {
        const todayIds = new Set(this.defaultTasks.filter(x => x.tier === 'today').map(x => x.id));
        const merged = this.defaultTasks.filter(x => todayIds.has(x.id)).concat(
          legacy.map(lt => ({ ...lt, tier: lt.tier || (lt.status === 'done' ? 'parallel' : 'intermediate') }))
        );
        this.tasks = merged;
      } else {
        this.tasks = this.defaultTasks;
      }
    }
    this.notes = JSON.parse(localStorage.getItem('alberta_hub_notes')) || this.defaultNotes;
    this.releases = JSON.parse(localStorage.getItem('alberta_hub_releases')) || this.defaultReleases;
    this.assets = this.defaultAssets;

    this.init();
  }

  init() {
    this.checkSavedSession();
    this.renderKanban();
    this.renderNotes();
    this.renderReleases();
    this.renderAssets();
    this.updateCalculator();
    this.initKeyboardNav();
  }

  /* ========================================================
     AUTH GATE & USER SESSIONS
     ======================================================== */
  checkSavedSession() {
    // Check URL parameters for ?guest=1
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('guest') === '1') {
      this.loginAsGuest();
      return;
    }

    const saved = localStorage.getItem('alberta_hub_user');
    if (saved) {
      try {
        this.currentUser = JSON.parse(saved);
        this.unlockOffice();
      } catch (e) {
        this.lockOffice();
      }
    } else {
      this.lockOffice();
    }
  }

  lockOffice() {
    const overlay = document.getElementById('authGateOverlay');
    if (overlay) overlay.classList.remove('hidden');
  }

  unlockOffice() {
    const overlay = document.getElementById('authGateOverlay');
    if (overlay) overlay.classList.add('hidden');
    this.updateHeaderUserInfo();
  }

  switchAuthGateTab(tab) {
    const btnLogin = document.getElementById('authTabBtnLogin');
    const btnReg = document.getElementById('authTabBtnReg');
    const panelLogin = document.getElementById('authPanelLogin');
    const panelReg = document.getElementById('authPanelReg');
    const alertBox = document.getElementById('authAlert');

    if (alertBox) alertBox.className = 'auth-alert';

    if (tab === 'login') {
      if (btnLogin) btnLogin.classList.add('active');
      if (btnReg) btnReg.classList.remove('active');
      if (panelLogin) panelLogin.style.display = 'flex';
      if (panelReg) panelReg.style.display = 'none';
    } else {
      if (btnLogin) btnLogin.classList.remove('active');
      if (btnReg) btnReg.classList.add('active');
      if (panelLogin) panelLogin.style.display = 'none';
      if (panelReg) panelReg.style.display = 'flex';
    }
  }

  submitLogin(e) {
    if (e) e.preventDefault();
    const login = (document.getElementById('authLoginInput')?.value || '').trim().toLowerCase();
    const pass = (document.getElementById('authPassInput')?.value || '').trim();
    const alertBox = document.getElementById('authAlert');

    if (!login || !pass) {
      this.showAuthAlert('Пожалуйста, введите логин и пароль.', 'error');
      return;
    }

    if (login === 'aliashirani' && (pass === 'Alberta2026!' || pass === 'alberta2026' || pass === 'alberta')) {
      this.currentUser = {
        name: 'Alberta Shirani',
        login: 'aliashirani',
        role: 'expert',
        roleTitle: '👑 Основательница & Креативный Директор',
        status: 'approved'
      };
      this.saveAndUnlock();
    } else if (login === 'admin' && (pass === 'global2026' || pass === 'admin')) {
      this.currentUser = {
        name: 'Global Spirit Group',
        login: 'admin',
        role: 'admin',
        roleTitle: '⚡ Продюсерский Партнёр',
        status: 'approved'
      };
      this.saveAndUnlock();
    } else {
      this.showAuthAlert('Неверный логин или пароль. Попробуйте aliashirani / Alberta2026!', 'error');
    }
  }

  submitRegister(e) {
    if (e) e.preventDefault();
    const name = (document.getElementById('regNameInput')?.value || '').trim();
    const login = (document.getElementById('regLoginInput')?.value || '').trim().toLowerCase();
    const pass = (document.getElementById('regPassInput')?.value || '').trim();

    if (!name || !login || !pass) {
      this.showAuthAlert('Заполните все поля регистрации.', 'error');
      return;
    }

    this.currentUser = {
      name: name,
      login: login,
      role: 'member',
      roleTitle: '👤 Участник Клуба',
      status: 'approved'
    };
    this.saveAndUnlock();
  }

  loginAsGuest() {
    this.currentUser = {
      name: 'Гость (Демо-доступ)',
      login: 'guest',
      role: 'guest',
      roleTitle: '👁️ Демо-просмотр',
      status: 'approved'
    };
    this.saveAndUnlock();
  }

  fillPreset(login, pass) {
    const lInput = document.getElementById('authLoginInput');
    const pInput = document.getElementById('authPassInput');
    if (lInput) lInput.value = login;
    if (pInput) pInput.value = pass;
    this.submitLogin();
  }

  saveAndUnlock() {
    localStorage.setItem('alberta_hub_user', JSON.stringify(this.currentUser));
    this.showToast(`Добро пожаловать, ${this.currentUser.name}!`);
    this.unlockOffice();
  }

  logout() {
    localStorage.removeItem('alberta_hub_user');
    this.currentUser = null;
    this.lockOffice();
    this.showToast('Вы вышли из бизнес-хаба.');
  }

  showAuthAlert(msg, type) {
    const alertBox = document.getElementById('authAlert');
    if (alertBox) {
      alertBox.textContent = msg;
      alertBox.className = `auth-alert ${type}`;
    }
  }

  updateHeaderUserInfo() {
    const nameEl = document.getElementById('headerUserName');
    const roleEl = document.getElementById('headerUserRole');
    if (nameEl && this.currentUser) nameEl.textContent = this.currentUser.name;
    if (roleEl && this.currentUser) roleEl.textContent = this.currentUser.roleTitle;
  }

  /* ========================================================
     NAVIGATION TABS
     ======================================================== */
  switchTab(tabId) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));

    const panel = document.getElementById(`tab-${tabId}`);
    const btn = document.getElementById(`nav-btn-${tabId}`);

    if (panel) panel.classList.add('active');
    if (btn) btn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ========================================================
     PITCH DECK SLIDER (MODULE 1)
     ======================================================== */
  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.goToSlide(this.currentSlide + 1);
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  goToSlide(idx) {
    this.currentSlide = idx;
    document.querySelectorAll('.deck-slide').forEach((s, i) => {
      s.classList.toggle('active', i === idx);
    });
    document.querySelectorAll('.slide-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });

    const counter = document.getElementById('deckSlideCounter');
    if (counter) counter.textContent = `Слайд 0${idx + 1} / 0${this.totalSlides}`;

    const prevBtn = document.getElementById('deckBtnPrev');
    const nextBtn = document.getElementById('deckBtnNext');
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = idx === this.totalSlides - 1;
  }

  initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      const activeTab = document.querySelector('.tab-panel.active');
      if (activeTab && activeTab.id === 'tab-partnership') {
        if (e.key === 'ArrowRight') this.nextSlide();
        if (e.key === 'ArrowLeft') this.prevSlide();
      }
    });
  }

  /* ========================================================
     INCOME CALCULATOR (MODULE 3)
     ======================================================== */
  updateCalculator() {
    const reach = parseInt(document.getElementById('calcRangeReach')?.value || '15000', 10);
    const tripwire = parseInt(document.getElementById('calcRangeTripwire')?.value || '200', 10);
    const club = parseInt(document.getElementById('calcRangeClub')?.value || '120', 10);
    const vip = parseInt(document.getElementById('calcRangeVip')?.value || '6', 10);

    // Display labels
    const reachVal = document.getElementById('calcValReach');
    const tripVal = document.getElementById('calcValTripwire');
    const clubVal = document.getElementById('calcValClub');
    const vipVal = document.getElementById('calcValVip');

    if (reachVal) reachVal.textContent = reach.toLocaleString('ru-RU') + ' чел';
    if (tripVal) tripVal.textContent = tripwire.toLocaleString('ru-RU') + ' прод.';
    if (clubVal) clubVal.textContent = club.toLocaleString('ru-RU') + ' уч.';
    if (vipVal) vipVal.textContent = vip.toLocaleString('ru-RU') + ' чел';

    // Revenue calculations:
    // Tripwire = 490 RUB
    // Club Membership = 4 900 RUB/mo ($50)
    // VIP Architecture = 50 000 RUB
    const tripRev = tripwire * 490;
    const clubRev = club * 4900;
    const vipRev = vip * 50000;
    const totalRev = tripRev + clubRev + vipRev;

    // Split: Expert 60%, Global Spirit Group 40% (minus tech budget)
    const expertShare = Math.round(totalRev * 0.6);
    const partnerShare = totalRev - expertShare;
    const annualLtv = (club * 4900 * 10) + (vip * 50000 * 2);

    const totalEl = document.getElementById('calcTotalRevenue');
    const expertEl = document.getElementById('calcExpertShare');
    const partnerEl = document.getElementById('calcPartnerShare');
    const ltvEl = document.getElementById('calcAnnualLtv');

    if (totalEl) totalEl.textContent = totalRev.toLocaleString('ru-RU') + ' ₽';
    if (expertEl) expertEl.textContent = expertShare.toLocaleString('ru-RU') + ' ₽';
    if (partnerEl) partnerEl.textContent = partnerShare.toLocaleString('ru-RU') + ' ₽';
    if (ltvEl) ltvEl.textContent = annualLtv.toLocaleString('ru-RU') + ' ₽';
  }

  /* ========================================================
     KANBAN & 4-TIER TASK BOARD (MODULE 5)
     ======================================================== */
  getTaskTier(task) {
    if (task && ['today', 'main', 'intermediate', 'parallel'].includes(task.tier)) return task.tier;
    const t = String((task && (task.title + ' ' + task.tag)) || '').toLowerCase();
    if (/сегодн|#47|#48|#49|#50|срочно/.test(t)) return 'today';
    if (/клуб|главн|диагностик|масштаб|1 000 000|продукт/.test(t)) return 'main';
    if (/параллель|аватар|reels|авто|фонов|хаб|900/.test(t)) return 'parallel';
    return 'intermediate';
  }

  getTierLabel(tier) {
    const map = {
      today: '🔥 Сегодня',
      main: '🎯 Главная',
      intermediate: '🪜 Промежуточная',
      parallel: '⚡ Параллельная'
    };
    return map[tier] || '🪜 Промежуточная';
  }

  setKanbanViewMode(mode) {
    this.kanbanViewMode = mode === 'status' ? 'status' : 'tiers';
    localStorage.setItem('alberta_kanban_mode_v2', this.kanbanViewMode);
    const tierBoard = document.getElementById('kanbanTierBoard');
    const statusBoard = document.getElementById('kanbanStatusBoard');
    const bT = document.getElementById('btnModeTiers');
    const bS = document.getElementById('btnModeStatus');
    if (tierBoard) tierBoard.style.display = this.kanbanViewMode === 'tiers' ? 'grid' : 'none';
    if (statusBoard) statusBoard.style.display = this.kanbanViewMode === 'status' ? 'grid' : 'none';
    if (bT) bT.classList.toggle('active', this.kanbanViewMode === 'tiers');
    if (bS) bS.classList.toggle('active', this.kanbanViewMode === 'status');
    this.renderKanban(this.kanbanFilter || 'all');
  }

  cycleTaskTier(id) {
    const order = ['today', 'main', 'intermediate', 'parallel'];
    const task = this.tasks.find(t => t.id === id);
    if (!task) return;
    const cur = this.getTaskTier(task);
    task.tier = order[(order.indexOf(cur) + 1) % order.length];
    this.saveTasks();
    this.renderKanban(this.kanbanFilter || 'all');
    this.showToast('Перенесено в: ' + this.getTierLabel(task.tier));
  }

  renderKanban(filterTag = this.kanbanFilter || 'all') {
    this.kanbanFilter = filterTag;
    const tierBoard = document.getElementById('kanbanTierBoard');
    const statusBoard = document.getElementById('kanbanStatusBoard');
    if (tierBoard && statusBoard) {
      tierBoard.style.display = this.kanbanViewMode === 'tiers' ? 'grid' : 'none';
      statusBoard.style.display = this.kanbanViewMode === 'status' ? 'grid' : 'none';
      const bT = document.getElementById('btnModeTiers');
      const bS = document.getElementById('btnModeStatus');
      if (bT) bT.classList.toggle('active', this.kanbanViewMode === 'tiers');
      if (bS) bS.classList.toggle('active', this.kanbanViewMode === 'status');
    }

    const colTodo = document.getElementById('kanbanColTodo');
    const colProg = document.getElementById('kanbanColProg');
    const colDone = document.getElementById('kanbanColDone');
    const tToday = document.getElementById('tierColToday');
    const tMain = document.getElementById('tierColMain');
    const tInter = document.getElementById('tierColInter');
    const tParallel = document.getElementById('tierColParallel');

    if (colTodo) colTodo.innerHTML = '';
    if (colProg) colProg.innerHTML = '';
    if (colDone) colDone.innerHTML = '';
    if (tToday) tToday.innerHTML = '';
    if (tMain) tMain.innerHTML = '';
    if (tInter) tInter.innerHTML = '';
    if (tParallel) tParallel.innerHTML = '';

    const counts = { all: this.tasks.length, today: 0, main: 0, intermediate: 0, parallel: 0 };
    this.tasks.forEach(t => { counts[this.getTaskTier(t)]++; });
    const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setTxt('kCntAll', counts.all);
    setTxt('kCntToday', counts.today);
    setTxt('kCntMain', counts.main);
    setTxt('kCntInter', counts.intermediate);
    setTxt('kCntParallel', counts.parallel);

    let todoCount = 0, progCount = 0, doneCount = 0;
    let cToday = 0, cMain = 0, cInter = 0, cParallel = 0;

    const filtered = this.tasks.filter(t => {
      if (filterTag === 'all') return true;
      if (['today', 'main', 'intermediate', 'parallel'].includes(filterTag)) return this.getTaskTier(t) === filterTag;
      if (filterTag === 'alberta') return t.owner === 'alberta';
      if (filterTag === 'gsg') return t.owner === 'gsg';
      return (t.tag || '').toLowerCase().includes(filterTag.toLowerCase());
    });

    const makeCard = (task) => {
      const tier = this.getTaskTier(task);
      const stLabel = task.status === 'done' ? '✅' : (task.status === 'in-progress' ? '🛠' : '⏳');
      const card = document.createElement('div');
      card.className = 'kanban-card';
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-bottom:6px; flex-wrap:wrap;">
          <span class="kanban-card-tag">${stLabel} ${task.tag}</span>
          <button class="kanban-card-btn" onclick="HUB.cycleTaskTier('${task.id}')" title="Сменить группу задачи" style="width:auto; padding:2px 8px; font-size:0.7rem;">${this.getTierLabel(tier)} ↻</button>
        </div>
        <div class="kanban-card-title">${task.title}</div>
        <div class="kanban-card-footer">
          <span>${task.owner === 'alberta' ? '👤 Альберта' : '⚡ Global Spirit'}</span>
          <div class="kanban-card-actions">
            ${task.status !== 'todo' ? `<button class="kanban-card-btn" onclick="HUB.moveTask('${task.id}', 'prev')" title="Назад">←</button>` : ''}
            ${task.status !== 'done' ? `<button class="kanban-card-btn" onclick="HUB.moveTask('${task.id}', 'next')" title="Вперед">→</button>` : ''}
            <button class="kanban-card-btn" onclick="HUB.deleteTask('${task.id}')" title="Удалить">✕</button>
          </div>
        </div>
      `;
      return card;
    };

    filtered.forEach(task => {
      const tier = this.getTaskTier(task);
      if (tier === 'today' && tToday) { tToday.appendChild(makeCard(task)); cToday++; }
      else if (tier === 'main' && tMain) { tMain.appendChild(makeCard(task)); cMain++; }
      else if (tier === 'intermediate' && tInter) { tInter.appendChild(makeCard(task)); cInter++; }
      else if (tParallel) { tParallel.appendChild(makeCard(task)); cParallel++; }

      if (task.status === 'todo' && colTodo) { colTodo.appendChild(makeCard(task)); todoCount++; }
      else if (task.status === 'in-progress' && colProg) { colProg.appendChild(makeCard(task)); progCount++; }
      else if (task.status === 'done' && colDone) { colDone.appendChild(makeCard(task)); doneCount++; }
    });

    setTxt('countTodo', todoCount);
    setTxt('countProg', progCount);
    setTxt('countDone', doneCount);
    setTxt('tierCntToday', cToday);
    setTxt('tierCntMain', cMain);
    setTxt('tierCntInter', cInter);
    setTxt('tierCntParallel', cParallel);
  }

  moveTask(id, dir) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) return;

    if (dir === 'next') {
      if (task.status === 'todo') task.status = 'in-progress';
      else if (task.status === 'in-progress') task.status = 'done';
    } else {
      if (task.status === 'done') task.status = 'in-progress';
      else if (task.status === 'in-progress') task.status = 'todo';
    }

    this.saveTasks();
    this.renderKanban(this.kanbanFilter || 'all');
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
    this.renderKanban(this.kanbanFilter || 'all');
    this.showToast('Задача удалена.');
  }

  addNewTask() {
    const title = prompt('Введите название новой задачи:');
    if (!title || !title.trim()) return;
    const tierAns = (prompt('Категория: 1 — Сегодня, 2 — Главная, 3 — Промежуточная, 4 — Параллельная:', '1') || '1').trim();
    const tierMap = { '1': 'today', '2': 'main', '3': 'intermediate', '4': 'parallel' };
    const tier = tierMap[tierAns] || 'today';
    const isAlberta = confirm('Назначить задачу Альберте? (ОК — Альберта, Отмена — Global Spirit)');
    const newTask = {
      id: 't_' + Date.now(),
      title: title.trim(),
      status: 'todo',
      tier: tier,
      owner: isAlberta ? 'alberta' : 'gsg',
      tag: this.getTierLabel(tier).replace(/^[^\s]+\s/, '') + ' · ' + (isAlberta ? 'Альберта' : 'Global Spirit')
    };

    this.tasks.unshift(newTask);
    this.saveTasks();
    this.renderKanban(this.kanbanFilter || 'all');
    this.showToast('Новая задача добавлена!');
  }

  saveTasks() {
    localStorage.setItem('alberta_hub_tasks_v2', JSON.stringify(this.tasks));
    localStorage.setItem('alberta_hub_tasks', JSON.stringify(this.tasks));
  }

  filterKanban(filter, btn) {
    document.querySelectorAll('.kanban-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    this.renderKanban(filter);
  }

  /* ========================================================
     SMART NOTES & PROMPTS (MODULE 6)
     ======================================================== */
  renderNotes() {
    const container = document.getElementById('notesGrid');
    if (!container) return;

    container.innerHTML = '';
    this.notes.forEach(note => {
      const card = document.createElement('div');
      card.className = 'note-card';
      card.innerHTML = `
        <div class="note-header">
          <span class="note-tag">${note.cat.toUpperCase()}</span>
          <span style="font-size:0.75rem; color:var(--text-dim); font-family:var(--font-mono);">ID: ${note.id}</span>
        </div>
        <h3 class="note-title">${note.title}</h3>
        <div class="note-prompt-box"><b>[VEO 3.1 PROMPT]</b>\n${note.prompt}\n\n<b>[ХУК / СЛАЙДЫ]</b>\n${note.hook}</div>
        <div class="note-footer">
          <button class="btn-copy" onclick="HUB.copyText('${this.escapeHtml(note.prompt)}')">
            <span>📋 Копировать VEO Промпт</span>
          </button>
          <button class="btn-copy" onclick="HUB.copyText('${this.escapeHtml(note.caption)}')">
            <span>✍️ Копировать Текст Поста</span>
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  /* ========================================================
     RELEASES & ASSETS
     ======================================================== */
  renderReleases() {
    const container = document.getElementById('releasesContainer');
    if (!container) return;

    container.innerHTML = '';
    this.releases.forEach(rel => {
      const card = document.createElement('div');
      card.className = 'release-card';
      card.innerHTML = `
        <div class="release-header">
          <div class="release-title">${rel.title} <span class="slide-badge" style="margin-left:8px;">${rel.tag}</span></div>
          <div class="release-pct">${rel.progress}%</div>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${rel.progress}%;"></div>
        </div>
        <ul class="release-items">
          ${rel.items.map(it => `
            <li class="release-item ${it.done ? 'done' : ''}">
              <span>${it.done ? '✓' : '○'}</span>
              <span>${it.text}</span>
            </li>
          `).join('')}
        </ul>
      `;
      container.appendChild(card);
    });
  }

  renderAssets() {
    const container = document.getElementById('assetsGrid');
    if (!container) return;

    container.innerHTML = '';
    this.assets.forEach(asset => {
      const card = document.createElement('a');
      card.className = 'asset-card';
      card.href = asset.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.innerHTML = `
        <div>
          <div class="asset-cat">${asset.cat}</div>
          <div class="asset-title">${asset.title}</div>
        </div>
        <div class="asset-url">${asset.url} →</div>
      `;
      container.appendChild(card);
    });
  }

  /* ========================================================
     UTILITIES & TOASTS
     ======================================================== */
  copyText(text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      this.showToast('Скопировано в буфер обмена!');
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      this.showToast('Скопировано в буфер обмена!');
    });
  }

  copyColor(hex) {
    this.copyText(hex);
  }

  showToast(msg) {
    const toast = document.getElementById('hubToast');
    const textEl = document.getElementById('hubToastText');
    if (toast && textEl) {
      textEl.textContent = msg;
      toast.classList.add('visible');
      setTimeout(() => {
        toast.classList.remove('visible');
      }, 2800);
    }
  }

  toggleTheme() {
    document.documentElement.classList.toggle('light-theme');
    const isLight = document.documentElement.classList.contains('light-theme');
    this.showToast(isLight ? 'Включена светлая тема (Editorial Sand)' : 'Включена темная тема (Kinfolk Obsidian)');
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, '\\n');
  }
}

// Global Instance
window.HUB = new AlbertaHubEngine();
