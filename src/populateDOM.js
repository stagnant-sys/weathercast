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
  let backgroundImagePath;
  switch (data.weatherType) {
    case 'Clear':
      backgroundImagePath = './images/clear.jpg';
      //backgroundColor = '#e8f7fd';
      break;
    case 'Clouds':
      backgroundImagePath = './images/clouds.jpg';
      //backgroundColor = '#dbdfe3';
      break;
    case 'Snow':
      backgroundImagePath = './images/snow.jpg';
      //backgroundColor = '#efefef';
      break;
    case 'Sand':
    case 'Dust':
      //backgroundColor = '#f6d7b0';
      break;
    default:
      backgroundImagePath = './images/rain.jpg';
      //backgroundColor = '#d2d9db';
  }
  BACKGROUND.style.backgroundImage = `url(${backgroundImagePath})`;
}

export { PopulateDOM };