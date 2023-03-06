const LOCATION = document.getElementById('location');
const CURRENT_TEMP = document.getElementById('temp');
const MIN_TEMP = document.getElementById('min-temp');
const MAX_TEMP = document.getElementById('max-temp');
const FEELS = document.getElementById('feels');
const WEATHER = document.getElementById('weather');
const WEATHER_ICON = document.getElementById('weather-icon');

function PopulateDOM(data) {
  LOCATION.textContent = data.location;
  CURRENT_TEMP.textContent = data.temp;
  WEATHER.textContent = data.weather;
  FEELS.textContent = data.feel;
  MIN_TEMP.textContent = data.minTemp;
  MAX_TEMP.textContent = data.maxTemp;
  WEATHER_ICON.textContent = data.icon;
}

export { PopulateDOM };