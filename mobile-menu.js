const menuButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const menuOverlay = document.querySelector('[data-menu-overlay]');
const menuClose = document.querySelector('[data-menu-close]');

const setMenuState = (isOpen) => {
  document.body.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  if (isOpen) menuClose.focus();
};

menuButton.addEventListener('click', () => setMenuState(true));
menuClose.addEventListener('click', () => setMenuState(false));
menuOverlay.addEventListener('click', () => setMenuState(false));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuState(false);
});
