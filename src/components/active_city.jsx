import React from 'react';

class ActiveCity extends React.Component{
  render(){
    return (
      <div className="active-city">
        <h3>{this.props.city.name}</h3>
        <p>{this.props.city.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`} alt='city' />
      </div>
    );
  }
};

export default ActiveCity;
