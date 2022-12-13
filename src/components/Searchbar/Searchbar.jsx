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
      console.log(data);
      saveData(data);
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
