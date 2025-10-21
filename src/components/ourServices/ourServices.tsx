import styles from "@components/ourServices/ourServices.module.scss";
import OurServicesCard from "../ourServicesCard/ourServicesCard";

const ourServicesCards = [
    {
        id: 1,
        icon: "/icons/our-services-icon-1.svg",
        title: "Buy a New Home",
        text: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
    },
    {
        id: 2,
        icon: "/icons/our-services-icon-2.svg",
        title: "Sell a House",
        text: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
    },
    {
        id: 3,
        icon: "/icons/our-services-icon-3.svg",
        title: "Rent a House",
        text: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
    }
]



function OurServices() {
    return (
        <section className={styles.ourServices}>
            <div className={styles.ourServicesContent}>
                <div className={styles.ourServicesHeader}>
                    <p className={styles.sectionTitle}>OUR SERVICES</p>
                    <h2 className={styles.mainTitle}>Donec porttitor euismod dignissim</h2>
                </div>
                <div className={styles.ourServicesWrapper}>
                    {ourServicesCards.map((prop) => <OurServicesCard key={prop.id} {...prop} />)}
                </div>
            </div>
        </section>
    )
}

export default OurServices;