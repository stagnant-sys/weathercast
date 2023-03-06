const LOCATION = document.getElementById('location');
const COUNTRY = document.getElementById('country');
const CURRENT_TEMP = document.getElementById('temp');
const MIN_TEMP = document.getElementById('min-temp');
const MAX_TEMP = document.getElementById('max-temp');
const FEELS = document.getElementById('feels');
const WEATHER = document.getElementById('weather');
const WEATHER_ICON = document.getElementById('weather-icon');
const BACKGROUND = document.getElementById('background');

const CapitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function PopulateDOM(data, units) {
  let tempUnit = units === 'metric' ? 'C' : 'F'; 
  LOCATION.textContent = data.location;
  COUNTRY.textContent = data.country;
  CURRENT_TEMP.textContent = data.temp + '°' + tempUnit;
  WEATHER.textContent = CapitalizeString(data.weather);
  FEELS.textContent = data.feel  + '°' + tempUnit;
  MIN_TEMP.textContent = data.minTemp  + '°' + tempUnit;
  MAX_TEMP.textContent = data.maxTemp  + '°' + tempUnit;
  WEATHER_ICON.src = `http://openweathermap.org/img/wn/${data.icon}@4x.png`;
  let backgroundColor;
  switch (data.weatherType) {
    case 'Clear':
      backgroundColor = '#e8f7fd';
      break;
    case 'Clouds':
      backgroundColor = '#dbdfe3';
      break;
    case 'Snow':
      backgroundColor = '#efefef';
      break;
    case 'Sand':
    case 'Dust':
      backgroundColor = '#f6d7b0';
      break;
    default:
      backgroundColor = '#d2d9db';
  }
  BACKGROUND.style.backgroundColor = backgroundColor;
}

export { PopulateDOM };