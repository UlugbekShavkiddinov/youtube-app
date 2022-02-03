import React from "react";
import './Home.scss'

import Sidebar from "../../Components/Sidebar/sidebar";
import Main from "../../Components/Main/Main";


function Home() {

    return (
        <div className="home">
            <Sidebar />
            <Main />
        </div>
    )
}

export default Home;