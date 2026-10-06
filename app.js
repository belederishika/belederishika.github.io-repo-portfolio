document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const form = document.getElementById('contact-form');
  const status = document.querySelector('.form-status');

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = (formData.get('name') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();

      if (!name || !message) {
        status.textContent = 'Please complete the required fields before sending.';
        status.style.color = '#8f563f';
        return;
      }

      status.textContent = `Thanks, ${name}. Your note is on its way.`;
      status.style.color = '#2d5a3c';
      form.reset();
    });
  }
});
