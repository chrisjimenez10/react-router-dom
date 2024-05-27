//Import
import {useParams} from "react-router-dom";


const PokemonDetails = (props) => {
 
  // const params = useParams(); 
  // console.log(params)
    //Here, we are desctructuring the useParams() that has the data being stored in the route parameter and it is an object
    const {pokemonId} = useParams();

    //Here, we are using the find() method to identify the pokmeon by its "id" from the array of pokemon being passed to this component with the "id" value being passed from the route parameter --> The "Number" function that has the route parameter as the argument is used to convert the String datatype of the route parameter into a Number datatype
    const singlePokemon = props.pokemon.find((poke)=>{return poke._id === Number(pokemonId)});

    console.log("Pokemon Object:", singlePokemon);

    return (
      <>
        <h2>{singlePokemon.name}</h2>
        <dl>
          <dt>Weight:</dt>
          <dd>{singlePokemon.weight}</dd>
          <dt>Height:</dt>
          <dd>{singlePokemon.height}</dd>
        </dl>
      </>
    );
  };
  
  export default PokemonDetails;
  