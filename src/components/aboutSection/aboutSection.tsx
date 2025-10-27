
import React from "react";
import styles from "./aboutSection.module.scss";
import SmartHomeIcon from "../../../public/icons/icon_smarthome_.svg?react";
import UserOctagonIcon from "../../../public/icons/icon_useroctagon_.svg?react";
import MainHouseImage from "../../../public/icons/Rectangle-4.svg?react";
import BedroomImage from "../../../public/icons/Rectangle-15.svg?react";
import LivingRoomImage from "../../../public/icons/Rectangle-16.svg?react";
import DecorativeCircle from "../../../public/icons/Ellipse-18.svg?react";
import CircularText from "../../../public/icons/Group.svg?react";

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
                            <SmartHomeIcon aria-hidden="true" />
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
                            <UserOctagonIcon aria-hidden="true" />
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
                    <MainHouseImage aria-hidden="true"
                        className={styles["about__large-image"]}
                    />
                </div>

                <div className={styles["about__group-images"]}>
                    <div className={styles["about__bedroom-image"]}>
                        <BedroomImage aria-hidden="true"/>
                    </div>
                    <div className={styles["about__livingroom-image"]}>
                        <LivingRoomImage aria-hidden="true"/>
                    </div>
                </div>

                <div className={styles["about__group"]}>
                    <CircularText aria-hidden="true"/>
                </div>

                <div className={styles["about__ellipse"]}>
                    <DecorativeCircle aria-hidden="true"/>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
