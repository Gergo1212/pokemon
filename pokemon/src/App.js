import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PokemonList from "./components/PokemonList";
import Pokemon from "./components/Pokemon";
import Types from './components/Types';
import Header from "./components/Header";
import ThemeContext from "./ThemeContext";

function App() {
    const theme = 'light';


    return (
        <ThemeContext.Provider value={theme}>
            <div className="App">
                <Router>
                    <Route path='/'>
                        <div>This is the header</div>
                        <Header/>
                    </Route>
                    <Route path='/pokemons'>
                        <div>This is the pokemons route!!</div>
                        <PokemonList/>
                    </Route>
                    <Route path='/types'>
                        <div>Pokemon Type</div>
                        <Types/>
                    </Route>
                    <Route path={'/pokemon/:id'}>
                        <div>Pokemon with id</div>
                        <Pokemon/>
                    </Route>
                </Router>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
