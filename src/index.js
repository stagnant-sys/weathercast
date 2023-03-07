import './style.css';
import { PopulateDOM } from './populateDOM';

// Global variables
let units = 'metric';
let mainData;
let userLocation = 'Genève';
const LOADING_SCREEN = document.querySelector('.loading-screen');
const FORM = document.getElementById('userInputForm');
const USER_LOCATION_INPUT = document.getElementById('userLocation');
const METRIC_TOGGLE = document.querySelector('.metric-toggle');
const IMPERIAL_TOGGLE = document.querySelector('.imperial-toggle');


// INITIAL PAGE
async function LoadInitialPage(location) {
  await GetWeatherData(location, units);
  await PopulateDOM(mainData, units);
}

LoadInitialPage('Genève');

// LOADING SCREEN


// UNITS TOGGLE BUTTONS
METRIC_TOGGLE.addEventListener('click', async (e) => {
  units = 'metric';
  METRIC_TOGGLE.classList.add('active');
  IMPERIAL_TOGGLE.classList.remove('active');
  await GetWeatherData(userLocation, units);
  await PopulateDOM(mainData, units);
});

IMPERIAL_TOGGLE.addEventListener('click', async (e) => {
  units = 'imperial';
  IMPERIAL_TOGGLE.classList.add('active');
  METRIC_TOGGLE.classList.remove('active');
  await GetWeatherData(userLocation, units);
  await PopulateDOM(mainData, units);
});

// WEATHER DATA
// Get weather datas
async function GetWeatherObject(location, units) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=56275265321a72bf87e1fa7566ad28dd`, {mode: 'cors'});
    const weatherData = await response.json();
    userLocation = await location;
    //console.log(weatherData);
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
  LOADING_SCREEN.style.display = 'flex';
  try {
    const object = await GetWeatherObject(location, units);
    await GetMainData(object);
    await function () {LOADING_SCREEN.style.display = 'none';}();
    //console.log(mainData);
  } catch (error) {
    alert('We could\'t find this city...');
    await function () {LOADING_SCREEN.style.display = 'none';}();
    throw new Error('Error', {cause: error});
  }
}

// GET USER INPUT TO GET DATA AND UPDATE DISPLAY
FORM.addEventListener('submit', async (e) => {
  e.preventDefault();
  userLocation = USER_LOCATION_INPUT.value;
  await GetWeatherData(userLocation, units);
  await PopulateDOM(mainData, units);
});



// Display background depending on weather
