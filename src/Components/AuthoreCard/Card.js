import React from "react";
import Style from "./Card.module.scss";

const Card = ({ author }) => {
  const { name, description, link } = author;

  return (
    <div className={Style.card}>
      <div className={Style.wrapper}>
        <div className={Style.card__name}>
          <span>{name}</span>
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
