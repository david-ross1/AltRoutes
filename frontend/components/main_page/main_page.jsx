import React from "react";
import SearchBarContainer from "../search/search_container";
import TrailIndexContainer from "../../components/trails/trail_index_container";

const MainPage = () => {
  return (
    <div>
      <div className="main-page">
        <div className="main-page-content">
          <h1 className="find-next-text">Find your next trail</h1>
          <div className="searchtainer">
            <SearchBarContainer />{" "}
          </div>
        </div>
      </div>
      <TrailIndexContainer />

      <div className="main-page-sub">
        <h2>Pick the right trail for your day</h2>
        <div className="phone-flex">
          <div className="phone"></div>
          <p className="phone-text">
            All our trails are verified by experts and reviewed by our global
            community of adventurers like you. <br /> <br />
          </p>
        </div>
      </div>
      <div className="main-page-2-img-container">
        <div className="main-page2"></div>
        <div className="main-page-content2"></div>
      </div>
    </div>
  );
};

export default MainPage;
