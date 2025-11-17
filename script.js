// Parallax: mouse move + subtle scroll parallax
(function () {
  const wrapper = document.querySelector('.bg-wrapper');
  const layers = document.querySelectorAll('.bg-wrapper .layer');
  const personagem = document.querySelector('.personagem');

  // mouse move parallax
  let mouseX = 0, mouseY = 0;
  const strength = [
    0.02, // layer1 (mais fundo - menor movimento)
    0.035,
    0.06,
    0.09,
    0.14  // personagem (maior movimento)
  ];

  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouseX = (e.clientX - cx) / cx; // -1 .. 1
    mouseY = (e.clientY - cy) / cy; // -1 .. 1

    layers.forEach((layer, i) => {
      const movementX = mouseX * 100 * (strength[i] || 0.04);
      const movementY = mouseY * 40 * (strength[i] || 0.04);
      layer.style.transform = `translate3d(${movementX}px, ${movementY}px, 0)`;
    });
  });

  // scroll parallax (subtle)
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    layers.forEach((layer, i) => {
      const depth = (i + 1) * 0.15;
      const yOffset = -(scrolled * depth * 0.08);
      // combine with existing mouse transform if present
      const current = layer.style.transform || '';
      layer.style.transform = `${current} translate3d(0, ${yOffset}px, 0)`;
    });
  });

  // reduce motion if user prefers reduced motion
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) {
    document.removeEventListener('mousemove', ()=>{});
    window.removeEventListener('scroll', ()=>{});
    layers.forEach((l)=> l.style.transform = 'none');
  }
})();
