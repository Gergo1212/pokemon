import React, {Component} from 'react';
import axios from 'axios';

class Pokemon extends Component {

    state = {
        pokemonAttribution: []

    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.getIdFromWindowUrl()}`)
            .then(response => this.setState({pokemonAttribution: response.data}))
    }

    getIdFromWindowUrl = () => {
        const splittedUrl = window.location.href.split('/')
        return splittedUrl[splittedUrl.length - 1];
    }


    render() {
        //console.log(this.state.pokemonAttribution)
        return (
            <div>
                This is the unique pokemon page!!!
                <div></div>
            </div>
        );
    }
}

export default Pokemon;