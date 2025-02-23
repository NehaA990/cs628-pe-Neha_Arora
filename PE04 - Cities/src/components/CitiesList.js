import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CitiesList = ({ cities }) => {
  return (
    <div>
      <h2>City List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cities.map((city) => (
          <li style={{ margin: '10px 0' }} key={city.id}>
            <Link to={`city/${city.id}`} className="city-link">
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
      
      {/* This will render CityDetails within the CitiesList layout */}
      <Outlet />
    </div>
  );
};

export default CitiesList;
