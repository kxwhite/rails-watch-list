const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-icon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-icon-white');
      } else {
        navbar.classList.remove('navbar-icon-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
