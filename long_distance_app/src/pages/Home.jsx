import React from "react";
import "../CSS/home.css";

function Home() {
  return (
    <div className="container">
      <div className="cont banner">
        <div className="banner-text">
          <h2>Do not let distance set us apart!!!</h2>
          <p>
            Easily manage and organize your belongings across multiple
            "Wardrobes". Plan what to pack, where to leave it, and never forget
            your essentials again. Perfect for long-distance relationships —
            keep life simple and connected.
          </p>
        </div>
      </div>
      <div className="cont content">
        <div className="contsub"></div>
        <div className="contsub inside"></div>
        <div className="contsub inside"></div>
        <div className="contsub"></div>
      </div>
    </div>
  );
}

export default Home;
