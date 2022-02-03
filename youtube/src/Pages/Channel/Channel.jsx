import React from "react";
import './Channel.scss'

// components 
import Sidebar from "../../Components/Sidebar/sidebar";
import ChannelMain from "../../Components/ChannelMain/ChannelMain";

function Channel() {

    return (
        <div className="channel">
            <Sidebar />
            <ChannelMain />

        </div>
    )
}

export default Channel;