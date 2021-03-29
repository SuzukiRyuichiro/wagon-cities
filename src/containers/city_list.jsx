import React from 'react';
import City from './city';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';


export class CityList extends React.Component{
  render(){
    return (
      <div className="cities">
        {this.props.cities.map(city => <City city={city} key={city.name}/>)}
      </div>
    );
  }

  componentWillMount() {
    this.props.setCities();
  }
};

function mapReduxStateToProps(state) {
  return {
    cities: state.cities
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
