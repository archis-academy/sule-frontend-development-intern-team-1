import styles from "@components/ctaBanner/ctaBanner.module.scss";

function CTABanner() {
    return (
        <section className={styles.ctaBanner}>
            <img className={styles.vector1} src="/icons/vector-1.svg" alt="vector-1" />
            <div className={styles.ctaBannerContent}>
                <div className={styles.photoWrapper}>
                    <img className={styles.photo} src="/images/profile-photo.png" alt="profile-photo" />
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.textWrapper}>
                        <h2 className={styles.title}>Become a Agent</h2>
                        <p className={styles.text}>Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque.</p>
                    </div>
                    <button className={styles.registerButton}>Register Now</button>
                </div>
                <img className={styles.vector2} src="/icons/vector-2.svg" alt="vector-2" />
                <img className={styles.vector3} src="/icons/vector-3.svg" alt="vector-3" />
            </div>
        </section>
    )
}

export default CTABanner;