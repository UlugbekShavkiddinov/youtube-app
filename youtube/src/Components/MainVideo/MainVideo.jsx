import './MainVideo.scss'

import React from 'react'
import { useParams } from 'react-router-dom'
import Users from '../../users'




// images 
import Food from '../../Libs/images/food.svg'

function MainVideo() {

    const { id } = useParams();

    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos/' + id)
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            });
    }, [id]);


    return (
        <div className="main_video">
            <div className="video__img">
                <img src={user.url} alt="" />
            </div>
            <div className="video__details">

                <div className="video__names">
                    <p className='accounts'>{user.title}</p>
                    <p className='view'>123k views</p>
                </div>
                <div className="video__likes">
                    <button className='like'>125k</button>
                    <button className='dislike'>423k</button>
                    <button className='share'>share</button>
                </div>
            </div>
            <div className="video-owner">
                <div className="owner__img">
                    <img src={Food} alt="" />
                </div>
                <div className="video-owner__text">
                    <div className='accounts'>Food & Drink</div>
                    <span className='details'>Published on 14 Jun 2019</span>
                    <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                    <p className='video__more'>Show more</p>
                </div>
                <button className="video-owner__btn">Subscribe 2.3m</button>
            </div>
        </div>
    )
}

export default MainVideo;