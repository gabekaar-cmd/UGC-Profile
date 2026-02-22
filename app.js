document.addEventListener('DOMContentLoaded', () => {

    // Removed fake download script since we are using a real download link.

    // Optional: Add subtle parallax to glowing background on mouse move
    const glows = document.querySelectorAll('.glow');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        glows.forEach((glow, index) => {
            const speed = index === 0 ? 30 : -30;
            const moveX = (x * speed) - (speed / 2);
            const moveY = (y * speed) - (speed / 2);

            glow.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // UGC Collage Slider Logic
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const ugcImages = document.querySelectorAll('.ugc-img-link');
    let currentIndex = 0;

    function updateSlider() {
        ugcImages.forEach((img, index) => {
            img.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    if (nextBtn && prevBtn && ugcImages.length > 0) {
        nextBtn.addEventListener('click', () => {
            if (currentIndex < ugcImages.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back
            }
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = ugcImages.length - 1; // Loop to end
            }
            updateSlider();
        });
    }
});
