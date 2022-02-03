import React from "react";
import './Video.scss'

// components
import MainVideo from "../../Components/MainVideo/MainVideo";
import MainSidebar from "../../Components/MainSidebar/MainSidebar";


function Video() {

    return (
        <div className="video">
            <MainVideo />
            <MainSidebar />
        </div>

    )
}

export default Video;