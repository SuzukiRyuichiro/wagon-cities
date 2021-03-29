// TODO: add and export your own actions

// this is just an array of cities
import cities from '../cities';

export function setCities() {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function selectCity(city) {
  return {
    type: 'SELECT_CITY',
    payload: city
  }
}
