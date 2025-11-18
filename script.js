document.addEventListener("mousemove", (e) => {
    const layers = document.querySelectorAll("[data-speed]");
    layers.forEach(layer => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 200;
        layer.style.transform = `translateX(${x}px)`;
    });
});
