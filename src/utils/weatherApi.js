import { handleResponse } from "./api";

export function getWeatherData({ latitude, longitude }, key) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`
  ).then(handleResponse);
}

export function filterWeatherData(data) {
  const weatherData = {
    temp: {
      F: Math.round(data.main.temp),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
    tempFeel: setTemperatureRange(data.main.temp),
    isDay: data.weather[0].icon.includes("d"),
    condition: data.weather[0].main,
    location: data.name,
  };
  return weatherData;
}

export function setTemperatureRange(temperature) {
  if (temperature >= 80) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}
