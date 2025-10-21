import React from "react";
import "./secondaryHeader.scss";
import { MapPin,Phone,Mail } from "lucide-react";


const SecondaryHeader: React.FC = () => {
  return (
    <div className="secondary-header">
      <div className="secondary-header__location">
        <div className="secondary-header__icon">
          <MapPin color="#FFFFFF" />
        </div>
        <span className="secondary-header__text">
          Rezilla, 18 Grattan St, Brooklyn
        </span>
      </div>
      <div className="secondary-header__contact">
        <div className="secondary-header__phone">
            <div className="secondary-header__phoneIcon">
                <Phone color="#FFFFFF"/>
            </div>
            <a href="tel:+12062142298" className="secondary-header__number">
  +1 206-214-2298
</a>
        </div>
        <div className="secondary-header__email">
            <div className="secondary-header__emailIcon">
                <Mail color="#FFFFFF"/>
            </div>
            <a href="mailto:support@rezilla.com" className="secondary-header__emailText">
  support@rezilla.com
</a>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
