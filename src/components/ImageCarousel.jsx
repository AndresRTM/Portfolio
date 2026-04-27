import { useRef } from 'react';

export default function ImageCarousel({ images }) {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: direction * sliderRef.current.clientWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="generic-carousel-wrapper">
            <button className="carousel-control prev" onClick={() => scroll(-1)} aria-label="Previous image">
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="generic-slider-container" ref={sliderRef}>
                <div className="carousel-track">
                    {images.map((img) => (
                        <figure key={img.alt} className="slider-item">
                            <img src={img.src} alt={img.alt} />
                            <figcaption className="image-caption">{img.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
            <button className="carousel-control next" onClick={() => scroll(1)} aria-label="Next image">
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
}
