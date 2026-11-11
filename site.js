/* Interactive pegboard & palette studio. State lives strictly in the current page; zero storage or network requests. */
(() => {
  const colors = { warm: '#fcf9f2', blueprint: '#f3f7fc', terracotta: '#fbf5ee' };
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const paletteButtons = [...document.querySelectorAll('[data-theme]')];
  const miniBar = document.querySelector('.mini-palette-bar');

  function applyPalette(theme) {
    if (!Object.hasOwn(colors, theme)) return;
    document.body.dataset.palette = theme;
    paletteButtons.forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.theme === theme));
    });
    if (themeMeta) themeMeta.content = colors[theme];
  }

  paletteButtons.forEach((btn) => {
    btn.addEventListener('click', () => applyPalette(btn.dataset.theme));
  });
  if (miniBar) miniBar.removeAttribute('hidden');

  const board = document.getElementById('geo-toyboard');
  const controls = document.querySelector('.toyboard-controls');
  const tabsWrap = document.querySelector('.toyboard-tabs');
  const footWrap = document.querySelector('.toyboard-foot');
  const poseButton = document.getElementById('btn-pose');
  const caption = document.getElementById('pose-caption');
  const hintText = document.getElementById('toyboard-hint');
  const jumpLink = document.getElementById('toyboard-jump');

  if (!board || !controls || !poseButton || !caption) return;

  const sceneTabs = [...board.querySelectorAll('.scene-tab')];
  const scenePanels = {
    assembly: document.getElementById('scene-assembly'),
    route: document.getElementById('scene-route'),
    schedule: document.getElementById('scene-schedule'),
  };

  const assemblyPoses = [
    { key: 'assembled', label: '组合态 · 顺序与位姿对齐' },
    { key: 'exploded', label: '拆解态 · 三件分离检视' },
    { key: 'stacked', label: '错位态 · 姿态偏差待调' },
  ];

  const routeStates = [
    { key: 'detour', label: 'λ = 2 · 绕开风险区 (19格 / 风险0)' },
    { key: 'shortest', label: 'λ = 0 · 最短直穿 (15格 / 风险32)' },
  ];

  // Exact proportional positions for specialists preset (1 time unit = 32px, t = 0..9 => x = 88..376)
  const scheduleStates = [
    {
      key: 'optimal',
      label: 'Smith 最优 · ΣwC = 83 (总工期 9)',
      blocks: {
        E: 'translate(88px, 68px)',
        C: 'translate(152px, 68px)',
        A: 'translate(280px, 68px)',
        D: 'translate(88px, 148px)',
        F: 'translate(152px, 148px)',
        B: 'translate(280px, 148px)',
      },
    },
    {
      key: 'baseline',
      label: '直观派单 · ΣwC = 119 (总工期 9)',
      blocks: {
        A: 'translate(88px, 68px)',
        C: 'translate(184px, 68px)',
        E: 'translate(312px, 68px)',
        B: 'translate(88px, 148px)',
        D: 'translate(184px, 148px)',
        F: 'translate(248px, 148px)',
      },
    },
  ];

  const sceneMeta = {
    assembly: {
      btn: '变换积木排列 ↻',
      hint: '点击画板图形或按钮，切换组合 / 拆解 / 错位三态',
      href: './assembly-training-lab/',
      jump: '打开三维装配实验台 ↗',
    },
    route: {
      btn: '切换风险权重 λ ↻',
      hint: '对比 λ=0 最短路与 λ=2 绕行路在同一张网格上的取舍',
      href: './evacuation-pathfinding-lab/',
      jump: '打开寻路与风险实验台 ↗',
    },
    schedule: {
      btn: '切换派单策略 ↻',
      hint: '高权重订单 E(w=5)、F(w=3) 在 Smith 规则下提前完工',
      href: './engineering-optimization-examples/',
      jump: '打开双机调度实验台 ↗',
    },
  };

  let activeScene = 'assembly';
  let poseIdx = 0;
  let routeIdx = 0;
  let schedIdx = 0;

  function applySchedulePositions() {
    const state = scheduleStates[schedIdx];
    Object.entries(state.blocks).forEach(([id, transform]) => {
      const el = document.getElementById('gantt-' + id);
      if (el) el.style.transform = transform;
    });
  }

  function syncSceneUI() {
    Object.entries(scenePanels).forEach(([key, panel]) => {
      if (panel) panel.toggleAttribute('hidden', key !== activeScene);
    });
    sceneTabs.forEach((tab) => {
      tab.setAttribute('aria-pressed', String(tab.dataset.scene === activeScene));
    });
    const meta = sceneMeta[activeScene];
    poseButton.textContent = meta.btn;
    if (hintText) hintText.textContent = meta.hint;
    if (jumpLink) {
      jumpLink.href = meta.href;
      jumpLink.textContent = meta.jump;
    }
    if (activeScene === 'assembly') {
      board.dataset.pose = assemblyPoses[poseIdx].key;
      caption.textContent = assemblyPoses[poseIdx].label;
    } else if (activeScene === 'route') {
      board.dataset.route = routeStates[routeIdx].key;
      caption.textContent = routeStates[routeIdx].label;
    } else if (activeScene === 'schedule') {
      applySchedulePositions();
      caption.textContent = scheduleStates[schedIdx].label;
    }
  }

  function stepCurrentScene() {
    if (activeScene === 'assembly') {
      poseIdx = (poseIdx + 1) % assemblyPoses.length;
    } else if (activeScene === 'route') {
      routeIdx = (routeIdx + 1) % routeStates.length;
    } else if (activeScene === 'schedule') {
      schedIdx = (schedIdx + 1) % scheduleStates.length;
    }
    syncSceneUI();
  }

  poseButton.addEventListener('click', stepCurrentScene);

  sceneTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const next = tab.dataset.scene;
      if (!scenePanels[next]) return;
      activeScene = next;
      syncSceneUI();
    });
  });

  board.querySelectorAll('.geo-piece, #scene-route, #scene-schedule').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      stepCurrentScene();
    });
  });

  board.dataset.route = routeStates[0].key;
  applySchedulePositions();
  if (tabsWrap) tabsWrap.removeAttribute('hidden');
  controls.removeAttribute('hidden');
  if (footWrap) footWrap.removeAttribute('hidden');
  syncSceneUI();
})();
