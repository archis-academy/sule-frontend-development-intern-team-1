import "./Partners.scss";

interface Partner {
  name: string;
  logo: string;
  alt: string;
}

const partners: Partner[] = [
  { name: "Google", logo: "/public/Partners/google.png", alt: "Google logo" },
  { name: "Amazon", logo: "/public/Partners/amazon.png", alt: "Amazon logo" },
  { name: "Logitech", logo: "/public/Partners/logitech.png", alt: "Logitech logo" },
  { name: "Spotify", logo: "/public/Partners/spotify.png", alt: "Spotify logo" },
  { name: "Samsung", logo: "/public/Partners/samsung.png", alt: "Samsung logo" },
  { name: "Netflix", logo: "/public/Partners/netflix.png", alt: "Netflix logo" },
];

export const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__container">
        <h2 className="partners__title">
          Trusted by 100+ Companies across the globe!
        </h2>

        <div className="partners__logos">
          {partners.map((partner) => (
            <figure key={partner.name} className="partners__item">
              <img
                src={partner.logo}
                alt={partner.alt}
                loading="lazy"
                className="partners__image"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
