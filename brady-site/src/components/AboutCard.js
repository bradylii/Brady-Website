import React, { useState } from "react";

export default function AboutCard({ title, text, image, reverse, gallery, className = ""}) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className={`about-card ${reverse ? "reverse" : ""} ${className}`}>
      {image && !gallery && (
        <div className="about-media">
          <img src={image} alt={title} />
        </div>
      )}

      {gallery && (
        <div className="about-media gallery-wrapper">
          <button className="gallery-btn left" onClick={prevSlide}>‹</button>

          <div className="gallery-slide">
            <img src={gallery[current].src} alt={gallery[current].caption} />
            <p className="caption">{gallery[current].caption}</p>

            {/* 🔹 Dot navigation */}
            <div className="gallery-dots">
              {gallery.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>

          <button className="gallery-btn right" onClick={nextSlide}>›</button>
        </div>
      )}

      <div className="about-info">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
