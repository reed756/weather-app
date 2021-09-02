import { Weather } from "./weather.js"
import { pageLoad } from "./pageload.js";
import { convertTemp } from "./convertTemp.js";

pageLoad();

const input = document.querySelector('input');
const button = document.querySelector('button');
const tempButton = document.querySelector('[data = "toggle"]');
let temperature = document.querySelector('[data = "temperature"]');
let isCelsius = true;

const getWeatherData = async() => {

    let name = document.querySelector('[data = "name"]');
    let description = document.querySelector('[data = "description"]');
    let loading = document.querySelector('.loading');
    let humidity = document.querySelector('[data = "humidity"]');
    let feelsLike = document.querySelector('[data = "feels-like"]');

    try {
        loading.classList.remove('loading');
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=2d5ed2f42a6650224e2a6f20047d7b76`, {mode: 'cors'});
        let weatherData = await response.json();
        loading.classList.add('loading');
        let newTemp = convertTemp(weatherData.main.temp);
        let feelTemp = convertTemp(weatherData.main.feels_like);
        console.log(weatherData);
        let weather = new Weather(weatherData.name, weatherData.weather[0].description, newTemp, weatherData.main.humidity, feelTemp);
        console.log(weather);
        name.textContent = `${weather.name}`;
        description.textContent = `${weather.description}`;
        temperature.textContent = `${weather.temp}`;
        humidity.textContent = `humidity: ${weather.humidity}%`;
        feelsLike.textContent = `feels like: ${weather.feelsLike}`;
        tempButton.classList.remove('hidden');
        tempButton.textContent = "°C";
        isCelsius = true;

    } catch(err) {
        alert("Please enter a real location!");
    }
    
    input.value = "";
}

const tempToggle = () => {
    
    let temperature = document.querySelector('[data = "temperature"]');
    if (isCelsius) {
        let newTemp = Number(temperature.textContent);
        temperature.textContent = `${Math.round((newTemp * 9/5) + 32)}`;
        tempButton.textContent = "°F";
        isCelsius = false;
    } else if (!isCelsius) {
        let newTemp = Number(temperature.textContent);
        temperature.textContent = `${Math.round((newTemp - 32) * 5/9)}`;
        tempButton.textContent = "°C";
        isCelsius = true;
    }
}

button.addEventListener('click', getWeatherData);
tempButton.addEventListener('click', tempToggle);