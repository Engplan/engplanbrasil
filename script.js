/* script.js
   - Parallax mousemove + subtle scroll parallax
   - Fade-in observer for sections
   - Phone float animation
   - Pulse on whatsapp button
*/

// Fade-in using IntersectionObserver
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, {threshold: 0.18});

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
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
  const btn = document.querySelector('.btn-whatsapp');
  if (!btn) return;
  setInterval(() => btn.classList.toggle('pulse'), 1600);
})();

// Phone floating micro-animation (if .hero-phone exists)
(function () {
  const phone = document.querySelector('.hero-phone');
  if (!phone) return;
  let t = 0;
  function float() {
    t += 0.02;
    const y = Math.sin(t) * 8; // amplitude
    const rot = Math.sin(t * 0.6) * 0.6; // small rotation
    phone.style.transform = `translateY(${y}px) rotate(${rot}deg)`;
    requestAnimationFrame(float);
  }
  requestAnimationFrame(float);
})();

// Mousemove parallax for decorative layers (subtle)
(function () {
  const hero = document.querySelector('.hero');
  const gl1 = document.querySelector('.g1');
  const gl2 = document.querySelector('.g2');
  const gl3 = document.querySelector('.g3');
  if (!hero || (!gl1 && !gl2 && !gl3)) return;

  const strength = [0.02, 0.04, 0.06];
  function onMove(e) {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const mx = (e.clientX - cx) / cx;
    const my = (e.clientY - cy) / cy;

    if (gl1) gl1.style.transform = `translate3d(${mx * -40}px, ${my * -18}px, 0) rotate(-6deg)`;
    if (gl2) gl2.style.transform = `translate3d(${mx * -20}px, ${my * -12}px, 0) rotate(-8deg)`;
    if (gl3) gl3.style.transform = `translate3d(${mx * -12}px, ${my * -8}px, 0) rotate(-12deg)`;
  }

  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mq || !mq.matches) {
    document.addEventListener('mousemove', onMove, {passive:true});
    window.addEventListener('scroll', () => {
      const s = window.scrollY;
      if (gl1) gl1.style.transform += ` translateY(${-(s * 0.02)}px)`;
      if (gl2) gl2.style.transform += ` translateY(${-(s * 0.035)}px)`;
    }, {passive:true});
  }
})();
