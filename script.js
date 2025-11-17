// Seleciona todos os elementos com classe .parallax
const parallaxItems = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;

    parallaxItems.forEach(item => {
        const speed = item.dataset.speed;
        item.style.transform = `translateY(${scrollTop * speed * 0.01}px)`;
    });
});
