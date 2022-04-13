import React from "react";
import Style from "./Loading.module.scss";

const LoadingCard = () => {
  return (
    <>
      <div className={Style.card}>
        <div className={Style.wrapper}>
          <div className={Style.card__name}></div>
          <div className={Style.card__dec}></div>
        </div>

        <div className={Style.btn__wrapper}>
          <span></span>

          <a target="_blank" rel="noreferrer">
            <div className={Style.icon}></div>
            <span> Know More</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LoadingCard;
