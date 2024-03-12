import React from "react";
import {useState} from "react"; 
import {Link} from "react-router-dom";
import Navbar from "./Navbar";

const Menu = () => {
    const [menuVisible, setMenuVisible] = useState(false) //It will be a boolean becauce menu items will not be visible when page first renders

    const toggleMenu =() => {
        setMenuVisible(!menuVisible); 
    }; 
return (

    <div> 

<Link to='/navbar' className="navbar-brand" onClick={toggleMenu}>  </Link>

<div className={`menu-container ${menuVisible ? "show" : "hide"}`}></div>



    </div>
)

 }




export default Menu; 