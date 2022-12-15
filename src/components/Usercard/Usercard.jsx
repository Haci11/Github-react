import React from "react";
import "./Usercard.css";
import Location from "../../assets/icon-location.svg";
import Company from "../../assets/icon-company.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Website from "../../assets/icon-website.svg";
const Usercard = ({ data }) => {
  return (
    <div className="usercard-container">
      <img className="usercard-img" src={data.img} alt="" />
      <div className="usercard-head">
        <h4 className="head-name">
          {!data.name ? "Not Available" : data.name}
        </h4>
        <p className="head-joined">Joined {data.joined}</p>
        <p className="head-login">@{data.login}</p>
      </div>
      <div className="usercard-body">
        <p className="usercard-bio">
          {!data.bio ? "This profile has no bio" : data.bio}
        </p>
        <div className="usercard-repo">
          <div>
            <p className="repo-title">Repo</p>
            <p className="repo-text">{data.repo}</p>
          </div>
          <div>
            <p className="repo-title">Followers</p>
            <p className="repo-text">{data.followers}</p>
          </div>
          <div>
            <p className="repo-title">Following</p>
            <p className="repo-text">{data.following}</p>
          </div>
        </div>
      </div>
      <div className="usercard-footer">
        <div className="footer-info">
          <img className="footer-icon" src={Location} alt="" />
          <p className="footer-text">
            {!data.location ? "Not Available" : data.location}
          </p>
        </div>

        <div className="footer-info">
          <img className="footer-icon" src={Twitter} alt="" />
          <p className="footer-text">
            {!data.twitter ? "Not Available" : data.twitter}
          </p>
        </div>

        <div className="footer-info">
          <img className="footer-icon" src={Website} alt="" />
          <p className="footer-text">
            {!data.blog ? "Not Available" : data.blog}
          </p>
        </div>

        <div className="footer-info">
          <img className="footer-icon" src={Company} alt="" />
          <p className="footer-text">
            {!data.company ? "Not Available" : data.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
