export const weatherCards = [
  {
    isDay: true,
    weather: "sunny",
    //We can’t simply use relative paths to the image files.
    // Instead, Vite requires a specific syntax:
    url: new URL("../assets/sunny.png", import.meta.url).href,
  },
  {
    isDay: true,
    weather: "cloudy",
    //This syntax uses the global URL constructor to create a URL object
    // using the path to the image.
    url: new URL("../assets/cloudy.png", import.meta.url).href,
  },
  {
    isDay: true,
    weather: "rain",
    url: new URL("../assets/rain.png", import.meta.url).href,
  },
  {
    isDay: true,
    weather: "storm",
    url: new URL("../assets/storm.png", import.meta.url).href,
  },
  {
    isDay: true,
    weather: "snow",
    url: new URL("../assets/snow.png", import.meta.url).href,
  },
  {
    isDay: true,
    weather: "fog",
    url: new URL("../assets/fog.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "clear",
    url: new URL("../assets/night_clear.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "cloudy",
    url: new URL("../assets/night_cloudy.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "rain",
    url: new URL("../assets/night_rain.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "storm",
    url: new URL("../assets/night_storm.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "snow",
    url: new URL("../assets/night_snow.png", import.meta.url).href,
  },
  {
    isDay: false,
    weather: "fog",
    url: new URL("../assets/night_fog.png", import.meta.url).href,
  },
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const apiKey = "ed3c58fb920b8b57f94868e15fc1bf7b";

export const location = {
  latitude: "39.290386",
  longitude: "-76.61219",
};
