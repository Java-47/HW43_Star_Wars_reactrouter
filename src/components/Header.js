import React from 'react'
import { characters } from '../utils/constants'
import Navigation from './Navigation'

const Header = ({hero}) => {
    return (
        <header>
            <Navigation hero={hero}/>
            <h1 className="text-center py-4">{characters[hero].name}</h1>
        </header>
    )
}

export default Header