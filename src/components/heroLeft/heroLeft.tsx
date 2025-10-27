import React from "react";
import styles from "./heroLeft.module.scss";
import Slider from "../slider/slider";
import sliderImage from "./../../../public/images/hero-left-images.jpg"

const HeroLeft: React.FC = () => {
    const slides = [{ src: sliderImage, alt: "Luxury Classic Modern Bedroom Suite Hotel" },
    { src: sliderImage, alt: "Luxury Classic Modern Bedroom Suite Hotel" },
    { src: sliderImage, alt: "Luxury Classic Modern Bedroom Suite Hotel" },
    { src: sliderImage, alt: "Luxury Classic Modern Bedroom Suite Hotel" }
    ];
    return (
        <section className={styles["hero-left"]}>
            <div className={styles["hero-left__headings"]}>
                <p className={styles["hero-left__subHeading"]}>
                    REAL ESTATE
                </p>
                <h1 className={styles["hero-left__mainHeading"]}>
                    Find a perfect home you love..!
                </h1>
                <p className={styles["hero-left__description"]}>
                    Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
                </p>
            </div>
            <div className={styles["hero-left__crousel"]}>
                <Slider slides={slides} showArrows={true} showProgress={true} />
            </div>

        </section>
    );
};

export default HeroLeft;
