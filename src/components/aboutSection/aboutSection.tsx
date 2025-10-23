import React from "react";
import styles from "./aboutSection.module.scss";
import smartHome from "../../../public/icons/icon _smart home_.svg";
import userOrtagon from "../../../public/icons/icon _user octagon_.svg";
import image1 from "../../../public/images/Rectangle-14.jpg";
import group1 from "../../../public/images/Rectangle-15.jpg";
import group2 from "../../../public/images/Rectangle-16.jpg";
import ellipse from "../../../public/images/Ellipse-18.jpg";
import group from "../../../public/icons/Group.svg";

const SecondaryHeader: React.FC = () => {
    return (
        <section className={styles["about"]}>
            <div className={styles["about__text"]}>
                <div className={styles["about__title"]}>
                    <h4 className={styles["about__subtext"]}>WHO ARE WE</h4>
                    <h2 className={styles["about__subtitle"]}>
                        Assisting individuals in locating the appropriate real estate.
                    </h2>
                    <p className={styles["about__description"]}>
                        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
                        Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
                    </p>
                </div>

                <div className={styles["about__cards"]}>
                    <div className={styles["about__card"]}>
                        <div className={styles["about__icon"]}>
                            <img src={smartHome} alt="Smart Home Icon" />
                        </div>
                        <div className={styles["about__cardtext"]}>
                            <h4 className={styles["about__cardheader"]}>Donec porttitor euismod</h4>
                            <p className={styles["about__carddescription"]}>
                                Nullam a lacinia ipsum, nec dignissim purus. Nulla
                            </p>
                        </div>
                    </div>

                    <div className={styles["about__card"]}>
                        <div className={styles["about__icon"]}>
                            <img src={userOrtagon} alt="User Icon" />
                        </div>
                        <div className={styles["about__cardtext"]}>
                            <h4 className={styles["about__cardheader"]}>Donec porttitor euismod</h4>
                            <p className={styles["about__carddescription"]}>
                                Nullam a lacinia ipsum, nec dignissim purus. Nulla
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["about__images"]}>
                <div className={styles["about__large-images"]}>
                    <img
                        src={image1}
                        alt="Modern Villa with Pool"
                        className={styles["about__large-image"]}
                    />
                </div>

                <div className={styles["about__group-images"]}>
                    <div className={styles["about__group1"]}>
                        <img src={group1} alt="Bedroom Interior" />
                    </div>
                    <div className={styles["about__group2"]}>
                        <img src={group2} alt="Living Room Interior" />
                    </div>
                </div>

                <div className={styles["about__group"]}>
                    <img src={group} alt="Decorative Circular Text" />
                </div>

                <div className={styles["about__ellipse"]}>
                    <img src={ellipse} alt="Decorative Ellipse" />
                </div>
            </div>
        </section>
    );
};

export default SecondaryHeader;