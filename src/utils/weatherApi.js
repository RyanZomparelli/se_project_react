import { handleResponse } from "./api";
import { countryCode } from "./constants";

// Get coordinates from users zip codes.
export function getCoordinates(zipCode, key) {
  return fetch(
    `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${key}`
  ).then(handleResponse);
}

export function getWeatherData({ latitude, longitude }, key) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`
  ).then(handleResponse);
}
