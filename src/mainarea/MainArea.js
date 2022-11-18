import React from "react";
import Lside from "./left-side/L-side";
import Middle from "./middle/Middle";
import Rside from "./right-side/R-side";
import "./MainArea.css";


function MainArea() {
    return (
        <div className="Main">
            {/* <Lside /> */}
            {/* <Middle /> */}
            <Rside />
        </div>
    )
}
export default MainArea