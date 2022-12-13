import React from "react";
import "./Header.css";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import useDarkMode from "../ToggleMode/useDarkMode";

const Header = () => {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <div className='container'>
            <h1>devfinder</h1>
            <button
                id='mode-btn'
                className='mode-btn'
                onClick={() => toggleDarkMode()}>
                <p>{darkMode ? "Dark" : "Light"}</p>
                <img
                    src={darkMode ? moon : sun}
                    alt='mode-icon'
                    className='mode-icon'
                />
            </button>
        </div>
    );
};

export default Header;
