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