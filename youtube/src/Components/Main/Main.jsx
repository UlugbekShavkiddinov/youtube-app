import './Main.scss';

import React from 'react';

// components
import UserDollie from '../UserDollie/User';
import Recomended from '../Recomended/recomended';
import RecomendedChannel from '../RecomendedChannel/RecomendedChannel';




function Main() {
    return (
        <div className="main">
            <UserDollie />
            <Recomended />
            <RecomendedChannel />
        </div>
    )
}

export default Main;