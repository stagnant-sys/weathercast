import { GetWeatherData } from "./weatherData";

const LOCATION = document.getElementById('location');
const CURRENT_TEMP = document.getElementById('temp');
const MIN_TEMP = document.getElementById('min-temp');
const MAX_TEMP = document.getElementById('max-temp');
const WEATHER = document.getElementById('weather');

function PopulateDOM(data) {
  LOCATION.textContent = data.location;
}

export { PopulateDOM };