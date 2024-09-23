import React, { useEffect, useState } from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") !== "dark") {
      setDark();
      toast.success("Switched to Dark Mode!");
    } else {
      setLight();
      toast.success("Switched to Light Mode!");
    }
    setDarkMode(!darkMode);
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <h1 className="header-title">
        <Link to="/" style={{ textDecoration: 'none', color: '#ffffff' }}>
          CryptoScreener<span className="highlight">.</span>
        </Link>
      </h1>
      <div className="links-container">
        <div className="links">
          <Switch checked={darkMode} onClick={changeMode} className="theme-switch" />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p className="link">Home</p>
          </Link>
          <Link to="/compare" style={{ textDecoration: 'none' }}>
            <p className="link">Compare</p>
          </Link>
          <Link to="/watchlist" style={{ textDecoration: 'none' }}>
            <p className="link">Watchlist</p>
          </Link>
        </div>
      </div>
      <Link to="/dashboard">
        <Button text={"Dashboard"} className="dashboard-button" />
      </Link>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
