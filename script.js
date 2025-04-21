// main.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.btn-toggle');
  
    toggleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.previousElementSibling;
        content.classList.toggle('expanded-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        btn.textContent = content.style.display === 'block' ? 'Ocultar detalles' : 'Ver más';
      });
    });
  
    // Fade-in animation on scroll
    const elements = document.querySelectorAll('.experience-card, .other-projects');
  
    function fadeInOnScroll() {
      const triggerBottom = window.innerHeight * 0.9;
  
      elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
  
        if (boxTop < triggerBottom) {
          el.classList.add('show');
        }
      });
    }
  
    window.addEventListener('scroll', fadeInOnScroll);
  
    // Initial check
    fadeInOnScroll();
  });
  
  // CSS para fade-in (puedes poner esto en tu CSS también)
  const fadeStyle = document.createElement("style");
  fadeStyle.textContent = `
    .experience-card,
    .other-projects {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.8s ease-out;
    }
  
    .experience-card.show,
    .other-projects.show {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(fadeStyle);