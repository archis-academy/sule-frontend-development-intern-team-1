import styles from "@components/checkoutCard/checkoutCard.module.scss"

type Props = {
    image: string;
    price: string;
    title: string;
    adress: string;
    bedCount: number;
    bathCount: number;
    tag: string;
    icon: string;
};

function CheckoutCard({ image, price, title, adress, bedCount, bathCount, tag, icon }: Props) {
    return (

        <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
                <img className={styles.cardImage} src={image} alt="card-image" />
                <p className={styles.tag}>
                    <img src={icon} alt="populer-icon" />
                    <span className={styles.tagText}>{tag}</span>
                </p>
            </div>
            <div className={styles.cardBody}>
                <span className={styles.price}>$ {price}</span>
                <h4 className={styles.title}>{title}</h4>
                <span className={styles.adress}>{adress}</span>
                <div className={styles.detailWrapper}>
                    <p className={styles.detail}>
                        <img src="/icons/bed-icon.svg" alt="bed-icon" />
                        <span className={styles.detailText}>{bedCount} Beds</span>
                    </p>
                    <p className={styles.detail}>
                        <img src="/icons/bath-icon.svg" alt="bath-icon" />
                        <span className={styles.detailText}>{bathCount} Baths</span>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default CheckoutCard;