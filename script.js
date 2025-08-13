let currentIndex = 0;
const images = Array.from(document.querySelectorAll('.gallery .image'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function showLightbox(index) {
  currentIndex = index;
  const img = images[currentIndex].querySelector('img');
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showLightbox(currentIndex);
}

// Add click events
images.forEach((image, index) => {
  image.addEventListener('click', () => showLightbox(index));
});

document.getElementById('closeBtn').addEventListener('click', closeLightbox);
document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);

// Filter images by category
function filterImages(category) {
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
