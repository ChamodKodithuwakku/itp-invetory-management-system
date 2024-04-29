import React from "react";

const footerStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "blue",
  color: "white", // Assuming you want white text for contrast
  textAlign: "center", // This centers the text in the footer
  padding: "10px 0" // Add some padding to give some height and vertical spacing
};

const contentStyle = {
  paddingBottom: "50px", // Adjust this value to match the height of your footer
};

export default function Footer() {
  return (
    <div style={contentStyle}>
      <footer style={footerStyle}>
        <div className="container-fluid">
          <span>Footer Content</span>
        </div>
      </footer>
    </div>
  );
}
