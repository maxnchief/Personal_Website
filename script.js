/// this script controls the image carousel functionality

const images = document.querySelectorAll('#carousel-images img');
        const dots = document.querySelectorAll('[data-index]');
        let current = 0;
        function showSlide(idx) {
            images.forEach((img, i) => {
                img.style.opacity = i === idx ? '1' : '0';
                img.style.position = i === 0 ? 'relative' : 'absolute';
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('bg-gray-400', i === idx);
                dot.classList.toggle('bg-gray-300', i !== idx);
            });
            current = idx;
        }
        document.getElementById('prev').onclick = () => showSlide((current + images.length - 1) % images.length);
        document.getElementById('next').onclick = () => showSlide((current + 1) % images.length);
        dots.forEach(dot => {
            dot.onclick = () => showSlide(Number(dot.dataset.index));
        });
        showSlide(0);