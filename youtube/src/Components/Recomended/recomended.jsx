import './recomended.scss'

import React from 'react';
import { NavLink } from 'react-router-dom'

// images
import Arrows from '../../Libs/images/Arrows.svg'

function Recomended() {
    const [users, setUsers] = React.useState({});

    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const datas = await response.json();
                const data = datas.slice(6, 9)


                if (data?.length > 0) {
                    setUsers([...data]);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])


    return (
        <div className="main__user recomended">
            <div className="main__top">
                <h3 className="main__user accounts">
                    Recomended
                </h3>
                <div className="main__buttons">
                    <img src={Arrows} alt="" />
                </div>
            </div>

            <div className="user-media-recomended">
                {users.length > 0 &&
                    users.map((user) => (
                        <div className="media__item-recomended">
                            <NavLink to={'/video/' + user.id} className='navlink'>
                                <div className="media__img-recomended">
                                    <img src={user.url} alt="" />
                                </div>
                                <p className="media-title-recomended">{user.title}</p>
                            </NavLink>
                            <div className="media__details-recomended">
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

export default Recomended;
