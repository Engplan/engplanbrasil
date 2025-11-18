// Paralaxe simples do celular / engenheiro
document.addEventListener("scroll", function() {
    const speed = 2; // velocidade da paralaxe
    const cellphone = document.querySelector(".hero-cellphone");
    const offset = window.pageYOffset;
    cellphone.style.transform = `translateY(${offset / speed}px) rotateX(${offset / 50}deg)`;
});
