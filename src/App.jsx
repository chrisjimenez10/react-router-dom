//Import
import { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import NavBar from './components/NavBar';
import PokemonForm from './components/PokemonForm';
import {Route, Routes} from "react-router-dom"; //NOTE: Routes component is the container holding all the individual Route Components (Route: URL Path and Component to be Rendered)

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

//Component
const App = () => {

  //State
  const [pokemon, setPokemon] = useState(initialState);

  //Functions
  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1; //Here, we are assigning the newly created pokemon an "id" property and giving it the value of the length of the current pokmeon array + 1 (We do this here because we are not dealing witha databse)
    setPokemon([...pokemon, newPokemonData]);
  };

  return (
    
    <>
      
      <h1>Pokemon!</h1>

      <NavBar />
      {/* The Routes component is the container that will hold INSIDE all of our individual Routes (Include both OPENING and CLOSING tags) */}
      <Routes>
        {/* The Route component is self closing - Here, we can build a Route and in the "element" prop instead of including a component, we can render what ever we put inside the curly braces */}
        <Route path="/" element={<h2>Home Page</h2>} />
        {/* The Route component has two parts: 1.The "path" prop, which indicates the URL path (location) to the content that is rendered at that URL path - 2.The "element" prop, which indicates the actual Component that is rendered at that location (The value is the Component itself enclosed in curly braces) */}
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />

        {/* This Route is for the PokemonDetails component that will display the selected pokemon BASED on the ._id of the pokemon - Therefore, in the path prop, we MUST include the route parameter that dynamically will match/hold that unique ._id of the selected pokemon */}
        <Route path="/pokemon/:pokemonId" element={<PokemonDetails pokemon={pokemon}/>} />

        <Route path="/pokemon/new" element={<PokemonForm addPokemon={addPokemon}/>} />

        {/* This is our default path that will capture any URL path that is non existent (in other words, if the route has not been defined by us, then this route will capture those URL inputs) */}
        <Route path="*" element={<h2>Whoops, Nothing Here!</h2>} />

      </Routes>

    </>

  );
};

export default App;


