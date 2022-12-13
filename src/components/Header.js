import React from "react";
import {Link} from "react-router-dom";

import h from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <h2>Switch project</h2>
            <div className={h.switch}>
                <Link to="/">Home</Link>
                <Link to="/drop">Drag and Drop</Link>
                <Link to="/calculator">Calculator</Link>
                <Link to="/color">Color Hex</Link>
                <Link to="/register">Authorization</Link>
            </div>
        </header>
    )

}

export {Header};
