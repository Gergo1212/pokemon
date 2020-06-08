import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";

function Types() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(response => setTypes(response.data.results))
    })

    const iter = types.map((item, number) => (
        <Link to={item.url} key={number}>
            <li>{item.name} </li>
        </Link>
    ))

    return (
        <div>{iter}</div>
    )
}

export default Types;