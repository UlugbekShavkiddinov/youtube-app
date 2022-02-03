import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'

//  Pages
import Home from './Pages/Home/Home'
import Channel from './Pages/Channel/Channel'
import Video from './Pages/Video/Video'
import Login from "./Pages/Login/login";

// Components
import Header from "./Components/Header/Header";


function AuthenticatedApp() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='' element={<Navigate to='/home' />} />
                <Route path='/home' element={< Home />} />
                <Route path='/channel' element={< Channel />} />
                <Route path='/video/:id' element={< Video />} />
                <Route path='/login' element={< Login />} />
            </Routes>

        </>
    )
}

export default AuthenticatedApp