function scrollCarouselById(containerId, direction) {
    const container = document.getElementById(containerId);
    if (container) {
        const scrollAmount = container.clientWidth;
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.open-modal-btn');
  const closeButtons = document.querySelectorAll('.close-btn');


  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.style.display = 'flex';
      }
    });
  });

 
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal-overlay');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });


  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      event.target.style.display = 'none';
    }
  });
});