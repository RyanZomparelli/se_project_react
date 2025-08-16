export const weatherCards = [
  {
    isDay: true,
    weather: "Clear",
    //We can’t simply use relative paths to the image files.
    // Instead, Vite requires a specific syntax:
    url: new URL("../assets/sunny.png", import.meta.url).href,
  },
  {
    isDay: true,
    weather: "Clouds",
    //This syntax uses the global URL constructor to create a URL object
    // using the path to the image.
    url: new URL("../assets/cloudy.png", import.meta.url).href,
  },
  {
    isDay: true,
    weather: "Rain",
    url: new URL("../assets/rain.png", import.meta.url).href,
  },
  {
    isDay: true,
    weather: "Thunderstorm",
    url: new URL("../assets/storm.png", import.meta.url).href,
  },
  {
    isDay: true,
    weather: "Snow",
    url: new URL("../assets/snow.png", import.meta.url).href,
  },
  {
    isDay: true,
    weather: "Fog",
    url: new URL("../assets/fog.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "Clear",
    url: new URL("../assets/night_clear.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "Clouds",
    url: new URL("../assets/night_cloudy.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "Rain",
    url: new URL("../assets/night_rain.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "Thunderstorm",
    url: new URL("../assets/night_storm.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "Snow",
    url: new URL("../assets/night_snow.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "Fog",
    url: new URL("../assets/night_fog.png", import.meta.url).href,
  },
];

export const apiKey = "ed3c58fb920b8b57f94868e15fc1bf7b";

export const coordinates = {
  latitude: "39.290386",
  longitude: "-76.61219",
};
