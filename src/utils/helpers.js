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
  // Ranges (°F):
  // - hot:  tempF >= 80
  // - warm: 60 <= tempF < 80
  // - cool: 32 <= tempF < 60
  // - cold: tempF < 32
  if (temperature >= 80) return "hot";
  if (temperature >= 60) return "warm";
  if (temperature >= 32) return "cool";
  return "cold";
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
