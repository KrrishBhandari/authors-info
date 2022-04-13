import React, { useState } from "react";
import Style from "../Styles/Home.module.scss";
import { useQuery } from "react-query";
import Card from "../Components/AuthoreCard/Card";
import LoadingCard from "../Components/LoadingCard/LoadingCard";
import Navbar from "../Components/Navbar/Navbar";

const handleAuthorsData = async (page, Order) => {
  const res = await fetch(
    `https://api.quotable.io/authors?page=${page}&order=${Order}`
  );
  return res.json();
};

const Home = () => {
  const [page, setPage] = useState(1);
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const loadingScreen = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const { isLoading, data } = useQuery(
    ["Authors", page, sortOrder],
    () => handleAuthorsData(page, sortOrder),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className={Style.home}>
          <div className="container-fluid">
            <div className="row gy-5">
              {loadingScreen.map((item, index) => {
                return (
                  <div className="col-xl-3 col-md-4 col-sm-6" key={index + 1}>
                    <LoadingCard />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar setSortOrder={setSortOrder} />
      <div className={Style.home}>
        <div className="container-fluid">
          <div className="row gy-5">
            {data.results.map((author) => {
              return (
                <div className="col-xl-3 col-md-4 col-sm-6" key={author._id}>
                  <Card
                    author={author}
                    setPopup={setPopup}
                    setName={setName}
                    setQuote={setQuote}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className={Style.btn__wrapper}>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Prev page
          </button>
          <p>{page}</p>
          <button onClick={() => setPage(page + 1)} disabled={page === 35}>
            Next page
          </button>
        </div>

        <div
          className={`${Style.popup__Container} ${
            popup ? `${Style.active}` : ""
          }`}
        >
          <div className={Style.popup}>
            <div className={Style.popup__title}>
              <h4>Read quote of {name}</h4>
              <div
                className={Style.title__icon}
                onClick={() => setPopup(false)}
              >
                <box-icon name="x" color="RGB(187, 134, 252)"></box-icon>
              </div>
            </div>
            <div className={Style.popup__quote}>
              <p>{quote}</p>
            </div>
            <div className={Style.popup__closeBtn}>
              <span></span>
              <div className={Style.popup__wrapper}>
                <button onClick={() => setPopup(false)}>Close</button>
                <button onClick={() => setPopup(false)}>
                  Copy to Clipboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
