import { Weather } from './weather.js';

// async function getWeather(location) {
//   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2d5ed2f42a6650224e2a6f20047d7b76`, {mode: 'cors'});
//   const weatherData = await response.json();
//   const newWeather = new Weather(weatherData.name, weatherData.weather[0].main, weatherData.main.temp)
//   return newWeather;
// }

// export { getWeather }