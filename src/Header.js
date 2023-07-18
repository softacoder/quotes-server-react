import React from "react";
import headerImg from "./image/authors.jpg";

function Header() {
  return (
    <div>
      <div className="img-div">
        <img src={headerImg} alt="header-img" className="header-img" />
      </div>
      <h1 className="header-title">Quotes Server by softacoder</h1>
    </div>
  );
}

export default Header;
