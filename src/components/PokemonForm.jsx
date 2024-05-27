

import { useState } from 'react';
import {useNavigate} from "react-router-dom"; //Importing the useNavigate() Hook to this component since it's where we have the action that will be taken by the user (clicking the submit button on the form)

const initialState = {
  name: '',
  weight: 0,
  height: 0,
};

const PokemonForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  //New instance of useNavigate()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPokemon(formData);
    setFormData(initialState);
    navigate("/pokemon"); //NOTE: We are using the instance of useNavigate() that we created and passing the path we wish to redirect the user to as the argument in string format
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default PokemonForm;
