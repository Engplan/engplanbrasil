document.addEventListener("mousemove", (e) => {
    const phone = document.querySelector(".hero-cellphone");
    if (!phone) return;

    const speed = 20;

    let x = (window.innerWidth / 2 - e.clientX) / speed;
    let y = (window.innerHeight / 2 - e.clientY) / speed;

    phone.style.transform = `translate(${x}px, ${y}px)`;
});
