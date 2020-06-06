import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PokemonList from "./components/PokemonList";
import Pokemon from "./components/Pokemon";

function App() {
    return (
        <div className="App">
        <Router>
            <Route path='/pokemons'>
                <div>This is the pokemons route!!</div>
                <PokemonList/>
            </Route>
            <Route exact path='/'>
                <div>This the main page</div>
            </Route>
            <Route path='/types'>
                <div>Pokemon Type</div>
            </Route>
            <Route path={'/pokemon/:id'}>
                <div>Pokemon with id</div>
                <Pokemon/>
            </Route>
        </Router>
        </div>
    );
}

export default App;
