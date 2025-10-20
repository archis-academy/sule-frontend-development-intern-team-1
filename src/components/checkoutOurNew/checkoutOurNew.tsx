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
    icon: "/icons/popular-icon.svg"
  },
  {
    image: "/images/card-image-2.jpg",
    price: "1,970",
    title: "Serene Retreat by the Lake",
    adress: "1964 Jehovah Drive, VA 22408",
    bedCount: 3,
    bathCount: 2,
    tag: "New Listing",
    icon: "/icons/new-listing-icon.svg"
  },
  {
    image: "/images/card-image-3.jpg",
    price: "3,450",
    title: "Charming Cottage in the Meadow",
    adress: "1508 Centennial Farm RoadHarlan, 51537",
    bedCount: 4,
    bathCount: 4,
    tag: "Discounted Price",
    icon: "/icons/discounted-price-icon.svg"
  },
  {
    image: "/images/card-image-4.jpg",
    price: "2,389",
    title: "Grand Estate on the Hilltop",
    adress: "103 Wright CourtBurien, WA 98168",
    bedCount: 4,
    bathCount: 3,
    tag: "Popular",
    icon: "/icons/popular-icon.svg"
  },
];


function CheckOutOurNew() {

  return (

    <section id={styles.checkoutOurNew}>
      <div className={styles.cardWrapper}>
        {cardProperties.map((prop, index) => <CheckoutCard key={index} {...prop} />)}
      </div>
    </section>

  );
}

export default CheckOutOurNew;
