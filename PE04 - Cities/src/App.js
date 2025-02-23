import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // No need for BrowserRouter here

import './App.css';

import CitiesList from './components/CitiesList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';

const App = () => {
  const [cities, setCities] = useState([
    { id: 1, name: 'Seattle', country: 'USA', population: '733,919' },
    { id: 2, name: 'New York', country: 'USA', population: '8,398,748' },
  ]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Cities Application</h1>
      </header>

      <nav className="navigation">
        <Link to="/">Cities List</Link> | 
        <Link to="/add-city">Add City</Link>
      </nav>

      <div className="app-body">
        <Routes>
          {/* Nested Route: CityDetails is displayed inside CitiesList */}
          <Route path="/" element={<CitiesList cities={cities} />}>
            <Route path="city/:id" element={<CityDetails cities={cities} />} />
          </Route>
          {/* Route for adding a new city */}
          <Route path="/add-city" element={<AddCity setCities={setCities} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
