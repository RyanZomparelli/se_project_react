export function getWeatherData({ latitude, longitude }, apiKey) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function setTemperatureRange(temperature) {
  if (temperature >= 80) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else if (temperature >= 50) {
    return "cool";
  } else {
    return "cold";
  }
}
