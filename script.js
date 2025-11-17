const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

const whatsappBtn = document.querySelector(".btn-whatsapp");
if (whatsappBtn) {
    setInterval(() => whatsappBtn.classList.toggle("pulse"), 1800);
}

const phone = document.querySelector(".hero-phone");
if (phone) {
    let direction = 1, pos = 0;
    setInterval(() => {
        pos += direction * 0.3;
        if (pos > 10 || pos < -10) direction *= -1;
        phone.style.transform = `translateY(${pos}px)`;
    }, 25);
}
