import React, { useState } from "react";
import Style from "./Navbar.module.scss";

const Navbar = ({ setSortOrder }) => {
  const [sort, setSort] = useState(true);
  const [sort2, setSort2] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const handleSort = (sortValue) => {
    if (sortValue === 1) {
      setSortOrder("asc");
      setSort(true);
      setSort2(false);
      setNavMenu(false);
    }

    if (sortValue === 2) {
      setSortOrder("desc");
      setSort2(true);
      setSort(false);
      setNavMenu(false);
    }
  };

  const handleMenu = () => {
    setNavMenu(true);
  };

  return (
    <div className={Style.navbar}>
      <h2>Authors-Info</h2>

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

      <div className={Style.navbar__icon} onClick={handleMenu}>
        <box-icon name="menu" color="#ffffff"></box-icon>
      </div>
      <div className={`${Style.main} ${navMenu ? `${Style.navMenu}` : null}`}>
        <div className={Style.navmenu__title}>
          <h2>Authors-Info</h2>
          <div
            className={Style.navmenu__icon}
            onClick={() => setNavMenu(false)}
          >
            <box-icon name="x" color="#ffffff"></box-icon>
          </div>
        </div>

        <div className={Style.navmenu__btn}>
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
    </div>
  );
};

export default Navbar;
