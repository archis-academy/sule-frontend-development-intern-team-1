import styles from "@components/ourServicesCard/ourServicesCard.module.scss";

type OurServicesCardProps = {
    id: number;
    icon: string;
    title: string;
    text: string;
}

function OurServicesCard({ title, icon, text }: OurServicesCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <img className={styles.icon} src={icon} alt={title} />
            </div>
            <div className={styles.cardTextWrapper}>
                <h4 className={styles.cardTitle}>{title}</h4>
                <p className={styles.cardText}>{text}</p>
            </div>
        </div>
    )
}

export default OurServicesCard;