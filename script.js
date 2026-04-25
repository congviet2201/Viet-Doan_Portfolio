/* ------------------------------------------------------------------
       THEME TOGGLE (Dark / Light)
    ------------------------------------------------------------------ */
    const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    function setTheme(dark) {
      html.setAttribute('data-theme', dark ? 'dark' : 'light');
      toggleBtn.textContent = dark ? '\u2600\uFE0F' : '\uD83C\uDF19';
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }

    // Load saved theme
    const saved = localStorage.getItem('theme');
    setTheme(saved === 'dark');

    toggleBtn.addEventListener('click', () => {
      setTheme(html.getAttribute('data-theme') !== 'dark');
    });

    /* ------------------------------------------------------------------
       NAVBAR SCROLL EFFECT
    ------------------------------------------------------------------ */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    /* ------------------------------------------------------------------
       MOBILE MENU
    ------------------------------------------------------------------ */
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('nav-mobile');
    const navClose  = document.getElementById('nav-close');

    hamburger.addEventListener('click', () => navMobile.classList.add('open'));
    navClose.addEventListener('click', () => navMobile.classList.remove('open'));
    navMobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navMobile.classList.remove('open'));
    });

    /* ------------------------------------------------------------------
       TYPING EFFECT
    ------------------------------------------------------------------ */
    const roles = [
      'Business Analyst Intern',
      'IT Student at PNV'
    ];
    let roleIdx = 0, charIdx = 0, deleting = false;
    const typingEl = document.getElementById('typing-text');

    function typeLoop() {
      const current = roles[roleIdx];
      if (!deleting) {
        typingEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1800);
          return;
        }
      } else {
        typingEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
      }
      setTimeout(typeLoop, deleting ? 55 : 95);
    }
    typeLoop();

    /* ------------------------------------------------------------------
       SCROLL REVEAL
    ------------------------------------------------------------------ */
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(el => observer.observe(el));
