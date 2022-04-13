import React from "react";
import Style from "./Card.module.scss";

const Card = ({ author, setPopup, setName, setQuote }) => {
  const { name, description, link, bio } = author;

  const handlePopupData = (getName, getBio) => {
    setPopup(true);
    setName(getName);
    setQuote(getBio);
  };

  return (
    <div className={Style.card}>
      <div className={Style.wrapper}>
        <div className={Style.card__name}>
          <span onClick={() => handlePopupData(name, bio)}>{name}</span>
        </div>
        <div className={Style.card__dec}>
          <p>{description}</p>
        </div>
      </div>

      <div className={Style.btn__wrapper}>
        <span></span>

        <a href={link} target="_blank" rel="noreferrer">
          <div className={Style.icon}>
            <box-icon name="link-external" color="#99ffff"></box-icon>
          </div>
          <span> Know More</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
