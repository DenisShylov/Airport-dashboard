import { GET_CURRENT_DATE, GET_FLIGHTS_LIST } from './FlightActions';

const initialState = {
  flightList: [],
  currentDate: new Date(),
  isFetching: false,
};

// eslint-disable-next-line default-param-last
const FlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHTS_LIST:
      return {
        ...state,
        isFetching: true,
        flightList: action.payload,
        isFetching: false,
      };

    case GET_CURRENT_DATE:
      return {
        ...state,
        isFetching: true,
        currentDate: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default FlightReducer;
