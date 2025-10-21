import React from "react";
import "./secondaryHeader.scss";
import { MapPin } from "lucide-react";
import phone from "../../../public/icon _phone_.png"
import mail from "../../../public/icon _mail_.png"

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
                <img src={phone} alt="phone icon"/>
            </div>
            <span className="secondary-header__number">
            +1 206-214-2298
            </span>
        </div>
        <div className="secondary-header__email">
            <div className="secondary-header__emailIcon">
                <img src={mail} alt="phone icon"/>
            </div>
            <span className="secondary-header__emailText">
            support@rezilla.com
            </span>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
