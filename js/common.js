document.addEventListener('DOMContentLoaded', () => {
  // Hamburger toggle
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        toggle.classList.remove('is-open');
      });
    });
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabGroup = btn.closest('section') || document;
      tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      tabGroup.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = tabGroup.querySelector('#' + btn.getAttribute('data-tab'));
      if (panel) panel.classList.add('active');
    });
  });

  // Lightbox for project images
  const overlay = document.getElementById('lightbox-overlay');
  if (overlay) {
    const lbImg = overlay.querySelector('img');
    document.querySelectorAll('.project-card[data-full]').forEach(card => {
      card.addEventListener('click', () => {
        lbImg.src = card.getAttribute('data-full');
        overlay.classList.add('active');
      });
    });
    overlay.addEventListener('click', () => {
      overlay.classList.remove('active');
      lbImg.src = '';
    });
  }
});
