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

    // Default Pre-populated Tasks
    this.defaultTasks = [
      { id: 't1', title: 'Утвердить чистовые видео из Google VEO 3.1 по 7 готовым сценариям', status: 'in-progress', owner: 'alberta', tag: 'Альберта' },
      { id: 't2', title: 'Подключить Telegram-бота для лид-магнита и квалификации заявок', status: 'in-progress', owner: 'gsg', tag: 'Автоматизация' },
      { id: 't3', title: 'Внедрить ключи Prodamus/ЮKassa для продажи трипваера 490 ₽', status: 'todo', owner: 'gsg', tag: 'Финансы' },
      { id: 't4', title: 'Запустить сайт закрытого клуба alberta-club-site с виджетом RuFlow', status: 'done', owner: 'gsg', tag: 'Global Spirit' },
      { id: 't5', title: 'Интегрировать Canvas 2D / WebGL скролл-анимацию на 900 кадров WebP', status: 'done', owner: 'gsg', tag: 'Разработка' },
      { id: 't6', title: 'Провести первые 5 диагностик по авторской методике «Архитектура Опоры»', status: 'todo', owner: 'alberta', tag: 'Альберта' },
      { id: 't7', title: 'Подготовить материалы для запуска Membership-Клуба $50/мес (Q2)', status: 'todo', owner: 'gsg', tag: 'Масштаб' }
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
      { cat: 'office', title: 'Виртуальный Офис Global Spirit Group (Remote Control)', url: 'https://unityspirit.github.io/remote-agents-control/' },
      { cat: 'site', title: 'Лендинг Клуба Alberta Shirani (Локальный сервер / Vite)', url: 'http://localhost:5174/' },
      { cat: 'tripwire', title: 'Воронка Трипваера «Точка сборки — 5 дней» (490 ₽)', url: 'file:///C:/Users/Vlaslav/OneDrive/Desktop/delaem%20prezervativ/alberta_tripwire/index.html' },
      { cat: 'tg', title: 'Личный контакт Alberta в Telegram', url: 'https://t.me/Alberta' },
      { cat: 'repo', title: 'GitHub Репозиторий unityspirit/alberta-hub', url: 'https://github.com/unityspirit/alberta-hub' },
      { cat: 'agents', title: 'ИИ-агенты RuFlow (Консьерж, Инста-директ, Удержание)', url: 'file:///C:/Users/Vlaslav/OneDrive/Desktop/delaem%20prezervativ/Alberta_Workspace/alberta-agents/' },
      { cat: 'prompts', title: 'База промптов Google VEO 3.1 (7-дневный спринт)', url: 'file:///C:/Users/Vlaslav/OneDrive/Desktop/delaem%20prezervativ/Alberta_Workspace/alberta_7_day_veo_prompts_and_content.md' }
    ];

    // Load from LocalStorage
    this.tasks = JSON.parse(localStorage.getItem('alberta_hub_tasks')) || this.defaultTasks;
    this.notes = JSON.parse(localStorage.getItem('alberta_hub_notes')) || this.defaultNotes;
    this.releases = JSON.parse(localStorage.getItem('alberta_hub_releases')) || this.defaultReleases;
    this.assets = JSON.parse(localStorage.getItem('alberta_hub_assets')) || this.defaultAssets;

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
     KANBAN BOARD (MODULE 5)
     ======================================================== */
  renderKanban(filterTag = 'all') {
    const colTodo = document.getElementById('kanbanColTodo');
    const colProg = document.getElementById('kanbanColProg');
    const colDone = document.getElementById('kanbanColDone');

    if (!colTodo || !colProg || !colDone) return;

    colTodo.innerHTML = '';
    colProg.innerHTML = '';
    colDone.innerHTML = '';

    let todoCount = 0, progCount = 0, doneCount = 0;

    const filtered = this.tasks.filter(t => {
      if (filterTag === 'all') return true;
      if (filterTag === 'alberta') return t.owner === 'alberta';
      if (filterTag === 'gsg') return t.owner === 'gsg';
      return t.tag.toLowerCase().includes(filterTag.toLowerCase());
    });

    filtered.forEach(task => {
      const card = document.createElement('div');
      card.className = 'kanban-card';
      card.innerHTML = `
        <span class="kanban-card-tag">${task.tag}</span>
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

      if (task.status === 'todo') {
        colTodo.appendChild(card);
        todoCount++;
      } else if (task.status === 'in-progress') {
        colProg.appendChild(card);
        progCount++;
      } else if (task.status === 'done') {
        colDone.appendChild(card);
        doneCount++;
      }
    });

    const cntTodo = document.getElementById('countTodo');
    const cntProg = document.getElementById('countProg');
    const cntDone = document.getElementById('countDone');
    if (cntTodo) cntTodo.textContent = todoCount;
    if (cntProg) cntProg.textContent = progCount;
    if (cntDone) cntDone.textContent = doneCount;
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
    this.renderKanban();
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
    this.renderKanban();
    this.showToast('Задача удалена.');
  }

  addNewTask() {
    const title = prompt('Введите название новой задачи:');
    if (!title || !title.trim()) return;

    const isAlberta = confirm('Назначить задачу Альберте? (ОК — Альберта, Отмена — Global Spirit)');
    const newTask = {
      id: 't_' + Date.now(),
      title: title.trim(),
      status: 'todo',
      owner: isAlberta ? 'alberta' : 'gsg',
      tag: isAlberta ? 'Альберта' : 'Global Spirit'
    };

    this.tasks.unshift(newTask);
    this.saveTasks();
    this.renderKanban();
    this.showToast('Новая задача добавлена в очередь!');
  }

  saveTasks() {
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
