import React from "react";
import styles from "./aboutSection.module.scss";
import SmartHomeIcon from "../../../public/icons/icon_smarthome_.svg";
import UserOctagonIcon from "../../../public/icons/icon_useroctagon_.svg";
import MainHouseImage from "../../../public/images/Rectangle-14.jpg";
import BedroomImage from "../../../public/images/Rectangle-15.jpg";
import LivingRoomImage from "../../../public/images/Rectangle-16.jpg";
import CircleDecoration from "../../../public/images/Ellipse-18.jpg";
import CircularTextDecoration from "../../../public/icons/Group.svg";

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
              <img src={SmartHomeIcon} alt="Smart Home Icon" />
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
              <img src={UserOctagonIcon} alt="User Profile Icon" />
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
            src={MainHouseImage}
            alt="Modern Villa with Pool"
            className={styles["about__large-image"]}
          />
        </div>

        <div className={styles["about__group-images"]}>
          <div className={styles["about__bedroom-image"]}>
            <img src={BedroomImage} alt="Luxury Bedroom Interior" />
          </div>
          <div className={styles["about__livingroom-image"]}>
            <img src={LivingRoomImage} alt="Modern Living Room" />
          </div>
        </div>

        <div className={styles["about__group"]}>
          <img src={CircularTextDecoration} alt="Decorative Circular Text" />
        </div>

        <div className={styles["about__ellipse"]}>
          <img src={CircleDecoration} alt="Decorative Circle" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;