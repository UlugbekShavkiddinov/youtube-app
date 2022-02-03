import './ChannelMain.scss'

import React from 'react'
import { NavLink } from 'react-router-dom'


// Components
import ChannelVideos from '../ChannelVideos/ChannelVideos'

// images
import Hero from '../../Libs/images/hero.svg'
import Search from '../../Libs/images/search.svg'
import Flora from '../../Libs/images/flora.svg'
import Violet from '../../Libs/images/violet.svg'
import Philip from '../../Libs/images/philip.svg'
import Margaret from '../../Libs/images/Margaret.svg'


function ChannelMain() {
    const [users, setUsers] = React.useState({});

    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const datas = await response.json();
                const data = datas.slice(14, 15)

                if (data?.length > 0) {
                    setUsers([...data]);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])


    return (
        <div className="channelMain">
            <div className="hero">
                <img src={Hero} alt="" />
            </div>
            <div className="channel-owner">
                <div className="channel__img">
                    <img src={Margaret} alt="" />
                </div>
                <div className="channel-owner__text">
                    <p className='accounts'>Margaret Phelps</p>
                    <span className='details'>245K subscribed</span>
                </div>
                <button className="channel-owner__btn">Subscribe 2.3m</button>
            </div>
            <div className="channel-center">
                <div className="center__left">
                    <ul className="channel__navbar">
                        <li>Home</li>
                        <li>Videos</li>
                        <li>Playlists</li>
                        <li>Channels</li>
                        <li>Discussion</li>
                        <li>About</li>
                        <li><img src={Search} alt="" /></li>
                    </ul>
                    <div className="left__info">
                        {users.length > 0 &&
                            users.map((user) => (
                                <>
                                    <NavLink to={'/video/' + user.id}>
                                        <div className="left__img">
                                            <img src={user.url} />

                                        </div>
                                    </NavLink>
                                    <div className="left__text">
                                        <h2>{user.title}</h2>
                                        <p>Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                                        <span>11k views 6month ago</span>
                                    </div>
                                </>
                            ))}
                    </div>
                </div>
                <div className="center__right">
                    <p>Recomended channel</p>
                    <ul className="recomended-channels">
                        <li>
                            <img src={Flora} alt="" />
                            <p>Flora Benson</p>
                        </li>
                        <li>
                            <img src={Violet} alt="" />
                            <p>Violet Cobb</p>
                        </li>
                        <li>
                            <img src={Philip} alt="" />
                            <p>Phillip Mullins</p>
                        </li>
                    </ul>
                </div>
            </div>
            <ChannelVideos />
        </div>
    )
}

export default ChannelMain;