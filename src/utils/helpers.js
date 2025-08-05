import { weatherCards } from "./constants";

export function getWeatherCard(isDay, description) {
  if (isDay) {
    if (description === "clear sky") {
      return weatherCards[0];
    } else if (
      description === "few clouds" ||
      description === "scattered clouds" ||
      description === "broken clouds"
    ) {
      return weatherCards[1];
    } else if (description === "shower rain" || description === "rain") {
      return weatherCards[2];
    } else if (description === "thunderstorm") {
      return weatherCards[3];
    } else if (description === "snow") {
      return weatherCards[4];
    } else if (description === "mist") {
      return weatherCards[5];
    } else {
      return weatherCards[0];
    }
  } else {
    if (description === "clear") {
      return weatherCards[6];
    } else if (
      description === "few clouds" ||
      description === "scattered clouds" ||
      description === "broken clouds" ||
      description === "overcast clouds"
    ) {
      return weatherCards[7];
    } else if (description === "shower rain" || description === "rain") {
      return weatherCards[8];
    } else if (description === "thunderstorm") {
      return weatherCards[9];
    } else if (description === "snow") {
      return weatherCards[10];
    } else if (description === "mist") {
      return weatherCards[11];
    } else {
      return weatherCards[6];
    }
  }
}
