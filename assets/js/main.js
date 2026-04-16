/**
 * Construsoluciones del Meta — Main JavaScript
 */

'use strict';

// --- Slider obras terminadas (global para que los botones inline lo llamen) ---
// --- Slider ornamentación ---
const ornaImages = [
    'assets/images/orna 1.jpeg','assets/images/orna 2.jpeg','assets/images/orna 3.jpeg',
    'assets/images/orna 4.jpeg','assets/images/orna 5.jpeg','assets/images/orna 6.jpeg',
    'assets/images/orna 7.jpeg','assets/images/orna 8.jpeg','assets/images/orna 9.jpeg'
];
let ornaIndex = 0;
let ornaTimer = null;

function ornaShow(index) {
    const img = document.getElementById('ornaImg');
    const counter = document.getElementById('ornaCounter');
    if (!img) return;
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = ornaImages[index];
        img.style.opacity = '1';
        if (counter) counter.textContent = (index + 1) + ' / ' + ornaImages.length;
    }, 200);
}

function ornaNext() {
    ornaIndex = (ornaIndex + 1) % ornaImages.length;
    ornaShow(ornaIndex);
    clearInterval(ornaTimer);
    ornaTimer = setInterval(ornaNext, 3500);
}

function ornaPrev() {
    ornaIndex = (ornaIndex - 1 + ornaImages.length) % ornaImages.length;
    ornaShow(ornaIndex);
    clearInterval(ornaTimer);
    ornaTimer = setInterval(ornaNext, 3500);
}

// --- Slider puertas tamboradas ---
const tamboradaImages = [
    'assets/images/tamborada 1.jpeg',
    'assets/images/tamborada 2.jpeg',
    'assets/images/tamborada 3.jpeg',
];
let tamboradaIndex = 0;
let tamboradaTimer = null;

function tamboradaShow(index) {
    const img = document.getElementById('tamboradaImg');
    const counter = document.getElementById('tamboradaCounter');
    if (!img) return;
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = tamboradaImages[index];
        img.style.opacity = '1';
        if (counter) counter.textContent = (index + 1) + ' / ' + tamboradaImages.length;
    }, 200);
}

function tamboradaNext() {
    tamboradaIndex = (tamboradaIndex + 1) % tamboradaImages.length;
    tamboradaShow(tamboradaIndex);
    clearInterval(tamboradaTimer);
    tamboradaTimer = setInterval(tamboradaNext, 3500);
}

function tamboradaPrev() {
    tamboradaIndex = (tamboradaIndex - 1 + tamboradaImages.length) % tamboradaImages.length;
    tamboradaShow(tamboradaIndex);
    clearInterval(tamboradaTimer);
    tamboradaTimer = setInterval(tamboradaNext, 3500);
}

const tejaImages = [
    'assets/images/teja 1.jpeg',
    'assets/images/teja 2.jpeg',
    'assets/images/teja 3.jpeg'
];
let tejaIndex = 0;
let tejaTimer = null;

function tejaShow(index) {
    const img = document.getElementById('tejaImg');
    const counter = document.getElementById('tejaCounter');
    if (!img) return;
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = tejaImages[index];
        img.style.opacity = '1';
        if (counter) counter.textContent = (index + 1) + ' / ' + tejaImages.length;
    }, 200);
}

function tejaNext() {
    tejaIndex = (tejaIndex + 1) % tejaImages.length;
    tejaShow(tejaIndex);
    clearInterval(tejaTimer);
    tejaTimer = setInterval(tejaNext, 3500);
}

function tejaPrev() {
    tejaIndex = (tejaIndex - 1 + tejaImages.length) % tejaImages.length;
    tejaShow(tejaIndex);
    clearInterval(tejaTimer);
    tejaTimer = setInterval(tejaNext, 3500);
}
const sliderImages = [
    'assets/images/modelo 1.jpeg','assets/images/modelo 2.jpeg','assets/images/modelo 3.jpeg',
    'assets/images/modelo 4.jpeg','assets/images/modelo 5.jpeg','assets/images/modelo 6.jpeg',
    'assets/images/modelo 7.jpeg','assets/images/modelo 8.jpeg','assets/images/modelo 9.jpeg',
    'assets/images/modelo 10.jpeg','assets/images/modelo 11.jpeg','assets/images/modelo 12.jpeg',
    'assets/images/modelo 13.jpeg','assets/images/modelo 14.jpeg','assets/images/modelo 15.jpeg',
    'assets/images/modelo 16.jpeg','assets/images/modelo 17.jpeg','assets/images/modelo 18.jpeg',
    'assets/images/modelo 19.jpeg','assets/images/modelo 20.jpeg','assets/images/modelo 21.jpeg',
    'assets/images/modelo 22.jpeg','assets/images/modelo 23.jpeg','assets/images/modelo 24.jpeg',
    'assets/images/modelo 25.jpeg','assets/images/modelo 26.jpeg','assets/images/modelo 27.jpeg',
    'assets/images/modelo 28.jpeg','assets/images/modelo 29.jpeg'
];
let sliderIndex = 0;
let sliderTimer = null;

