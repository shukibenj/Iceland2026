// BG Slideshow — Iceland photos from Unsplash
const BG_IMAGES = [
  "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=1600&q=80",
  "https://images.unsplash.com/photo-1531169509526-a7b45028da27?w=1600&q=80",
  "https://images.unsplash.com/photo-1548695451-6a5fc3e0a03e?w=1600&q=80",
  "https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=1600&q=80",
  "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1600&q=80",
  "https://images.unsplash.com/photo-1516496636080-14fb876e029d?w=1600&q=80",
];

function initSlideshow() {
  const container = document.getElementById('bg-slideshow');
  if (!container) return;
  const shuffled = [...BG_IMAGES].sort(() => Math.random() - 0.5);
  shuffled.forEach((url, i) => {
    const div = document.createElement('div');
    div.className = 'bg-slide' + (i === 0 ? ' active' : '');
    div.style.backgroundImage = `url(${url})`;
    container.appendChild(div);
  });
  let cur = 0;
  setInterval(() => {
    const slides = container.querySelectorAll('.bg-slide');
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
  }, 7000);
}

document.addEventListener('DOMContentLoaded', initSlideshow);
