import {
  GET_CURRENT_DATE,
  GET_FLIGHTS_LIST,
  GET_SEARCH_FLIGHT,
  SHOW_SPINNER,
  SHOW_CALENDAR,
} from './FlightActions';

const initialState = {
  flightList: {
    body: {
      departure: [],
      arrival: [],
    },
  },
  searchFlight: [],
  currentDate: new Date(),
  showCalendar: false,
  isFetching: false,
};

// eslint-disable-next-line default-param-last
const FlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, isFetching: true };
    case GET_FLIGHTS_LIST:
      return {
        ...state,

        flightList: action.payload,
        isFetching: false,
      };

    case GET_CURRENT_DATE:
      return {
        ...state,

        currentDate: action.payload,
        isFetching: false,
      };

    case SHOW_CALENDAR:
      return { ...state, showCalendar: !state.showCalendar };

    case GET_SEARCH_FLIGHT:
      return { ...state, searchFlight: action.payload };

    default:
      return state;
  }
};

export default FlightReducer;
