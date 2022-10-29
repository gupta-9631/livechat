import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Crazy Chat</span>
      <div className="user">
        <img
          src="https://images.fineartamerica.com/public/images/overview/homeDecor/duvetCovers001.jpg"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
