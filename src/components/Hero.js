import React from 'react';
import { characters } from '../utils/constants';

const Hero = ({hero}) => {
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={characters[hero].img} alt={characters[hero].name} />
        </section>
    )
}

export default Hero