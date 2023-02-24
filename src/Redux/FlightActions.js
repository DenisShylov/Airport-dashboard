import flyFetching from '../Gateways/FlightsAPI';

export const GET_FLIGHTS_LIST = 'GET_FLIGHTS_LIST';
export const GET_CURRENT_DATE = 'GET_CURRENT_DATE';

export const getList = (data) => {
  return {
    type: GET_FLIGHTS_LIST,
    payload: data,
  };
};

export const getCurrentDate = (date) => {
  return { type: GET_CURRENT_DATE, payload: date };
};

export const fetchDataList = (date) => {
  return async (dispatch) => {
    dispatch(getList(await flyFetching(date).then((data) => data)));
  };
};
