// script.js
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
        formMessage.textContent =
          "Solicitação enviada com sucesso! Em breve entraremos em contato.";

        setTimeout(() => {
          formMessage.textContent = "";
        }, 5000);
      }, 1500);
    });
  }

  // Auto-scroll for specs carousel
  const carouselWrapper = document.getElementById("specsCarouselWrapper");
  const carousel = document.getElementById("specsCarousel");

  if (carouselWrapper && carousel) {
    // Duplica o conteúdo para criar o loop infinito sem pausas
    carousel.innerHTML += carousel.innerHTML;

    const scrollStep = 1;
    const scrollIntervalTime = 15;
    let isHovered = false;

    carouselWrapper.addEventListener("mouseenter", () => (isHovered = true));
    carouselWrapper.addEventListener("mouseleave", () => (isHovered = false));

    carouselWrapper.addEventListener("touchstart", () => (isHovered = true));
    carouselWrapper.addEventListener("touchend", () => {
      setTimeout(() => (isHovered = false), 800);
    });

    setInterval(() => {
      if (!isHovered) {
        carouselWrapper.scrollLeft += scrollStep;

        // Quando o scroll atingir a metade exata (fim dos originais), volta para o zero instantaneamente
        if (carouselWrapper.scrollLeft >= carousel.scrollWidth / 2) {
          carouselWrapper.scrollLeft = 0;
        }
      }
    }, scrollIntervalTime);
  }
});
