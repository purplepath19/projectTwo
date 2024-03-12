import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [navbarCollapse, setNavbarCollapse] = useState(true);
  const toggleNavbar = () => {
    setNavbarCollapse(!navbarCollapse);
  };

  return (
    // .navbar class followed by responsive collapsing class: .navbar-expand
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/menu" className="navbar-brand"> Menu </Link>
    

      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div
        className={`collapse navbar-collapse ${navbarCollapse ? "" : "show"}`} //Not working TBA later 
      >


        <div className="flex-grid"> 
        <ul className="navbar-nav">
          {/* LOGO Commented out for now  */}
          {/* <li className="navbar-logo">
          <a className="logo-item"> Logo </a>
        </li> */}

    

          <li className="navbar-item">
            <Link to="/create-user" className="nav-link"> Create User </Link>
          </li>

          <li className="navbar-item">
            <Link to="/about" className="nav-link"> About </Link>
          </li>

          {/* <li className="navbar-item">
            <Link to="/apis" className="nav-link"> APIS </Link>
          </li> */}
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
