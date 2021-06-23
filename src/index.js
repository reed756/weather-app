// import { getWeather } from "./getweather";
import { Weather } from "./weather.js"

async function getWeather(location) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2d5ed2f42a6650224e2a6f20047d7b76`, {mode: 'cors'});
    let weatherData = await response.json();

    // console.log(weatherData);
    return weatherData;
}

console.log(getWeather('London'));

// console.log(getWeather('London'));

// api.openweathermap.org/data/2.5/weather?q=London&appid=2d5ed2f42a6650224e2a6f20047d7b76

// console.log(One);

// console.log(test);

// class Weather {
//     constructor(name, description, temp) {
//         this.name = name;
//         this.description = description;
//         this.temp = temp;
//     }
// }

// const convertData = (weatherData) => {
//     const weatherObject = new Weather(weatherData.name, weatherData.weather[0].main, weatherData.main.temp);
//     console.log(weatherObject);
// }

// convertData(test);