import './RecomendedChannel.scss'

import React from 'react';
import { NavLink } from 'react-router-dom'
import Users from '../../users'

// images
import Food from '../../Libs/images/food.svg'
import Arrows from '../../Libs/images/Arrows.svg'

function RecomendedChannel() {
    const [users, setUsers] = React.useState({});

    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const datas = await response.json();
                const data = datas.slice(10, 16)



                if (data?.length > 0) {
                    setUsers([...data]);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])




    return (
        <div className="main__user recomendedchannel">
            <div className="main__top">
                <NavLink to={'/channel'} className='navlink'>
                    <div className="main__user">
                        <img src={Food} alt="" />
                        <p className='accounts'>Food & Drink</p>
                        <span className='recomendedu'>Recommended channel for you</span>
                    </div>
                </NavLink>
                <div className="main__buttons">
                    <button className='main__button1'>Subscribe 2.3m</button>
                    <img src={Arrows} alt="" className='arrow-img' />
                </div>
            </div>

            <div className="user-media">
                {users.length > 0 &&
                    users.map((user) => (
                        <div className="media__item">
                            <NavLink to={'/video/' + user.id} className='navlink'>
                                <div className="media__img">
                                    <img src={user.thumbnailUrl} alt="" />
                                </div>
                                <p className="media-title">{user.title}</p>
                            </NavLink>
                            <div className="media__details">
                                <span className="details">100k views</span>
                                <span className="details">3 days ago</span>
                                <span className="details">Food & Drink</span>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default RecomendedChannel;