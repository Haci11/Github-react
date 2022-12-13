import { useState, useEffect } from "react";
import img from "../../assets/icon-search.svg";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <form className="searchbar-container">
      <img className="searchbar-icon" src={img} alt="" />
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search GitHub username"
        name="username"
      />
      {/* <span className="searchbar-error">No results</span> */}
      <button className="searchbar-btn">Search</button>
    </form>
  );
};

export default Searchbar;
