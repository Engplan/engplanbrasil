// Paralaxe por scroll
document.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset;
    document.querySelectorAll(".layer").forEach(layer => {
        const depth = parseFloat(layer.getAttribute("data-depth"));
        layer.style.transform = `translateY(${scrollTop * depth}px)`;
    });
});

// Efeito 3D de mouse no banner
const hero = document.querySelector(".hero");
const cellphone = document.querySelector(".hero-cellphone");

hero.addEventListener("mousemove", (e) => {
    const { width, height } = hero.getBoundingClientRect();
    const x = e.clientX - width / 2;
    const y = e.clientY - height / 2;

    const rotateX = (y / height) * 15;
    const rotateY = (x / width) * 15;

    if(cellphone){
        cellphone.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
});

hero.addEventListener("mouseleave", () => {
    if(cellphone){
        cellphone.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
});
