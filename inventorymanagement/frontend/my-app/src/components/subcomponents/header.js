import React from "react";
import logo from '../image/log.png'; 

const headerStyle = {
  backgroundColor: "#0a1659", 
  color: "white",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  boxShadow: "none", 
  padding: "0.5rem 0",
  display: "flex", 
  justifyContent: "space-between", 
  marginBottom: '10px'
};

const linkStyle = {
  color: "white", 
  textDecoration: "none", 
  margin: "0 1rem", 
};

const logoStyle = {
  height: "100px", 
  marginRight: "2rem", 
  verticalAlign: "middle", 
};


export default function Header() {
  return (
    <>
      <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
        <nav className="navbar">
          <div style={{ display: "flex" }}>
            <a href="#" style={linkStyle}>HOME</a>
            <a href="#" style={linkStyle}>DOCTOR RESERVATION</a>
            <a href="#" style={linkStyle}>BLOG</a>
            <a href="#" style={linkStyle}>PET REGISTRATION</a>
            <a href="#" style={linkStyle}>DONATION</a>
          </div>
        </nav>
      </header>
      <div style={{ paddingTop: "130px" }}>
        {/* All other page content should go here */}
      </div>
    </>
  );
}
