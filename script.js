// Paralaxe avançada ao rolar
const layers = document.querySelectorAll('.layer');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;

  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yPos = -(scrollTop * speed);
    if(layer.classList.contains('layer-cell') || layer.classList.contains('layer-engineer')){
      // mantém animação flutuante combinada com paralaxe
      layer.style.transform = `translateY(${yPos}px) translateX(-50%)`;
    } else {
      layer.style.transform = `translateY(${yPos}px)`;
    }
  });
});
