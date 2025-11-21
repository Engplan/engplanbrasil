/* script.js
   - Parallax mousemove + subtle scroll parallax
   - IntersectionObserver fade-in
   - Phone float animation
   - WhatsApp pulse
*/

// Fade-in observer
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
  }, { threshold: 0.18 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
})();

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({behavior:"smooth", block:"start"});
  });
});

// WhatsApp button pulse
(function () {
  const btn = document.querySelector('.btn-primary');
  if (!btn) return;
  setInterval(() => btn.classList.toggle('pulse'), 1800);
})();

// Phone floating micro-animation
(function () {
  const phone = document.querySelector('.hero-phone');
  if (!phone) return;
  let t = 0;
  function float() {
    t += 0.02;
    const y = Math.sin(t) * 7; // amplitude
    const rot = Math.sin(t * 0.6) * 0.4;
    phone.style.transform = `translateY(${y}px) rotate(${rot}deg)`;
    requestAnimationFrame(float);
  }
  requestAnimationFrame(float);
})();

// Glass shapes parallax by mouse + scroll
(function () {
  const hero = document.querySelector('.hero');
  const g1 = document.querySelector('.g1');
  const g2 = document.querySelector('.g2');
  const g3 = document.querySelector('.g3');
  if (!hero || (!g1 && !g2 && !g3)) return;

  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const mx = (e.clientX - cx) / cx;
    const my = (e.clientY - cy) / cy;

    if (g1) g1.style.transform = `translate3d(${mx * -40}px, ${my * -18}px, 0) rotate(-6deg)`;
    if (g2) g2.style.transform = `translate3d(${mx * -22}px, ${my * -12}px, 0) rotate(-8deg)`;
    if (g3) g3.style.transform = `translate3d(${mx * -12}px, ${my * -8}px, 0) rotate(-12deg)`;
  }, {passive:true});

  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    if (g1) g1.style.transform += ` translateY(${-(s * 0.02)}px)`;
    if (g2) g2.style.transform += ` translateY(${-(s * 0.035)}px)`;
  }, {passive:true});
})();
