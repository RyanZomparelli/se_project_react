import { weatherCards } from "./constants";

//I was using a different property from the weather API that returned many more possible conditions.
//I had a crazy else if chain to check all the possible conditions.
export function getWeatherCard(isDay, condition) {
  const weatherCard = weatherCards.find((item) => {
    return item.weather === condition && item.isDay === isDay;
  });
  return weatherCard || weatherCards[0];
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
