import React from "react";
import libraryImage from "./pic/library_white.jpg";
import "./CSS/main.css";
import "./CSS/Home_css.css";

function Home() {
    return (
        <div className="backgroundimg" style={{ backgroundImage: `url(${libraryImage})` }}>
            <h1 className="bigtext">
                Velkommen til
                Book Guardian
            </h1>
        </div>
    );
}

export default Home;
