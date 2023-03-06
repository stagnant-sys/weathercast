import './style.css';
import { PopulateDOM } from './populateDOM';

// Global variables
let units = 'metric';
let mainData;
const FORM = document.getElementById('userInputForm');
const USER_LOCATION = document.getElementById('userLocation');


// WEATHER DATA
// Get weather datas
async function GetWeatherObject(location, units) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=56275265321a72bf87e1fa7566ad28dd`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    throw new Error('Error', {cause: error});
  }
}

// Store relevant weather datas
function GetMainData(obj) {
  try  {
    mainData = {
      location: obj.name,
      country: obj.sys.country,
      weather: obj.weather[0].description,
      weatherType: obj.weather[0].main,
      temp: Math.round(obj.main.temp),
      minTemp: Math.round(obj.main.temp_min),
      maxTemp: Math.round(obj.main.temp_max),
      feel: Math.round(obj.main.feels_like),
      icon: obj.weather[0].icon,
    };
  } catch (error) {
    throw new Error('Error', {cause: error});
  }
}

// Chain the two previous functions
async function GetWeatherData(location, units) {
  console.log('Loading...');
  try {
    const object = await GetWeatherObject(location, units);
    await GetMainData(object);
    console.log(mainData);
  } catch (error) {
    throw new Error('Error', {cause: error});
  }
}

// GET USER INPUT TO GET DATA AND UPDATE DISPLAY
FORM.addEventListener('submit', async (e) => {
  e.preventDefault();
  await GetWeatherData(USER_LOCATION.value, units);
  await PopulateDOM(mainData);
});



// Display background depending on weather
