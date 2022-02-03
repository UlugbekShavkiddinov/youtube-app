import React from "react";

import './Header.scss'

// images
import User from '../../Libs/images/user.svg'
import Search from '../../Libs/images/search.svg'
import Menu from '../../Libs/images/Mneu.svg'
import Logo from '../../Libs/images/Black.svg'
import Dottes from '../../Libs/images/dottes.svg'
import Ring from '../../Libs/images/ring.svg'
import Video from '../../Libs/images/video.svg'


function Header() {

    return (
        <header className="header">
            <div className="header__menu">
                <img src={Menu} alt="" />
            </div>
            <div className="header__logo">
                <img src={Logo} alt="" />
            </div>
            <div className="header__search">
                <input type="search" placeholder="Search" className="header__search_input" />
                <div className="header__search_icon">
                    <img src={Search} alt="" />
                </div>
            </div>
            <ul className="header__stmh">
                <li>
                    <img src={Video} alt="" />
                </li>
                <li>
                    <img src={Dottes} alt="" />
                </li>
                <li>
                    <img src={Ring} alt="" />
                </li>
                <li>
                    <img src={User} alt="" />
                </li>
            </ul>



        </header>
    )
}

export default Header;