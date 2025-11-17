// animações suaves no scroll
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section, header");

    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0px)";
        }
    });
});
