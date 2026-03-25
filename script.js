function scrollCarousel(direction) {
    const container = document.getElementById('sliderContainer');
    if (container) {
        const scrollAmount = container.clientWidth;
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}