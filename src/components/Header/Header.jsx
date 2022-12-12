import React from "react";
import "./Header.css";
import moon from "../../assets/icon-moon.svg";
// import sun from "../../assets/icon-sun.svg";

const Header = () => {
    return (
        <div className='container'>
            <h1>devfinder</h1>
            <button id='mode-btn' className='mode-btn-container'>
                <p>DARK</p>
                <img src={moon} alt='mode-icon' />
            </button>
        </div>
    );
};

export default Header;
