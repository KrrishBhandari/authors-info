import React from "react";
import Style from "../Styles/Home.module.scss";
import { useQuery } from "react-query";
import Card from "../Components/AuthoreCard/Card";

const handleAuthorsData = async () => {
  const res = await fetch("https://api.quotable.io/authors");
  return res.json();
};

const Home = () => {
  const { isLoading, data } = useQuery("Authors", handleAuthorsData, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

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
        {console.log(data.results)}
      </div>
    </div>
  );
};

export default Home;
