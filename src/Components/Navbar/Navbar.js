import React, { useState } from "react";
import Style from "./Navbar.module.scss";

const Navbar = () => {
  const [sort, setSort] = useState(true);
  const [sort2, setSort2] = useState(false);

  const handleSort = (sortValue) => {
    console.log(sortValue);
    if (sortValue === 1) {
      setSort(true);
      setSort2(false);
    }

    if (sortValue === 2) {
      setSort2(true);
      setSort(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar__btn}>
        <p>Sort By name</p>
        <button
          disabled={sort}
          onClick={() => handleSort(1)}
          className={Style.btn1}
        >
          A - Z
        </button>
        <button
          disabled={sort2}
          onClick={() => handleSort(2)}
          className={Style.btn2}
        >
          Z - A
        </button>
      </div>
    </div>
  );
};

export default Navbar;
