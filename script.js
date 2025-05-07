// Animasi fade-in saat scroll
const gambar = document.querySelectorAll('.fade-in');

function showOnScroll() {
  gambar.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      img.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll(); // panggil saat pertama load
