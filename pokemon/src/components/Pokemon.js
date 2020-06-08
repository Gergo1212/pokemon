import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Pokemon() {

    const [abilities, setAbilities] = useState();
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${getIdFromWindowUrl()}`)
            .then(response => setAbilities(response.data.abilities))
    })


    const getIdFromWindowUrl = () => {
        const splittedUrl = window.location.href.split('/')
        return splittedUrl[splittedUrl.length - 1];
    }

    return (
        <div>
            This is the unique pokemon page!!!
            <div>
                {abilities.map((item) => (
                    <li>{item.ability.name}</li>
                ))}
            </div>
        </div>
    );
}

export default Pokemon;