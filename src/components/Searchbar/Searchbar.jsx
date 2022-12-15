import { useState, useEffect } from "react";
import img from "../../assets/icon-search.svg";
import "./Searchbar.css";

const Searchbar = ({ saveData }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fetchUserData("octocat");
    }
    fetchData();
  }, []);

  async function fetchUserData(username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (data.message === "Not Found") {
      setError(true);
    } else {
      setError(false);
      const date = new Date(data.created_at);
      const formattedDate = date.toLocaleDateString("en-Gb", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      let dataObj = {
        img: data.avatar_url,
        name: data.name,
        joined: formattedDate,
        login: data.login,
        bio: data.bio,
        repo: data.public_repos,
        followers: data.followers,
        following: data.following,
        location: data.location,
        twitter: data.twitter_username,
        blog: data.blog,
        company: data.company,
      };
      saveData(dataObj);
      setUsername("");
    }
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetchUserData(username);
  }
  return (
    <form className="searchbar-container" onSubmit={handleSubmit}>
      <img className="searchbar-icon" src={img} alt="" />
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search GitHub username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      {error && <span className="searchbar-error">No results</span>}
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
