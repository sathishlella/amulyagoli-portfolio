// Simple scroll animation using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    // Add initial hidden state
    section.classList.add('hidden');
    observer.observe(section);
  });

  // Fallback: if sections remain hidden after a short delay (e.g., IntersectionObserver not triggered), reveal them
  setTimeout(() => {
    sections.forEach(section => {
      if (!section.classList.contains('visible')) {
        section.classList.add('visible');
      }
    });
  }, 800);
});