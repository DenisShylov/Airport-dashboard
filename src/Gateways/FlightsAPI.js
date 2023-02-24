const BASE_URL = 'https://api.iev.aero/api/flights';

const flyFetching = async (date) => {
  const response = await fetch(`${BASE_URL}/${date}`);
  const data = await response.json();
  return data;
};

export default flyFetching;
