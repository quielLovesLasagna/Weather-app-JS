"use strict";

// Elements
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");
// End of Elements

// API Key
const apiKey = "a707d9b2c96a826ef5f94abfef56ed9e";
// API URL
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Functions

// find location, check location, display data
const checkWeather = async (location) => {
  try {
    const res = await fetch(apiURL + location + `&appid=${apiKey}`);
    const data = await res.json();

    if (+res.status === 404) {
      error.style.display = "block";
      weather.style.display = "none";
    } else {
      temp.innerHTML = `${Math.round(data.main.temp)}°C`;
      city.innerHTML = data.name;
      humidity.innerHTML = `${data.main.humidity}%`;
      wind.innerHTML = `${data.wind.speed} km/h`;
      weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;
      error.style.display = "none";
      weather.style.display = "block";
    }
  } catch (err) {
    alert(err);
  }
};

// End of Functions

// Event Handlers

// invoke checkWeather function when searchBtn is clicked
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// End of Event Handlers
