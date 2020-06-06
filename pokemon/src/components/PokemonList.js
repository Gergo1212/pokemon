import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class PokemonList extends Component {

    state = {
        pokemonList: []
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => this.setState({pokemonList: response.data.results})
            )
    }

    getIdFromUrl = (item) => {
        const splittedUrl = item.url.split('/')
        return splittedUrl[splittedUrl.length - 2];
    }

    render() {
        return (
            this.state.pokemonList.map((item, number) => (
                <Link to={`/pokemon/${this.getIdFromUrl(item)}`}>
                    <li key={this.getIdFromUrl(item)}>{item.name}</li>
                </Link>
            ))
        )
    }
}

export default PokemonList;