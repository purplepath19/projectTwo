import { useState } from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/home.png"
import Image from "../assets/woman.user.png"
import aboutImg from "../assets/about.png"
import adminImg from "../assets/admin.png"
import apiImg from "../assets/api.png"

const Navbar = () => {
  const [navbarCollapse, setNavbarCollapse] = useState(true);
  const toggleNavbar = () => {
    setNavbarCollapse(!navbarCollapse);
  };

  return (
    // .navbar class followed by responsive collapsing class: .navbar-expand
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
{/* Home Icon Link */}
      <Link to="/" className="navbar-brand">
      <img src={myImage} className="about-image" alt="image-icon" /> 
       </Link>
       {/* User Admin Icon Link */}
      <Link to="/useradmin" className="useradmin">
           <img src={adminImg} className="about-image" alt="image-icon" /> 
        </Link>
    

      {/* <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"> </span>
      </button> */}
      <div
        className={`collapse navbar-collapse ${navbarCollapse ? "" : "show"}`} //Not working TBA later 
      >


        <div className="flex-grid"> 
        <ul className="navbar-nav">
    
    
{/* User Icon Link */}
          <li className="navbar-item">
            <Link to="/create-user"> 
            <img src={Image} className="about-image" alt="image-icon" /> 
             </Link>
          </li>

{/* About Icon Link */}
          <li className="navbar-item">
            <Link to="/about"> 
            <img src={aboutImg} className="about-image" alt="image-icon" /> 
            </Link>
          </li>

  {/* API Icon Link */}
          <li className="navbar-item">
            <Link to="/api-links" > 
            <img src={apiImg} className="about-image" alt="image-icon" /> 
            </Link>
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
