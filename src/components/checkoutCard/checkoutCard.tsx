import styles from "@components/checkoutCard/checkoutCard.module.scss";
import classNames from "classnames";

type CheckoutCardProps = {
    id: number;
    image: string;
    price: string;
    title: string;
    address: string;
    bedCount: number;
    bathCount: number;
    tag: string;
    icon: string;
};

function CheckoutCard({ image, price, title, address, bedCount, bathCount, tag, icon }: CheckoutCardProps) {

    return (
        <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
                <img className={styles.cardImage} src={image} alt={title} />
                <p className={classNames(styles.tag, {
                    [styles.popularTag]: tag === "Popular",
                    [styles.newListingTag]: tag === "New Listing",
                    [styles.discountedTag]: tag === "Discounted Price"
                })}>
                    <img src={icon} alt={tag} />
                    <span className={styles.tagText}>{tag}</span>
                </p>
            </div>
            <div className={styles.cardBody}>
                <span className={styles.price}>$ {price}</span>
                <div>
                    <h4 className={styles.title}>{title}</h4>
                    <span className={styles.adress}>{address}</span>
                </div>
                <div className={styles.detailWrapper}>
                    <p className={styles.detail}>
                        <img className={styles.detailIcon} src="/icons/bed-icon.svg" alt="bed-icon" />
                        <span className={styles.detailText}>{bedCount} Beds</span>
                    </p>
                    <p className={styles.detail}>
                        <img className={styles.detailIcon} src="/icons/bath-icon.svg" alt="bath-icon" />
                        <span className={styles.detailText}>{bathCount} Baths</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CheckoutCard;