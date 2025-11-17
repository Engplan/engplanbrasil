// Paralaxe cinematográfico avançado
const layers = document.querySelectorAll('.layer');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;

  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yPos = -(scrollTop * speed);
    if(layer.classList.contains('layer-cell') || layer.classList.contains('layer-engineer')){
      // mantém flutuação combinada com paralaxe
      let floatOffset = parseFloat(getComputedStyle(layer).transform.split(',')[5]) || 0;
      layer.style.transform = `translateX(-50%) translateY(${yPos + floatOffset}px)`;
    } else {
      layer.style.transform = `translateY(${yPos}px)`;
    }
  });
});
