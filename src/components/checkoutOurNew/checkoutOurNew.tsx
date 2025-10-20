import styles from "@components/checkoutOurNew/checkoutOurNew.module.scss"

import CheckoutCard from "../checkoutCard/checkoutCard";

const cardProperties = [
  {
    image: "/images/card-image-1.jpg",
    price: "5,970",
    title: "Tranquil Haven in the Woods",
    adress: "103 Wright CourtBurien, WA 98168",
    bedCount: 4,
    bathCount: 3,
    tag: "Popular",
    icon: "/icons/popular-icon.svg",
    colorIndex: 1,
  },
  {
    image: "/images/card-image-2.jpg",
    price: "1,970",
    title: "Serene Retreat by the Lake",
    adress: "1964 Jehovah Drive, VA 22408",
    bedCount: 3,
    bathCount: 2,
    tag: "New Listing",
    icon: "/icons/new-listing-icon.svg",
    colorIndex: 2,
  },
  {
    image: "/images/card-image-3.jpg",
    price: "3,450",
    title: "Charming Cottage in the Meadow",
    adress: "1508 Centennial Farm RoadHarlan, 51537",
    bedCount: 4,
    bathCount: 4,
    tag: "Discounted Price",
    icon: "/icons/discounted-price-icon.svg",
    colorIndex: 3,
  },
  {
    image: "/images/card-image-4.jpg",
    price: "2,389",
    title: "Grand Estate on the Hilltop",
    adress: "103 Wright CourtBurien, WA 98168",
    bedCount: 4,
    bathCount: 3,
    tag: "Popular",
    icon: "/icons/popular-icon.svg",
    colorIndex: 4,
  },
];


function CheckOutOurNew() {

  return (

    <section id={styles.checkoutOurNew}>

      <div className={styles.checkoutHeader}>
        <div className={styles.leftContent}>
          <p className={styles.sectionName}>CHECKOUT OUR NEW</p>
          <h2 className={styles.sectionTitle}>Latest Listed Properties</h2>
          <p className={styles.sectionDescription}>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.</p>
        </div>
        <div className={styles.rightContent}>
          <button className={styles.filterButton}>All</button>
          <button className={`${styles.filterButton} ${styles.activeButton}`}>Sell</button>
          <button className={styles.filterButton}>Rent</button>
        </div>
      </div>

      <div className={styles.cardWrapper}>
        {cardProperties.map((prop, index) => <CheckoutCard key={index} {...prop} />)}
      </div>
    </section>

  );
}

export default CheckOutOurNew;
