import './MainSidebar.scss'

import React from 'react';
import { NavLink } from 'react-router-dom'

// images
import Button from '../../Libs/images/button.svg'

function MainSidebar() {
    const [users, setUsers] = React.useState({});

    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const datas = await response.json();
                const data = datas.slice(14, 18)


                if (data?.length > 0) {
                    setUsers([...data]);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])


    return (
        <div className="video__user">
            <div className="video__top">
                <div className="video__userr">
                    <p className='accounts'>Next</p>
                </div>
                <div className="video__buttons">
                    <span>AUTOPLAY</span>
                    <img src={Button} alt="" />
                </div>
            </div>

            <div className="user-video">
                {users.length > 0 &&
                    users.map((user) => (
                        <div className="video__item">
                            <NavLink to={'/video/' + user.id} className='navlink'>
                                <div className="video__img">
                                    <img src={user.thumbnailUrl} alt="" />
                                </div>
                                <p className="video-title">{user.title}</p>
                            </NavLink>
                            <div className="video__details">
                                <span className="details">100k views</span>
                                <span className="details">Dollie Blair</span>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default MainSidebar;