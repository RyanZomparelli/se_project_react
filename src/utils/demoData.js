import { weatherCards } from "./constants";

// Shape these to match real clothing items from the API
// so that components like ItemCard and ClothesSection can
// use them without extra guards.
export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
    likes: [],
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    likes: [],
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
    likes: [],
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
    likes: [],
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    likes: [],
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
    likes: [],
  },
  // Extra warm-weather items (Clouds / mild)
  {
    _id: 6,
    name: "Cardigan",
    weather: "warm",
    imageUrl:
      "https://images.garmentory.com/images/8419165/xl/LOOP----Babaa-Cardigan-Sweater---82--20221206210656.jpg?1670360818",
    likes: [],
  },
  {
    _id: 7,
    name: "Long Sleeve Shirt",
    weather: "warm",
    imageUrl:
      "https://i.ebayimg.com/images/g/Q1AAAOSwuc9iFomP/s-l1200.jpg",
    likes: [],
  },
  {
    _id: 8,
    name: "Light Jacket",
    weather: "warm",
    imageUrl:
      "https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwb0648ed2/images/hi-res/20320_AQT.jpg?sw=1400&sh=1400&sfrm=png&q=90&bgcolor=f3f4ef",
    likes: [],
  },
  // Extra hot-weather items (Clear / sunny)
  {
    _id: 9,
    name: "Tank Top",
    weather: "hot",
    imageUrl:
      "https://www.citysport.it/sync/foto/P25---nike---95A773R78.JPG",
    likes: [],
  },
  {
    _id: 10,
    name: "Shorts",
    weather: "hot",
    imageUrl:
      "https://res.cloudinary.com/yerdle/image/upload/w_800,h_800,c_fit,q_auto:good,f_auto/v1719330863/production/partners/8/inventoryItem/6149083/ydufrqsgrzul5nbe8wmn.jpg",
    likes: [],
  },
  // Extra cold-weather items (Rain, Snow, Fog, Thunderstorm)
  {
    _id: 11,
    name: "Scarf",
    weather: "cold",
    imageUrl:
      "https://i.etsystatic.com/17244086/r/il/8e4a39/3299464612/il_fullxfull.3299464612_5cm8.jpg",
    likes: [],
  },
  {
    _id: 12,
    name: "Beanie",
    weather: "cold",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/050/519/746/small/a-black-knit-hat-is-sitting-on-a-gray-surface-free-photo.jpeg",
    likes: [],
  },
  {
    _id: 13,
    name: "Boots",
    weather: "cold",
    imageUrl:
      "https://photos-us.bazaarvoice.com/photo/2/cGhvdG86dGltYmVybGFuZHB3cg/ddbbe286-b20c-558b-83f9-eb341a7dce25",
    likes: [],
  },
];

// Helper: map a weather condition -> tempRange used by clothing items
const conditionToTempRange = (condition) => {
    switch (condition) {
      case "Clear":
        return "hot";
      case "Clouds":
        return "warm";
      case "Rain":
      case "Thunderstorm":
      case "Snow":
      case "Fog":
        return "cold";
      default:
        return "warm";
    }
  };
  
  // Use a high count so all items for each weather type show (hot: 4, warm: 5, cold: 5)
  const pickItemsForRange = (items, range, count = 6) =>
    items.filter((i) => i.weather === range).slice(0, count);
  
  // Demo scenes (cycle through this array)
  export const demoScenes = [
    {
      id: "miami-day-clear",
      location: "Miami, FL",
      isDay: true,
      condition: "Clear",
      weatherCardUrl: weatherCards.find(
        (c) => c.isDay === true && c.weather === "Clear"
      ).url,
      temp: { F: 88, C: 31 },
      tempRange: conditionToTempRange("Clear"),
      items: pickItemsForRange(defaultClothingItems, conditionToTempRange("Clear")),
    },
    {
      id: "seattle-day-clouds",
      location: "Seattle, WA",
      isDay: true,
      condition: "Clouds",
      weatherCardUrl: weatherCards.find(
        (c) => c.isDay === true && c.weather === "Clouds"
      ).url,
      temp: { F: 66, C: 19 },
      tempRange: conditionToTempRange("Clouds"),
      items: pickItemsForRange(
        defaultClothingItems,
        conditionToTempRange("Clouds")
      ),
    },
    {
      id: "dc-day-rain",
      location: "Washington, DC",
      isDay: true,
      condition: "Rain",
      weatherCardUrl: weatherCards.find(
        (c) => c.isDay === true && c.weather === "Rain"
      ).url,
      temp: { F: 52, C: 11 },
      tempRange: conditionToTempRange("Rain"),
      items: pickItemsForRange(defaultClothingItems, conditionToTempRange("Rain")),
    },
    {
      id: "denver-night-snow",
      location: "Denver, CO",
      isDay: false,
      condition: "Snow",
      weatherCardUrl: weatherCards.find(
        (c) => c.isDay === false && c.weather === "Snow"
      ).url,
      temp: { F: 28, C: -2 },
      tempRange: conditionToTempRange("Snow"),
      items: pickItemsForRange(defaultClothingItems, conditionToTempRange("Snow")),
    },
    {
      id: "sf-night-fog",
      location: "San Francisco, CA",
      isDay: false,
      condition: "Fog",
      weatherCardUrl: weatherCards.find(
        (c) => c.isDay === false && c.weather === "Fog"
      ).url,
      temp: { F: 48, C: 9 },
      tempRange: conditionToTempRange("Fog"),
      items: pickItemsForRange(defaultClothingItems, conditionToTempRange("Fog")),
    },
    {
      id: "atl-night-thunderstorm",
      location: "Atlanta, GA",
      isDay: false,
      condition: "Thunderstorm",
      weatherCardUrl: weatherCards.find(
        (c) => c.isDay === false && c.weather === "Thunderstorm"
      ).url,
      temp: { F: 44, C: 7 },
      tempRange: conditionToTempRange("Thunderstorm"),
      items: pickItemsForRange(
        defaultClothingItems,
        conditionToTempRange("Thunderstorm")
      ),
    },
  ];