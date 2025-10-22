import React from "react";
import styles from "./secondaryHeader.module.scss";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";



const SecondaryHeader: React.FC = () => {
    return (
        <header className={styles["secondary-header"]}>

            <div className={styles["secondary-header__location"]}>
                <div className={styles["secondary-header__icon"]}>
                    <MapPin />
                </div>
                <span className={styles["secondary-header__text"]}>
                    {CONTACT_INFO.location}
                </span>
            </div>

            <div className={styles["secondary-header__contact"]}>
                <div className={styles["secondary-header__phone"]}>
                    <div className={styles["secondary-header__phoneIcon"]}>
                        <Phone />
                    </div>
                    <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className={styles["secondary-header__number"]}
                    >
                        {CONTACT_INFO.phone}
                    </a>
                </div>

                <div className={styles["secondary-header__email"]}>
                    <div className={styles["secondary-header__emailIcon"]}>
                        <Mail />
                    </div>
                    <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className={styles["secondary-header__emailText"]}
                    >
                        {CONTACT_INFO.email}
                    </a>
                </div>
            </div>

        </header>
    );
};

export default SecondaryHeader;