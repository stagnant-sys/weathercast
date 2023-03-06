import './style.css';
import { GetWeatherObject, GetMainData, GetWeatherData } from './weatherData';
import { PopulateDOM } from './populateDOM';

// Global variables
let units = 'metric';
let mainData;
let weatherData;
const FORM = document.getElementById('userInputForm');
const USER_LOCATION = document.getElementById('userLocation');


// Get user input to get weather data
FORM.addEventListener('submit', async (e) => {
  e.preventDefault();
  await GetWeatherData(USER_LOCATION.value, units);
});

// Display data on page


// Display background depending on weather
