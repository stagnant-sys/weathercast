let mainData;

// Get weather datas
async function GetWeatherObject(location, units) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=56275265321a72bf87e1fa7566ad28dd`, {mode: 'cors'});
    const weatherData = await response.json();
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
      temp: obj.main.temp,
      minTemp: obj.main.temp_min,
      maxTemp: obj.main.temp_max,
      feel: obj.main.feels_like,
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

export { GetWeatherObject, GetMainData, GetWeatherData };