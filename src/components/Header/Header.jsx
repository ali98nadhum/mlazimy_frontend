import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode/ToggleDarkMode";
import { useState } from "react";
import Container from "../Container/Container";

const Header = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div>
      <Container>
      <header className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to={"/about"}> حول المنصه </Link>
              </li>
              <li>
                <Link to={"/training"}> فرص التدريب </Link>
              </li>
              <li>
                <Link to={"/category"}>المواد الدراسيه</Link>
              </li>
              <li>
                <Link to={"/"}> الرئيسيه </Link>
              </li>
            </ul>
          </nav>
          <div className="btn_dark">
            <ToggleDarkMode />
          </div>
          <div className="hamburger_menu">
            <input
              type="checkbox"
              id="checkbox"
              onClick={() => setShowModel(!showModel)}
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </header>
      </Container>
      {showModel && (
        <div className="model">
          <div className="btn_dark">
            <ToggleDarkMode />
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to={"/"}> الرئيسيه </Link>
              </li>
              <li>
                <Link to={"/category"}> المواد</Link>
              </li>
              <li>
                <Link to={"/training"}> فرص التدريب </Link>
              </li>
              <li>
                <Link to={"/about"}> حول المنصه </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
