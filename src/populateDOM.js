const LOCATION = document.getElementById('location');
const COUNTRY = document.getElementById('country');
const CURRENT_TEMP = document.getElementById('temp');
const MIN_TEMP = document.getElementById('min-temp');
const MAX_TEMP = document.getElementById('max-temp');
const FEELS = document.getElementById('feels');
const WEATHER = document.getElementById('weather');
const WEATHER_ICON = document.getElementById('weather-icon');
const BACKGROUND = document.getElementById('background');
const PHOTO_CREDIT = document.querySelector('.photo-credit');
const QUOTE_BLOCK = document.querySelector('.quote-block');

let quotes = [
  'We need clear days to see the horizons; we need foggy nights to see beyond the horizons! Man sometimes can think much deeper when he sees less! - Mehmet Murat Ildan',
  'Anyone who says sunshine brings happiness has never danced in the rain.',
  'Your thoughts and your perception of the world influences all that you do, and all that you are, and all that you can be. If you see the sunshine, feel the sunshine then you feel good. But if your focus is only on the clouds and the dark sky then you may find yourself a bit gloomy. - Catherine Pulsifer',
  'Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather. - John Ruskin',
  'Wherever you go, no matter what the weather, always bring your own sunshine. - Anthony J. D\'Angelo',
  'Climate is what we expect, weather is what we get. - Mark Twain',
  'There\'s no such thing as bad weather, just soft people. - Bill Bowerman',
  'Sometimes I wish that I was the weather, you\'d bring me up in conversation forever. And when it rained, I\'d be the talk of the day. - John Mayer',
  'Everybody talks about the weather, but nobody does anything about it. - Charles Dudley Warner',
  'Who cares about the clouds when we\'re together? Just sing a song and bring the sunny weather. - Dale Evans',
  'The weather and my mood have little connection. I have my foggy and my fine days within me; my prosperity or misfortune has little to do with the matter. - Blaise Pascal',
  'I briefly did therapy, but after a while, I realised it is just like a farmer complaining about the weather. You can\'t fix the weather - you just have to get on with it. - Douglas Adams',
  'Weather forecast for Jupiter\'s South Equatorial Belt: cloudy with a chance of ammonia. - Heidi Hammel',
  'Don\'t knock the weather; nine-tenths of the people couldn\'t start a conversation if it didn\'t change once in a while. - Kin Hubbard',
  'You can\'t get mad at weather because weather\'s not about you. Apply that lesson to most other aspects of life. - Douglas Coupland',
  'In the Spring, I have counted 136 different kinds of weather inside of 24 hours. - Mark Twain'
];

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
      PHOTO_CREDIT.innerHTML = `Picture by <a href="https://unsplash.com/@andreilazarev">Andrei Lazarev</a> on <a href="https://unsplash.com/photos/YXYbkRNwbkM">Unsplash</a>`;
      //backgroundColor = '#e8f7fd';
      break;
    case 'Clouds':
      backgroundImagePath = './images/clouds.jpg';
      PHOTO_CREDIT.innerHTML = `Picture by <a href="https://unsplash.com/@ankur1verma">Ankur Verma</a> on <a href="https://unsplash.com/photos/vXU_wJ7YmNc">Unsplash</a>`;
      //backgroundColor = '#dbdfe3';
      break;
    case 'Snow':
      backgroundImagePath = './images/snow.jpg';
      PHOTO_CREDIT.innerHTML = `Picture by <a href="https://unsplash.com/@jknepp">Jonathan Knepper</a> on <a href="https://unsplash.com/photos/9GMO0Sxyw_Y">Unsplash</a>`;
      //backgroundColor = '#efefef';
      break;
    case 'Sand':
    case 'Dust':
      backgroundImagePath = './images/dust.jpg';
      PHOTO_CREDIT.innerHTML = `Picture by <a href="https://unsplash.com/@meric">Meriç Dağlı</a> on <a href="https://unsplash.com/photos/pTTfhaLeomQ">Unsplash</a>`;
      //backgroundColor = '#f6d7b0';
      break;
    default:
      backgroundImagePath = './images/rain.jpg';
      PHOTO_CREDIT.innerHTML = `Picture by <a href="https://unsplash.com/@simeonmuller">Simeon Muller</a> on <a href="https://unsplash.com/photos/Io9VYJorLuc">Unsplash</a>`;
      //backgroundColor = '#d2d9db';
  }
  BACKGROUND.style.backgroundImage = `url(${backgroundImagePath})`;
  let rdnNumber = Math.round(Math.random() * (quotes.length - 1));
  QUOTE_BLOCK.textContent = quotes[rdnNumber];
}

export { PopulateDOM };