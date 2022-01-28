import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Mystery", "Fantasy", "Historical", "Horror", "Romance", "Satire", "Sci-Fi", "Cyberpunk", "Thriller", "Western"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
