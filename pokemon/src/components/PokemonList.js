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
                {this.state.pokemonList.map((item) => (
                <Link to={`/pokemon/${this.getIdFromUrl(item)}`}>
                    <li style={flexDivStyle} key={this.getIdFromUrl(item)}>{item.name}</li>
                </Link>
                ))}
            </div>
        );
    }
}

export default PokemonList;