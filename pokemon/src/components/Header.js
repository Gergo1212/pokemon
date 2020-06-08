import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    const headerStyles = {
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

    return (
        <div>
            <header style={headerStyles}>
                <h1>Context API</h1>
                <ThemeToggler/>
            </header>
            <Link to={'/pokemons'}>Pokemons</Link> <br/>
            <Link to={'/types'}>Types</Link> <br/>
            <Link to={'/'}>Main Page</Link>
        </div>
    );
}

export default Header;