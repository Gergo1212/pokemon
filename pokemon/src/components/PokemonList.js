import React, {Component} from 'react';
import axios from 'axios';

class PokemonList extends Component {

    state = {
        pokemonList: []
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => this.setState({pokemonList: response.data.results}))
    }

    render() {
        const names = this.state.pokemonList.map((item, key) => (
            <li key={key}>{item.name}</li>
        ));
        return (
            <ul>{names}</ul>
        );
    }
}

export default PokemonList;