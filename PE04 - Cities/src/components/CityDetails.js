import React from 'react';
import { useParams } from 'react-router-dom';

const CityDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities.find((city) => city.id === parseInt(id));

  return (
    <div>
      {city ? (
        <div className="city-details">
          <h3>{city.name}</h3>
          <p>Country: {city.country}</p>
          <p>Population: {city.population}</p>
        </div>
      ) : (
        <p style={{ color: 'red' }}>City not found! Please go back to the list.</p>
      )}
    </div>
  );
};

export default CityDetails;
