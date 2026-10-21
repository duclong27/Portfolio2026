import { useState } from "react";

/* ─────────────────────────────────────────────
   DEMO SLIDESHOW — dùng chung cho các trang chi tiết dự án
   images: [{ src, caption }]
   emptyText: chữ hiển thị khi chưa có ảnh
───────────────────────────────────────────── */
export default function DemoSlideshow({ images, emptyText }) {
    const [current, setCurrent] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className="detail__slideshow detail__slideshow--empty">
                <p className="detail__slideshow-empty-text">{emptyText}</p>
            </div>
        );
    }

    const prev = () => setCurrent((c) => Math.max(0, c - 1));
    const next = () => setCurrent((c) => Math.min(images.length - 1, c + 1));
    const img = images[current];

    return (
        <div className="detail__slideshow">
            <div className="detail__slide-img-wrap">
                <img key={current} src={img.src} alt={img.caption} loading="lazy" />
            </div>

            <div className="detail__slide-bar">
                <button
                    className="detail__slide-btn"
                    onClick={prev}
                    disabled={current === 0}
                    aria-label="Previous"
                >
                    ‹
                </button>
                <span className="detail__slide-caption">{img.caption}</span>
                <span className="detail__slide-counter">
                    {current + 1} / {images.length}
                </span>
                <button
                    className="detail__slide-btn"
                    onClick={next}
                    disabled={current === images.length - 1}
                    aria-label="Next"
                >
                    ›
                </button>
            </div>

            {images.length > 1 && (
                <div className="detail__slide-dots" role="tablist">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            role="tab"
                            aria-selected={idx === current}
                            aria-label={`Slide ${idx + 1}`}
                            className={
                                "detail__slide-dot" +
                                (idx === current ? " detail__slide-dot--active" : "")
                            }
                            onClick={() => setCurrent(idx)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
