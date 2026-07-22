document.addEventListener("DOMContentLoaded", () => {
    // Form submission handling
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            
            submitBtn.textContent = "Enviando...";
            submitBtn.disabled = true;

            setTimeout(() => {
                form.reset();
                submitBtn.textContent = "Solicitar Atendimento";
                submitBtn.disabled = false;
                
                formMessage.style.color = "#4caf50";
                formMessage.textContent = "Solicitação enviada com sucesso! Em breve entraremos em contato.";
                
                setTimeout(() => {
                    formMessage.textContent = "";
                }, 5000);
            }, 1500);
        });
    }

    // Auto-scroll for specs carousel
    const carouselWrapper = document.getElementById('specsCarouselWrapper');
    const carousel = document.getElementById('specsCarousel');
    
    if (carouselWrapper && carousel) {
        let scrollAmount = 0;
        const scrollStep = 1; // Pixels to scroll
        const scrollIntervalTime = 15; // Ms between steps
        
        let isHovered = false;
        
        carouselWrapper.addEventListener('mouseenter', () => isHovered = true);
        carouselWrapper.addEventListener('mouseleave', () => isHovered = false);

        setInterval(() => {
            if (!isHovered) {
                carouselWrapper.scrollLeft += scrollStep;
                // Check if we hit the end
                if (carouselWrapper.scrollLeft >= (carousel.scrollWidth - carouselWrapper.clientWidth)) {
                    // Start over smoothly
                    carouselWrapper.scrollLeft = 0;
                }
            }
        }, scrollIntervalTime);
    }
});
