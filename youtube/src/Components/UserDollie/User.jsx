import './User.scss'

import React from 'react';
import { NavLink } from 'react-router-dom'
import Users from '../../users'

// images
import User from '../../Libs/images/dollie.svg'
import Arrows from '../../Libs/images/Arrows.svg'

function UserDollie() {
    const [users, setUsers] = React.useState({});

    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const datas = await response.json();
                const data = datas.slice(0, 6)


                if (data?.length > 0) {
                    setUsers([...data]);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])




    return (
        <div className="main__user">
            <div className="main__top">
                <NavLink to={'/channel'} className='navlink'>
                    <div className="main__user">
                        <img src={User} alt="" />
                        <p className='accounts'>Dollie Blair</p>
                    </div>
                </NavLink>
                <div className="main__buttons">
                    <img src={Arrows} alt="" />
                </div>
            </div>

            <div className="user-media">
                {users.length > 0 &&
                    users.map((user) => (
                        <div className="media__item">
                            <NavLink key={user.id} to={'/video/' + user.id} className='navlink'>
                                <div className="media__img">
                                    <img src={user.thumbnailUrl} alt="" />
                                </div>
                                <p className="media-title">{user.title}</p>
                            </NavLink>

                            <div className="media__details">
                                <span className="details">100k views</span>
                                <span className="details">3 days ago</span>
                                <span className="details">Dollie Blair</span>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default UserDollie;