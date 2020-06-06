import React, {Component} from 'react';
import axios from 'axios';

class Pokemon extends Component {

    state = {
        pokemonAttribution: [],
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.getIdFromWindowUrl()}`)
            .then(response => this.setState({pokemonAttribution: response.data.abilities}))
    }

    getIdFromWindowUrl = () => {
        const splittedUrl = window.location.href.split('/')
        return splittedUrl[splittedUrl.length - 1];
    }


    render() {
        return (
            <div>
                This is the unique pokemon page!!!
                <div>
                    {this.state.pokemonAttribution.map((item) => (
                        <li>{item.ability.name}</li>
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokemon;