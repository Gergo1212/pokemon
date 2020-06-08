import React from 'react';
import {Link} from "react-router-dom";

function Header (){

        return (
            <div>
                <Link to={'/pokemons'}>Pokemons</Link> <br/>
                <Link to={'/types'}>Types</Link> <br/>
                <Link to={'/'}>Main Page</Link>
            </div>
        );
}

export default Header;