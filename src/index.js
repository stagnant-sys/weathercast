import './style.css';

let weatherData;
let mainData;
let units = 'metric';

// Get weather datas
async function GetWeatherObject(location, units) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=56275265321a72bf87e1fa7566ad28dd`, {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
    //console.log(weatherData);
  } catch (error) {
    throw new Error('Error', {cause: err});
  }
}


// Store weather datas
function GetMainData(obj) {
  mainData = {
    location: obj.name,
    country: obj.sys.country,
    weather: obj.weather[0].description,
    temp: obj.main.temp,
    minTemp: obj.main.temp_min,
    maxTemp: obj.main.temp_max,
    feel: obj.main.feels_like,
  };
}

async function GetWeatherData(location) {
  console.log('Loading...');
  const object = await GetWeatherObject(location, units);
  await GetMainData(object);
  console.log(object);
  console.log(mainData);
}

GetWeatherData('London');
// Display weather


// Display background