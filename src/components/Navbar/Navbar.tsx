import "./style.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLogo">
        <span>H</span>OURS
      </div>
      <div className="nav-items">
        <button className="nav-item">Dashboard</button>
        <button className="nav-item">Projects</button>
      </div>
      <div className="navProfileSection">
        <div className="navProfileImage">
          <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="navProfileName">Rupam</div>
      </div>
    </div>
  );
};

export default Navbar;
