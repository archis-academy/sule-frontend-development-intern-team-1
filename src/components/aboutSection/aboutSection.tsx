import React from "react";
import styles from "./aboutSection.module.scss";
import SmartHomeIcon from "../../../public/icons/icon _smart home_.svg?react";
import UserOrtagon from "../../../public/icons/icon _user octagon_.svg?react";
import Image1 from "../../../public/icons/Rectangle-4.svg?react";
import Group1 from "../../../public/icons/Rectangle-15.svg?react";
import Group2 from "../../../public/icons/Rectangle-16.svg?react";
import Ellipse from "../../../public/icons/Ellipse-18.svg?react";
import Group from "../../../public/icons/Group.svg?react";

const AboutSection: React.FC = () => {
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
                            <SmartHomeIcon />
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
                            <UserOrtagon />
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
                    <Image1
                        className={styles["about__large-image"]}
                    />
                </div>

                <div className={styles["about__group-images"]}>
                    <div className={styles["about__bedroom-image"]}>
                        <Group1 />
                    </div>
                    <div className={styles["about__livingroom-image"]}>
                        <Group2 />
                    </div>
                </div>

                <div className={styles["about__group"]}>
                    <Group/>
                </div>

                <div className={styles["about__ellipse"]}>
                    <Ellipse />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;