function sliderShow(index) {
    const img = document.getElementById('sliderImg');
    const counter = document.getElementById('obraCounter');
    if (!img) return;
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = sliderImages[index];
        img.alt = 'Obra terminada modelo ' + (index + 1);
        img.style.opacity = '1';
        if (counter) counter.textContent = (index + 1) + ' / ' + sliderImages.length;
    }, 200);
}

function sliderNext() {
    sliderIndex = (sliderIndex + 1) % sliderImages.length;
    sliderShow(sliderIndex);
    resetSliderTimer();
}

function sliderPrev() {
    sliderIndex = (sliderIndex - 1 + sliderImages.length) % sliderImages.length;
    sliderShow(sliderIndex);
    resetSliderTimer();
}

function resetSliderTimer() {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(sliderNext, 3500);
}

function sliderLightbox() {
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightboxImg) lightboxImg.src = sliderImages[sliderIndex];
    const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
    modal.show();
}

document.addEventListener('DOMContentLoaded', () => {

    // --- AOS (Animate On Scroll) ---
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('mainNav');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 50);
        backToTop.classList.toggle('visible', scrollY > 500);
    }, { passive: true });

    // --- Close mobile menu on link click ---
    document.querySelectorAll('.nav-link, .navbar-brand').forEach(link => {
        link.addEventListener('click', () => {
            const navCollapse = document.querySelector('.navbar-collapse');
            if (navCollapse.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
            }
        });
    });

    // --- Contact form handler — envía a WhatsApp ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            const nombre   = this.querySelector('#nombre').value.trim();
            const email    = this.querySelector('#email').value.trim();
            const telefono = this.querySelector('#telefono').value.trim();
            const modelo   = this.querySelector('#modelo').value;
            const mensaje  = this.querySelector('#mensaje').value.trim();

            const texto = 
`Hola, me interesa una cotización 👋

*Nombre:* ${nombre}
*Email:* ${email}
*Teléfono:* ${telefono}
*Tipo de construcción:* ${modelo || 'No especificado'}
*Mensaje:* ${mensaje || 'Sin mensaje adicional'}`;

            const url = `https://wa.me/573502837223?text=${encodeURIComponent(texto)}`;

            btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>¡Redirigiendo a WhatsApp!';
            btn.classList.replace('btn-primary', 'btn-success');
            btn.disabled = true;

            setTimeout(() => {
                window.open(url, '_blank');
                btn.innerHTML = originalText;
                btn.classList.replace('btn-success', 'btn-primary');
                btn.disabled = false;
                this.reset();
            }, 1000);
        });
    }

    // --- Counter animation ---
    const animateCounter = (el) => {
        const text = el.textContent;
        const num = parseInt(text, 10);
        const suffix = text.replace(/[0-9]/g, '');
        const duration = 2000;
        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * num) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

    // --- Iniciar slider automático obras ---
    const sliderImg = document.getElementById('sliderImg');
    if (sliderImg) {
        sliderTimer = setInterval(sliderNext, 3500);
    }

    // --- Iniciar slider ornamentación ---
    const ornaImg = document.getElementById('ornaImg');
    if (ornaImg) {
        ornaImg.addEventListener('click', () => {
            const lightboxImg = document.getElementById('lightboxImg');
            if (lightboxImg) lightboxImg.src = ornaImages[ornaIndex];
            const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
            modal.show();
        });
        ornaTimer = setInterval(ornaNext, 3500);
    }

    // --- Iniciar slider tejas ---
    const tejaImg = document.getElementById('tejaImg');
    if (tejaImg) {
        tejaImg.addEventListener('click', () => {
            const lightboxImg = document.getElementById('lightboxImg');
            if (lightboxImg) lightboxImg.src = tejaImages[tejaIndex];
            const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
            modal.show();
        });
        tejaTimer = setInterval(tejaNext, 3500);
    }

    // --- Iniciar slider tamboradas ---
    const tamboradaImg = document.getElementById('tamboradaImg');
    if (tamboradaImg) {
        tamboradaImg.addEventListener('click', () => {
            const lightboxImg = document.getElementById('lightboxImg');
            if (lightboxImg) lightboxImg.src = tamboradaImages[tamboradaIndex];
            const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
            modal.show();
        });
        tamboradaTimer = setInterval(tamboradaNext, 3500);
    }

    // --- Lightbox para plaqueta/bloquelon ---
    document.querySelectorAll('[data-src]').forEach(img => {
        img.addEventListener('click', (e) => {
            const src = e.currentTarget.getAttribute('data-src');
            const lightboxImg = document.getElementById('lightboxImg');
            if (lightboxImg && src) {
                lightboxImg.src = src;
                const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
                modal.show();
            }
        });
    });

});
