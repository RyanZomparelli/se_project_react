import { weatherCards } from "./constants";

//I was using a different property from the weather API that returned many more possible conditions.
//I had a crazy else if chain to check all the possible conditions.
export function getWeatherCard(isDay, condition) {
  const weatherCard = weatherCards.find((item) => {
    return item.weather === condition && item.isDay === isDay;
  });
  return weatherCard || weatherCards[0];
}
