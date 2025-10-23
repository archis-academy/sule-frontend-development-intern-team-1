import styles from "@components/locationsCard/locationsCard.module.scss";

type LocationCardProps = {
    image: string;
    no: number;
    city: string;
}

function LocationsCard({ image, no, city }: LocationCardProps) {

    return (
        <div className={styles.locationsCard}>
            <img className={styles.locationsImage} src={image} alt={city} />
            <div className={styles.addressWrapper}>
                <span className={styles.addressNo}>{no}</span>
                <span className={styles.city}>{city}</span>
            </div>
        </div>
    )
}

export default LocationsCard;