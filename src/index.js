import { Weather } from "./weather.js"
import { pageLoad } from "./pageload.js";
import { convertTemp } from "./convertTemp.js";

pageLoad();

const input = document.querySelector('input');
const button = document.querySelector('button');
const tempButton = document.querySelector('[data = "toggle"]');
const cancel = document.querySelector('[data = "cancel"]');
const tempSymbol = document.querySelector('[data = "temp-symbol"]');
const dataBox = document.querySelector('.data-box');
const temperature = document.querySelector('[data = "temperature"]');
const feelsLike = document.querySelector('[data = "feels-like"]');
const feelsLabel = document.querySelector('[data = "feels-label"]');
const feelsSymbol = document.querySelector('[data = "feels-symbol"]');
let name = document.querySelector('[data = "name"]');
let description = document.querySelector('[data = "description"]');
let loading = document.querySelector('.loading');
let humidity = document.querySelector('[data = "humidity"]');
let isCelsius = true;

const getWeatherData = async() => {
    try {
        loading.classList.remove('loading');
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=2d5ed2f42a6650224e2a6f20047d7b76`, {mode: 'cors'});
        let weatherData = await response.json();
        loading.classList.add('loading');
        let newTemp = convertTemp(weatherData.main.temp);
        let feelTemp = convertTemp(weatherData.main.feels_like);
        let weather = new Weather(weatherData.name, weatherData.weather[0].description, newTemp, weatherData.main.humidity, feelTemp);
        name.textContent = `${weather.name}`;
        description.textContent = `${weather.description}`;
        temperature.textContent = `${weather.temp}`;
        humidity.textContent = `humidity: ${weather.humidity}%`;
        feelsLike.textContent = `${weather.feelsLike}`;
        feelsLabel.textContent = "Feels like: ";
        tempSymbol.textContent = '°C';
        feelsSymbol.textContent = '°C';
        tempButton.classList.remove('hidden');
        cancel.classList.remove('hidden');
        dataBox.classList.add('background-box');
        tempButton.textContent = "°C";
        isCelsius = true;
    } catch(err) {
        alert("Please enter a real location!");
        console.log(err);
    }
    
    input.value = "";
}

const tempToggle = () => {
    let newTemp = Number(temperature.textContent);
    let feelTemp = Number(temperature.textContent);
    if (isCelsius) {
        temperature.textContent = `${Math.round((newTemp * 9/5) + 32)}`;
        feelsLike.textContent = `${Math.round((feelTemp * 9/5) + 32)}`;
        tempButton.textContent = "°F";
        tempSymbol.textContent = "°F";
        feelsSymbol.textContent = "°F";
        isCelsius = false;
    } else if (!isCelsius) {
        temperature.textContent = `${Math.round((newTemp - 32) * 5/9)}`;
        feelsLike.textContent = `${Math.round((feelTemp - 32) * 5/9)}`;
        tempButton.textContent = "°C";
        tempSymbol.textContent = "°C";
        feelsSymbol.textContent = "°C";
        isCelsius = true;
    }
}

button.addEventListener('click', getWeatherData);
tempButton.addEventListener('click', tempToggle);
cancel.addEventListener('click', () => {
    name.textContent = '';
    description.textContent = '';
    temperature.textContent = '';
    humidity.textContent = '';
    feelsLike.textContent = '';
    feelsLabel.textContent = '';
    tempSymbol.textContent = '';
    feelsSymbol.textContent = '';
    tempButton.textContent = '';
    dataBox.classList.remove('background-box');
    tempButton.classList.add('hidden');
    cancel.classList.add('hidden');
})