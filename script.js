// Paralaxe avançada ao rolar
const layers = document.querySelectorAll('.layer');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;

  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yPos = -(scrollTop * speed);
    layer.style.transform = `translateY(${yPos}px) translateX(-50%)`;
  });
});
