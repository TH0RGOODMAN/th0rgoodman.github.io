/* The selected palette and arrangement stay in this page; no storage or requests. */
(() => {
  const board = document.getElementById('geo-toyboard');
  const poseButton = document.getElementById('btn-pose');
  const caption = document.getElementById('pose-caption');
  const paletteButtons = [...document.querySelectorAll('.palette-btn')];
  const controls = document.querySelector('.toyboard-controls');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const poses = [
    { key: 'assembled', label: '当前：组合态' },
    { key: 'exploded', label: '当前：拆解态' },
    { key: 'stacked', label: '当前：错位态' },
  ];
  const colors = { warm: '#fcf9f2', blueprint: '#f3f7fc', terracotta: '#fbf5ee' };
  if (!board || !poseButton || !caption || !controls) return;

  let poseIndex = 0;
  poseButton.addEventListener('click', () => {
    poseIndex = (poseIndex + 1) % poses.length;
    board.dataset.pose = poses[poseIndex].key;
    caption.textContent = poses[poseIndex].label;
  });

  paletteButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.dataset.theme;
      if (!Object.hasOwn(colors, theme)) return;
      document.body.dataset.palette = theme;
      paletteButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      if (themeMeta) themeMeta.content = colors[theme];
    });
  });
  controls.hidden = false;
})();
