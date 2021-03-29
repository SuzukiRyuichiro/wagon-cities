import React from 'react';

class City extends React.Component{
  render(){
    return (
      <p>
        {this.props.city.name}
      </p>
    );
  }
};

export default City;
