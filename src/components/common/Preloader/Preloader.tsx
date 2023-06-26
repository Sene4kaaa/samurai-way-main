import React from "react";
import preloader from "../../../assets/images/giphy.gif";

export const Preloader = () => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader}/>
    </div>
}