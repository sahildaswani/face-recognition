import React from 'react';
import Tilt from 'react-tilt';
import "./Logo.css";
import brain from "./brain-icon.png";

const Logo = () => {
    return(
        <div className="ma4">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img className="pt2" src={brain} alt=""/></div>
            </Tilt>
        </div>
    );
}

export default Logo