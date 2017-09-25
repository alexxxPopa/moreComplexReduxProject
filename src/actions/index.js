import axios from 'axios';

export const FETCH_WEATHER='FETCH_WEATHER';

const API_KEY = 'a058b40de4dd0ce28f2978bf6175201a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(URL);

  console.log('Request is', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}