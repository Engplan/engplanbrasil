// Paralaxe avançada com profundidade
document.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset;

    document.querySelectorAll(".layer").forEach(layer => {
        const depth = parseFloat(layer.getAttribute("data-depth"));
        layer.style.transform = `translateY(${scrollTop * depth}px)`;
    });

    // Celular com rotação e sombra dinâmica
    const cellphone = document.querySelector(".hero-cellphone");
    if(cellphone){
        const offset = scrollTop;
        const rotate = offset / 50;
        cellphone.style.transform = `translateY(${offset * 1.2}px) rotateX(${rotate}deg) rotateY(${rotate/2}deg)`;
        cellphone.style.boxShadow = `${offset/5}px ${offset/10}px 60px rgba(0,0,0,0.6)`;
    }
});
