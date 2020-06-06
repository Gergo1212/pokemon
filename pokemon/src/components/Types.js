import React, {Component} from 'react';
import axios from 'axios'

class Types extends Component {
    state = {
        types: []
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(response => this.setState({types: response.data.results}))
    }

    render() {
        return (
            this.state.types.map((item, number) => (
                <li key={number}>{JSON.stringify(item)}</li>
            ))
        );
    }
}

export default Types;