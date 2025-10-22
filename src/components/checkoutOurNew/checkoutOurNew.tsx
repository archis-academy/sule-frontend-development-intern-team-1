import styles from "@components/checkoutOurNew/checkoutOurNew.module.scss"
import CheckoutCard from "@components/checkoutCard/checkoutCard";
import { useState } from "react";
import classNames from "classnames";

const cardProperties = [
  {
    id: 1,
    image: "/images/card-image-1.jpg",
    price: "5,970",
    title: "Tranquil Haven in the Woods",
    address: "103 Wright CourtBurien, WA 98168",
    bedCount: 4,
    bathCount: 3,
    tag: "Popular",
    icon: "/icons/popular-icon.svg",
  },
  {
    id: 2,
    image: "/images/card-image-2.jpg",
    price: "1,970",
    title: "Serene Retreat by the Lake",
    address: "1964 Jehovah Drive, VA 22408",
    bedCount: 3,
    bathCount: 2,
    tag: "New Listing",
    icon: "/icons/new-listing-icon.svg",
  },
  {
    id: 3,
    image: "/images/card-image-3.jpg",
    price: "3,450",
    title: "Charming Cottage in the Meadow",
    address: "1508 Centennial Farm RoadHarlan, 51537",
    bedCount: 4,
    bathCount: 4,
    tag: "Discounted Price",
    icon: "/icons/discounted-price-icon.svg",
  },
  {
    id: 4,
    image: "/images/card-image-4.jpg",
    price: "2,389",
    title: "Grand Estate on the Hilltop",
    address: "103 Wright CourtBurien, WA 98168",
    bedCount: 4,
    bathCount: 3,
    tag: "Popular",
    icon: "/icons/popular-icon.svg",
  },
];


function CheckOutOurNew() {

  const [isActive, setIsActive] = useState<'all' | 'sell' | 'rent'>('sell');

  const handleClickEvent = (button: 'all' | 'sell' | 'rent') => {
    setIsActive(button);
  }

  return (

    <section className={styles.checkoutOurNew}>

      <div className={styles.checkoutHeader}>
        <div className={styles.leftContent}>
          <p className={styles.sectionName}>CHECKOUT OUR NEW</p>
          <h2 className={styles.sectionTitle}>Latest Listed Properties</h2>
          <p className={styles.sectionDescription}>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.</p>
        </div>
        <div className={styles.rightContent}>
          <button className={classNames(styles.filterButton, { [styles.activeButton]: isActive === 'all' })} onClick={() => handleClickEvent('all')}>All</button>
          <button className={classNames(styles.filterButton, { [styles.activeButton]: isActive === 'sell' })} onClick={() => handleClickEvent('sell')}>Sell</button>
          <button className={classNames(styles.filterButton, { [styles.activeButton]: isActive === 'rent' })} onClick={() => handleClickEvent('rent')}>Rent</button>

        </div>
      </div>

      <div className={styles.cardWrapper}>
        {cardProperties.map((prop) => <CheckoutCard key={prop.id} {...prop} />)}
      </div>
    </section>

  );
}

export default CheckOutOurNew;
