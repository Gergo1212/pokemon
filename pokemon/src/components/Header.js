import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {ThemeContext} from "../ThemeContext";
import AppTheme from "../Colors";
import ThemeToggler from "../ThemeToggler";

function Header() {

    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme]


    return (
        <div style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
        }}>
            <ThemeToggler/>
            <Link to={'/pokemons'}>Pokemons</Link> <br/>
            <Link to={'/types'}>Types</Link> <br/>
            <Link to={'/'}>Main Page</Link>
        </div>
    );
}

export default Header;