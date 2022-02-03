import './Sidebar.scss'

import { NavLink } from 'react-router-dom'
import React from 'react'
import Users from '../../users'

// images 
import User1 from '../../Libs/images/user1.svg'
import User2 from '../../Libs/images/user2.svg'
import User3 from '../../Libs/images/user3.svg'
import User4 from '../../Libs/images/user4.svg'
import User5 from '../../Libs/images/user5.svg'
import User6 from '../../Libs/images/user6.svg'
import Setting from '../../Libs/images/settings.svg'



function Sidebar() {

    return (
        <>
            <div className="sidebar ">
                <ul className="pages menu-names">
                    <li className='pages__home'>Home</li>
                    <li className='pages__trending'>Trending</li>
                    <li className='pages__subsictirptors'>Subscriptions</li>
                </ul>
                <ul className="detailss menu-names">
                    <li className="details__library">Library</li>
                    <li className="details__history">History</li>
                    <li className="details__watch">Wtach lates</li>
                    <li className="details__favourite">Favouries</li>
                    <li className="details__liked">Liked videos</li>
                    <li className="details__music">Music</li>
                    <li className="details__game">Games</li>
                    <li className="details__more">Show more</li>
                </ul>
                <h3 className='subs'>Subscriptions</h3>

                <ul className="subs__list ">

                    <li>
                        <NavLink to={'/channel'} className='navlink'>
                            <img src={User1} alt="" />
                            <p className='menu-names'>Gussie Singleton</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/channel'} className='navlink'>
                            <img src={User2} alt="" />
                            <p className='menu-names'>Nora Francis</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/channel'} className='navlink'>
                            <img src={User3} alt="" />
                            <p className='menu-names'>Belle Briggs</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/channel'} className='navlink'>
                            <img src={User4} alt="" />
                            <p className='menu-names'>Eunice Cortez</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/channel'} className='navlink'>
                            <img src={User5} alt="" />
                            <p className='menu-names'>Emma Hanson</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/channel'} className='navlink'>
                            <img src={User6} alt="" />
                            <p className='menu-names'>Leah Berry</p>
                        </NavLink>
                    </li>
                </ul>




            </div>
        </>
    )
}

export default Sidebar;