import React from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';

const city =   { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' };

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity city={city} />
    </div>
  );
};

export default App;
