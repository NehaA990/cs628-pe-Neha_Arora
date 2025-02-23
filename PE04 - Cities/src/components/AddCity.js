import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCity = ({ setCities }) => {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCity = {
      id: Date.now(), // Generate a unique ID based on timestamp
      name: cityName,
      country,
      population,
    };

    setCities((prevCities) => [...prevCities, newCity]);

    // Redirect to Cities List
    navigate('/');
  };

  return (
    <div>
      <h2>Add a New City</h2>
      <form onSubmit={handleSubmit}>
        <label>
          City Name:
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Population:
          <input
            type="number"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
