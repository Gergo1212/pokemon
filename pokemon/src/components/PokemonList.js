import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function PokemonList() {
    const [pokemonList, setPokemonList] = useState();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => setPokemonList(response.data.results))
    },[pokemonList]);

    const getIdFromUrl = (item) => {
        const splittedUrl = item.url.split('/')
        return splittedUrl[splittedUrl.length - 2];
    }

        const flexContainerStyle = {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'DodgerBlue',
        };

        const flexDivStyle = {
            backgroundColor: '#f1f1f1',
            width: '30%',
            margin: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            lineHeight: '75px',
            fontSize: '30px'
        }

        return (
            <div style={flexContainerStyle}>
                {pokemonList.map((item) => (
                <Link to={`/pokemon/${getIdFromUrl(item)}`}>
                    <li style={flexDivStyle} key={getIdFromUrl(item)}>{item.name}</li>
                </Link>
                ))}
            </div>
        );
}

export default PokemonList;