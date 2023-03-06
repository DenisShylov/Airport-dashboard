import flyFetching from '../Gateways/FlightsAPI';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const GET_FLIGHTS_LIST = 'GET_FLIGHTS_LIST';
// export const GET_CURRENT_DATE = 'GET_CURRENT_DATE';
export const GET_SEARCH_FLIGHT = 'GET_SEARCH_FLIGHT';
export const SHOW_CALENDAR = 'SHOW_CALENDAR';

export const showSpinner = () => {
  return { type: SHOW_SPINNER };
};

export const getList = (data) => {
  return {
    type: GET_FLIGHTS_LIST,
    payload: data
  };
};

// export const getCurrentDate = (date) => {
//   return { type: GET_CURRENT_DATE, payload: date };
// };

export const getFilteredData = (data) => {
  return { type: GET_SEARCH_FLIGHT, payload: data };
};

export const showCalendar = () => {
  return { type: SHOW_CALENDAR };
};

export const fetchDataList = (date) => {
  return async (dispatch) => {
    dispatch(showSpinner());
    dispatch(getList(await flyFetching(date).then((data) => data)));
  };
};
