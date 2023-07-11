import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";

export const Header = () => {
  return (
    <div className="header-container">
      <a href="/">
        <img src={logo} alt="logo Kasa" />
      </a>
      <nav className="header-nav">
        <ul>
          <NavLink to="/" activeclassname="active">
            <li>Accueil</li>
          </NavLink>

          <NavLink to="/about" activeclassname="active">
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
