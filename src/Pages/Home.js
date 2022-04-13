import React, { useState } from "react";
import Style from "../Styles/Home.module.scss";
import { useQuery } from "react-query";
import Card from "../Components/AuthoreCard/Card";

const handleAuthorsData = async (page) => {
  const res = await fetch(`https://api.quotable.io/authors?page=${page}`);
  return res.json();
};

const Home = () => {
  const [page, setPage] = useState(1);

  const { isLoading, data } = useQuery(
    ["Authors", page],
    () => handleAuthorsData(page),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={Style.home}>
      <div className="container-fluid">
        <div className="row gy-5">
          {data.results.map((author) => {
            return (
              <div className="col-xl-3 col-md-4 col-sm-6" key={author._id}>
                <Card author={author} />
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
    </div>
  );
};

export default Home;
