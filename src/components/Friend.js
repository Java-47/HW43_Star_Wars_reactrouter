import React from 'react'
import { Link } from 'react-router-dom';
import style from '../css_modules/borderRound.module.css';
import { characters } from '../utils/constants';

const Friend = ({ friend, number }) => {
    let friendStyle = 'col-4 p-1';

    if (number === 7) {
        friendStyle += style.bottomLeft;
    }
    if (number === 9) {
        friendStyle += style.bottomRight;
    }
    return (
     
           <Link to={`/home/${friend}`} replace className={friendStyle}>
            <img className='col-12' src={characters[friend].img} alt={characters[friend].name}/>
           </Link>


    )
}

export default Friend