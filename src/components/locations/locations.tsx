import styles from "@components/locations/locations.module.scss";
import LocationsCard from "../locationsCard/locationsCard";

const locationsData = [
    { image: "/images/newyork.jpg", no: 216, city: "New York City, NY" },
    { image: "/images/houston.jpg", no: 141, city: "Houston, TX" },
    { image: "/images/san-diego.jpg", no: 212, city: "San Diego, CA" },
    { image: "/images/philadelphia.jpg", no: 183, city: "Philadelphia, PA" },
    { image: "/images/san-francisco.jpg", no: 112, city: "San Francisco, CA" },
]


function Locations() {

    return (
        <section className={styles.locations}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.secondaryTitle}>AREAS ACROSS THE TOWN</h2>
                <span className={styles.primaryTitle}>Neighborhood Properties</span>
            </div>
            <div className={styles.locationsImageWrapper}>
                {locationsData.map((data) => <LocationsCard key={data.no} {...data} />)}
            </div>
        </section>
    )

}


export default Locations;