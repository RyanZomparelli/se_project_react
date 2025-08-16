export const baseUrl = "http://localhost:3001";

function handleResponse(res) {
  if (!res.ok) {
    const err = new Error(`HTTP: ${res.status}`);
    console.error(err.stack);
    throw err;
  }
  return res.json();
}

//Avoid variable shadowing but pass baseUrl as a default value for the parameter
export function getClothingItems(base = baseUrl) {
  return fetch(`${base}/items`).then((res) => handleResponse(res));
}

export function addClothingItem({ name, imageUrl, weather }, base = baseUrl) {
  return fetch(`${base}/items`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => handleResponse(res));
}
