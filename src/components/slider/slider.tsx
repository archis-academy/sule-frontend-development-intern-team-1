import React, { useEffect, useState, useCallback } from "react";
import styles from "./slider.module.scss";

type SlideItem =
  | { src: string; alt?: string }
  | { node: React.ReactNode };

interface SliderProps {
  slides?: SlideItem[];
  showArrows?: boolean;
  showProgress?: boolean;
  className?: string;
}

const defaultSlides: SlideItem[] = [
  { node: <div className={styles["placeholder"]}>Room 1</div> },
  { node: <div className={styles["placeholder"]}>Room 2</div> },
  { node: <div className={styles["placeholder"]}>Room 3</div> },
];

const Slider: React.FC<SliderProps> = ({
  slides = defaultSlides,
  showArrows = true,
  showProgress = true,
  className,
}) => {
  const [index, setIndex] = useState(0);
  const slidesCount = slides.length;

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slidesCount) % slidesCount);
  }, [slidesCount]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slidesCount);
  }, [slidesCount]);

  const goTo = useCallback((i: number) => {
    setIndex(i);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className={`${styles["slider"]} ${className ?? ""}`}>
      <div className={styles["viewport"]}>
        <div
          className={styles["track"]}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div
              className={styles["slide"]}
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1}`}
            >
              <div className={styles["slideContainer"]}>
                {"src" in s ? (
                  <img src={s.src} alt={s.alt ?? `slide-${i + 1}`} />
                ) : (
                  s.node
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            className={`${styles["arrow"]} ${styles["prev"]}`}
            onClick={prev}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            className={`${styles["arrow"]} ${styles["next"]}`}
            onClick={next}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {showProgress && (
        <div className={styles["progress"]}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles["progressItem"]} ${i === index ? styles["active"] : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className={styles["progressBar"]} style={{ width: i === index ? "100%" : "0%" }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;